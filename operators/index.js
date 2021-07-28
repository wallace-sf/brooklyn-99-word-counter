const { filterFilesByFormat } = require("./filerFilesByFormat");
const { toJoinedArrays } = require("./toJoinedArrays");
const { removeSubStrFromStr } = require("./removeSubStrFromStr");
const { toSplittedStr } = require("./toSplittedStr");
const { removeElementsIfEmpty } = require("./removeElementsIfEmpty");
const { removeElementsIfIncludes } = require("./removeElementsIfIncludes");
const { removeIfStartWithNumber } = require("./removeIfStartWithNumber");
const { getWordsOnly } = require("./getWordsOnly");
const { toFlattedArr } = require("./toFlattedArr");
const { toCapitalizedArr } = require("./toCapitalizedArr");
const { mapWordInObj } = require("./mapWordInObj");
const { groupByWord } = require("./groupByWord");
const { orderByQty } = require("./orderByQty");

module.exports = {
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
};
