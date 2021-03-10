import {
  DynamicModule,
  Global,
  HttpModule,
  HttpService,
  Module,
  OnModuleInit,
} from '@nestjs/common';
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
    // Set up terminal logging
    this.httpService.axiosRef.interceptors.request.use((config) => {
      console.log(
        `[HTTP Service] ${new Date().toLocaleTimeString()} [${config.method.toUpperCase()}] ${
          config.baseURL + '/' + config.url
        }`,
      );
      return config;
    });
  }
}
