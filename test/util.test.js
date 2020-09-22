import { isKorean } from "../src/utils";

const ALL_KOR = "한글";
const ALL_ENG = "English";
const ALL_SPEC = "!##$%@^";

const MIX_KORENG = "한글kor";
const MIX_ENGKOR = "eng영어";

test(`All Korean Text: ${ALL_KOR}`, () => {
  expect(isKorean(ALL_KOR)).toBe(true);
});

test(`All English Text: ${ALL_ENG}`, () => {
  expect(isKorean(ALL_ENG)).toBe(false);
});

test(`All special Case: ${ALL_SPEC}`, () => {
  expect(isKorean(ALL_SPEC)).toBe(false);
});

test(`Mixed Korean & English: ${MIX_KORENG}`, () => {
  expect(isKorean(MIX_KORENG)).toBe(true);
});

test(`Mixed English & Korean: ${MIX_ENGKOR}`, () => {
  expect(isKorean(MIX_ENGKOR)).toBe(true);
});
