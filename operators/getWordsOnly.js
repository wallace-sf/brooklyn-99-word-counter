const { map } = require("rxjs/operators");

const { ENGLISH_WORDS_ONLY } = require("../regex");

const getWordsOnly = () =>
  map((stringArr = []) =>
    stringArr.map((text) => text.match(ENGLISH_WORDS_ONLY) || "")
  );

module.exports = { getWordsOnly };
