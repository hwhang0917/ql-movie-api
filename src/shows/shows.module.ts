import { Module } from '@nestjs/common';
import { ShowsService } from './shows.service';
import { ShowsResolver } from './shows.resolver';

@Module({
  providers: [ShowsService, ShowsResolver]
})
export class ShowsModule {}
