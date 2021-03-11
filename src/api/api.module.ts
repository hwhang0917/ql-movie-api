import {
  DynamicModule,
  Global,
  HttpModule,
  HttpService,
  Module,
  OnModuleInit,
} from '@nestjs/common';
import { blue, green } from 'chalk';
import { ApiModuleOptions } from './api.interface';
import { ApiService } from './api.service';

@Module({})
@Global()
export class ApiModule implements OnModuleInit {
  constructor(private readonly httpService: HttpService) {}

  static forRoot(options: ApiModuleOptions): DynamicModule {
    return {
      module: ApiModule,
      imports: [
        HttpModule.register({
          baseURL: options.apiDomain,
          params: {
            api_key: options.apiKey,
            language: options.language,
            region: options.region,
          },
        }),
      ],
      providers: [ApiService],
      exports: [ApiService],
    };
  }

  onModuleInit() {
    // Set up terminal logging by intercepting Axios request
    this.httpService.axiosRef.interceptors.request.use((config) => {
      const { method, url } = config;

      const date = new Date();
      const dateString =
        date.getMonth() < 10
          ? `0${date.toLocaleDateString()}`
          : date.toLocaleDateString();
      const timeString = date.toLocaleTimeString();

      const serviceName = blue('[HTTP Service] - ');
      const currentTime = [dateString, timeString].join(', ');
      const httpMethod = green.bold(`  [${method.toUpperCase()}]`);
      const requestUrl = blue(url);

      console.log(
        serviceName + [currentTime, httpMethod, requestUrl].join('\t'),
      );

      return config;
    });
  }
}
