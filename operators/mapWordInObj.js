const { map } = require("rxjs/operators");

const mapWordInObj = () =>
  map((wordsOnlyArr = []) => wordsOnlyArr.map((word) => ({ word })));

module.exports = { mapWordInObj };
