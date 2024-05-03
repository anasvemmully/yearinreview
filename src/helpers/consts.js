const BASE_URL_WIKI_IMAGES = "https://upload.wikimedia.org/wikipedia/commons/";
const BASIC_CONFIG = {
  width: 512,
  height: 401,
};

const WIKIPEDIA = {
  source: `${BASE_URL_WIKI_IMAGES}/e/ed/WP20Symbols_MediaWiki.svg`,
  ...BASIC_CONFIG,
};
const PUZZLE = {
  source: `${BASE_URL_WIKI_IMAGES}/6/65/WP20Symbols_puzzleglobe1.svg`,
  ...BASIC_CONFIG,
};
const PUZZLE_COLLAB = {
  source: `${BASE_URL_WIKI_IMAGES}/c/c2/Adapted_Wikipedia20symbol_collaboration.svg`,
  ...BASIC_CONFIG,
};

const PEN_PAPER = {
  source: `${BASE_URL_WIKI_IMAGES}/7/7c/WP20Symbols_PENANDPAPER.svg`,
  ...BASIC_CONFIG,
};

const MEETING = {
  source: `${BASE_URL_WIKI_IMAGES}/f/f9/Adapted_Wikipedia20symbol_meeting.svg`,
  ...BASIC_CONFIG,
};

const FRIENDSHIP = {
  source: `${BASE_URL_WIKI_IMAGES}/7/72/Adapted_Wikipedia20symbol_friendship.svg`,
  ...BASIC_CONFIG,
};

const COMMUNITY = {
  source: `${BASE_URL_WIKI_IMAGES}/a/a3/Adapted_Wikipedia20symbol_community.svg`,
  ...BASIC_CONFIG,
};

const WIKIMEDIA_COMMONS_DROPDOWN_WITH_LANGUAGE = [
  { label: "Wikipedia", value: "wikipedia" },
  { label: "Wiktionary", value: "wiktionary" },
  { label: "Wikiquote", value: "wikiquote" },
  { label: "Wikibooks", value: "wikibooks" },
  { label: "Wikisource", value: "wikisource" },
  { label: "Wikinews", value: "wikinews" },
  { label: "Wikiversity", value: "wikiversity" },
  { label: "Wikivoyage", value: "wikivoyage" },
];

const WIKIMEDIA_COMMONS_DROPDOWN_WITHOUT_LANGUAGE = [
  { label: "Wikimedia Commons", value: "commons" },
  { label: "Wikidata", value: "wikidata" },
  { label: "MediaWiki", value: "mediawiki" },
  { label: "Meta", value: "meta" },
];

export {
  WIKIPEDIA,
  PUZZLE,
  PUZZLE_COLLAB,
  PEN_PAPER,
  MEETING,
  FRIENDSHIP,
  COMMUNITY,
  WIKIMEDIA_COMMONS_DROPDOWN_WITH_LANGUAGE,
  WIKIMEDIA_COMMONS_DROPDOWN_WITHOUT_LANGUAGE,
};