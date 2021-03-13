import { Args, Query, Resolver } from '@nestjs/graphql';
import { IdInput, SearchInput } from 'src/common/dtos/common.dto';
import { EpisodeDetailInput } from './dtos/episode-detail.dto';
import { EpisodeOutput } from './dtos/episode.dto';
import { SeasonDetailInput } from './dtos/season-detail.dto';
import { SeasonOutput } from './dtos/season.dto';
import { ShowOutput, ShowsOutput } from './dtos/shows.dto';
import { Show } from './entities/show.entity';
import { ShowsService } from './shows.service';

@Resolver((of) => Show)
export class ShowsResolver {
  constructor(private readonly showsService: ShowsService) {}

  @Query((returns) => ShowsOutput)
  topRatedShows(): Promise<ShowsOutput> {
    return this.showsService.topRated();
  }

  @Query((returns) => ShowsOutput)
  popularShows(): Promise<ShowsOutput> {
    return this.showsService.popular();
  }

  @Query((returns) => ShowsOutput)
  airingTodayShows(): Promise<ShowsOutput> {
    return this.showsService.airingToday();
  }

  @Query((returns) => ShowOutput)
  showDetail(@Args() showDetailInput: IdInput): Promise<ShowOutput> {
    return this.showsService.showDetail(showDetailInput.id);
  }

  @Query((returns) => ShowsOutput)
  searchShow(@Args() searchShowInput: SearchInput): Promise<ShowsOutput> {
    return this.showsService.searchShow(searchShowInput.query);
  }

  @Query((returns) => ShowsOutput)
  similarShows(@Args() similarShowsInput: IdInput): Promise<ShowsOutput> {
    return this.showsService.similarShows(similarShowsInput.id);
  }

  @Query((returns) => SeasonOutput)
  seasonDetail(
    @Args() seasonDetailInput: SeasonDetailInput,
  ): Promise<SeasonOutput> {
    return this.showsService.seasonDetail(
      seasonDetailInput.showId,
      seasonDetailInput.seasonNumber,
    );
  }

  @Query((returns) => EpisodeOutput)
  episodeDetail(
    @Args() episodeDetailInput: EpisodeDetailInput,
  ): Promise<EpisodeOutput> {
    return this.showsService.episodeDetail(
      episodeDetailInput.showId,
      episodeDetailInput.seasonNumber,
      episodeDetailInput.episodeNumber,
    );
  }
}
