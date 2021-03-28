const fs = require("fs");
const path = require("path");
const ld = require("lodash");

// regex
const STR_FORMAT = /^.*\.(srt)$/gi;
const ENGLISH_WORDS_ONLY = /\b([a-zA-Z'])+\b/gi;

// common
const readFilePromised = (path, options = {}) => {
  return new Promise((resolve, reject) => {
    const readFileCb = (err, data) => (err ? reject(err) : resolve(data));

    fs.readFile(path, options, readFileCb);
  });
};

const readDirPromised = (path, options = {}) => {
  return new Promise((resolve, reject) => {
    const readDirCb = (err, files) => (err ? reject(err) : resolve(files));

    fs.readdir(path, options, readDirCb);
  });
};

const readAllFiles = (pathSubtitles) => (fileNames = []) => {
  const readFilesPromises = fileNames.map((filename) => {
    const filePath = path.join(pathSubtitles, filename);

    return new Promise((resolve, reject) => {
      readFilePromised(filePath).then(resolve).catch(reject);
    });
  });

  return Promise.all(readFilesPromises);
};

const writeFilePromised = (path, data, options = {}) => {
  return new Promise((resolve, reject) => {
    const writeFileCb = (err) => (err ? reject(err) : resolve());

    fs.writeFile(path, data, options, writeFileCb);
  });
};

const removeSubStrFromStr = (arrSubStr = []) => (str) =>
  arrSubStr.reduce(
    (acc, subStr) => acc.replace(new RegExp(subStr, "gi"), ""),
    str
  );

const removeElementsIfEmpty = (arr = []) => arr.filter((el) => !!el);

const removeElementsIfIncludes = (arrStr = []) => (arr = []) =>
  arr.filter((el) => !arrStr.some((str) => el.includes(str)));

const removeIfOnlyNumbers = (arr = []) =>
  arr.filter((el) => {
    const parsedElement = parseInt(el);

    return parsedElement !== parsedElement;
  });

// get

const getStrFiles = (filesNameArr = []) =>
  filesNameArr.filter((fileName) => !!fileName.match(STR_FORMAT));

const getWordsOnly = (stringArr = []) =>
  stringArr.map((text) => text.match(ENGLISH_WORDS_ONLY) || "");

// map
const mapWordInObj = (wordsOnlyArr = []) =>
  wordsOnlyArr.map((word) => ({ word }));

const groupByWord = (arrWordInObj = []) =>
  ld
    .values(ld.groupBy(arrWordInObj, "word"))
    .map((group) => ({ ...group[0], qty: group.length }));

const orderByQty = (arrWords) => ld.orderBy(arrWords, ["qty", 'word'], ["desc", 'asc']);

// to
const toStringArr = (arr = []) => arr.map((el) => el.toString());
const toSplittedStr = (separator) => (text) => text.split(separator);
const toCapitalizedArr = (arr = []) =>
  arr.map((text = "") => ld.capitalize(text));
const toJoinedArrays = (arr = []) => arr.join();
const toFlattedArr = (arr = []) => arr.flat();

module.exports = {
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
};
