export interface ApiModuleOptions {
  apiDomain: string;
  apiKey: string;
  language: 'ko-KR' | 'en-US';
  region: 'KR' | 'US';
}

export type Parameters = {
  query?: string;
  append_to_response?: string;
};
