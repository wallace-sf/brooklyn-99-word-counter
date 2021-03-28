const path = require("path");

const {
  readDirPromised,
  getStrFiles,
  readAllFiles,
  writeFilePromised,
  removeSubStrFromStr,
  removeElementsIfEmpty,
  removeElementsIfIncludes,
  removeIfOnlyNumbers,
  toStringArr,
  toSplittedStr,
  getWordsOnly,
  toCapitalizedArr,
  toJoinedArrays,
  mapWordInObj,
  groupByWord,
  orderByQty,
  toFlattedArr,
} = require("./utils");

const pathSubtitles = path.join(__dirname, "./data/legendas");
const pathWriteFileSubstitle = path.join(__dirname, 'word_counter_bb99.json');

console.log(pathWriteFileSubstitle);

readDirPromised(pathSubtitles)
  .then(getStrFiles)
  .then(readAllFiles(pathSubtitles))
  .then(toStringArr)
  .then(toJoinedArrays)
  .then(removeSubStrFromStr(["<i>", "</i>", "\r"]))
  .then(toSplittedStr("\n"))
  .then(removeElementsIfEmpty)
  .then(removeElementsIfIncludes(["-->", "<font", "</font>"]))
  .then(removeIfOnlyNumbers)
  .then(getWordsOnly)
  .then(toFlattedArr)
  .then(removeElementsIfEmpty)
  .then(toCapitalizedArr)
  .then(mapWordInObj)
  .then(groupByWord)
  .then(orderByQty)
  .then((arrWords) =>
    writeFilePromised(pathWriteFileSubstitle, JSON.stringify(arrWords))
  )
  .catch(console.log);
