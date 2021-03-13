import {
  DynamicModule,
  Global,
  HttpModule,
  HttpService,
  Module,
  OnModuleInit,
} from '@nestjs/common';
import { START_TIME_CONFIG } from 'src/common/common.constants';
import { ApiModuleOptions } from './api.interface';
import { httpLog } from './api.logger';
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
    // Request Interceptor
    this.httpService.axiosRef.interceptors.request.use((config) => {
      // Set start HRtime to config
      config.headers[START_TIME_CONFIG] = process.hrtime();
      return config;
    });

    // Response Interceptor
    this.httpService.axiosRef.interceptors.response.use((response) => {
      const { config, status, statusText } = response;
      const { method, url, headers } = config;
      const startTime = headers[START_TIME_CONFIG];

      httpLog({
        service: 'HTTP Service',
        method,
        url,
        startTime,
        status,
        statusText,
      });

      return response;
    });
  }
}
