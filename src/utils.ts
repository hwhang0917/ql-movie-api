// Hangul Unicode RegEx from Wikipedia (https://en.wikipedia.org/wiki/Hangul#Unicode_Charts)
const HANGUL_REGEX: RegExp = /[\uac00-\ud7af]|[\u1100-\u11ff]|[\u3130-\u318f]|[\ua960-\ua97f]|[\ud7b0-\ud7ff]/g;

export const isKorean = (str: string) =>
  str.match(HANGUL_REGEX) ? true : false;
