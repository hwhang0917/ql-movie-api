export interface ApiModuleOptions {
  apiDomain: string;
  apiKey: string;
  language: string;
  region: string;
}

export type Parameters = {
  query?: string;
  append_to_response?: string;
};
