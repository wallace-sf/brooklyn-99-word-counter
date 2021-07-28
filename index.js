const path = require("path");
const { concatAll, toArray, concatMap } = require("rxjs/operators");

const { readDir$, readFile$ } = require("./observables");
const {
  filterFilesByFormat,
  toJoinedArrays,
  removeSubStrFromStr,
  toSplittedStr,
  removeElementsIfEmpty,
  removeElementsIfIncludes,
  removeIfStartWithNumber,
  getWordsOnly,
  toFlattedArr,
  toCapitalizedArr,
  mapWordInObj,
  groupByWord,
  orderByQty,
} = require("./operators");
const { writeFile } = require("./observers");
const { STR_FORMAT } = require("./regex");

const pathSubtitles = path.join(__dirname, "./data/legendas");
const pathWriteFileSubstitle = path.join(__dirname, "word_counter_bb99.json");

readDir$(pathSubtitles)
  .pipe(
    concatAll(),
    filterFilesByFormat(STR_FORMAT),
    concatMap(readFile$(pathSubtitles)),
    toArray(),
    toJoinedArrays(),
    removeSubStrFromStr(["<i>", "</i>", "\r"]),
    toSplittedStr("\n"),
    removeElementsIfEmpty(),
    removeElementsIfIncludes(["<font", "</font>"]),
    removeIfStartWithNumber(),
    getWordsOnly(),
    toFlattedArr(),
    removeElementsIfEmpty(),
    toCapitalizedArr(),
    mapWordInObj(),
    groupByWord(),
    orderByQty()
  )
  .subscribe(writeFile(pathWriteFileSubstitle));
