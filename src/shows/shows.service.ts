import { Injectable } from '@nestjs/common';
import { ApiService } from 'src/api/api.service';
import { errorMessage } from 'src/errors/errors';
import { EpisodeOutput } from './dtos/episode.dto';
import { SeasonOutput } from './dtos/season.dto';
import { ShowOutput, ShowsOutput } from './dtos/shows.dto';

@Injectable()
export class ShowsService {
  constructor(private readonly api: ApiService) {}

  async topRated(): Promise<ShowsOutput> {
    try {
      const shows = await this.api.shows.topRated();
      return { ok: true, shows };
    } catch (error) {
      return { ok: false, error };
    }
  }

  async popular(): Promise<ShowsOutput> {
    try {
      const shows = await this.api.shows.popular();
      return { ok: true, shows };
    } catch (error) {
      return { ok: false, error };
    }
  }

  async airingToday(): Promise<ShowsOutput> {
    try {
      const shows = await this.api.shows.airingToday();
      return { ok: true, shows };
    } catch (error) {
      return { ok: false, error };
    }
  }

  async showDetail(id: number): Promise<ShowOutput> {
    try {
      const show = await this.api.shows.findById(id);
      if (!show) {
        return { ok: false, error: errorMessage.showNotFound };
      }
      return { ok: true, show };
    } catch (error) {
      return { ok: false, error };
    }
  }

  async searchShow(query: string): Promise<ShowsOutput> {
    try {
      const shows = await this.api.search.show(query);
      return { ok: true, shows };
    } catch (error) {
      return { ok: false, error };
    }
  }

  async similarShows(id: number): Promise<ShowsOutput> {
    try {
      const shows = await this.api.shows.findSimilarById(id);
      if (!shows) {
        return { ok: false, error: errorMessage.showNotFound };
      }
      return { ok: true, shows };
    } catch (error) {
      return { ok: false, error };
    }
  }

  async seasonDetail(
    showId: number,
    seasonNumber: number,
  ): Promise<SeasonOutput> {
    try {
      const show = await this.api.shows.findById(showId);
      if (!show) {
        return { ok: false, error: errorMessage.showNotFound };
      }
      const season = await this.api.shows.getSeasonDetail(showId, seasonNumber);
      if (!season) {
        return { ok: false, error: errorMessage.seasonNotFound };
      }
      return { ok: true, season };
    } catch (error) {
      return { ok: false, error };
    }
  }

  async episodeDetail(
    showId: number,
    seasonNumber: number,
    episodeNumber: number,
  ): Promise<EpisodeOutput> {
    try {
      const show = await this.api.shows.findById(showId);
      if (!show) {
        return { ok: false, error: errorMessage.showNotFound };
      }
      const season = await this.api.shows.getSeasonDetail(showId, seasonNumber);
      if (!season) {
        return { ok: false, error: errorMessage.seasonNotFound };
      }
      const episode = await this.api.shows.getEpisodeDetail(
        showId,
        seasonNumber,
        episodeNumber,
      );
      if (!episode) {
        return { ok: false, error: errorMessage.episodeNotFound };
      }
      return { ok: true, episode };
    } catch (error) {
      return { ok: false, error };
    }
  }
}
