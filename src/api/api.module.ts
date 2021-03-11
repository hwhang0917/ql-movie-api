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
    const START_TIME = 'request-startTime';
    // Request Interceptor
    this.httpService.axiosRef.interceptors.request.use((config) => {
      config.headers[START_TIME] = process.hrtime();

      return config;
    });

    // Response Interceptor
    this.httpService.axiosRef.interceptors.response.use((response) => {
      const { method, url, headers } = response.config;

      // request runtime computation
      const end = process.hrtime(headers[START_TIME]);
      const millisecond = Math.round(end[0] * 1000 + end[1] / 1000000);
      const requestTime = blue(`+${millisecond}ms`);

      // current time computation
      const date = new Date();
      const dateString =
        date.getMonth() < 10
          ? `0${date.toLocaleDateString()}`
          : date.toLocaleDateString();
      const timeString = date.toLocaleTimeString();

      // generate log string
      const serviceName = blue('[HTTP Service] - ');
      const currentTime = [dateString, timeString].join(', ');
      const httpMethod = green.bold(`  [${method.toUpperCase()}]`);
      const requestUrl = blue(url);

      console.log(
        serviceName +
          [currentTime, httpMethod, requestUrl, requestTime].join('\t'),
      );

      return response;
    });
  }
}
