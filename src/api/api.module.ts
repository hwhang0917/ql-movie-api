import { DynamicModule, Global, HttpModule, Module } from '@nestjs/common';
import { ApiModuleOptions } from './api.interface';
import { ApiService } from './api.service';

@Module({})
@Global()
export class ApiModule {
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
}
