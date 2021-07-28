const { map } = require("rxjs/operators");

const removeSubStrFromStr = (arrSubStr = []) =>
  map((str) =>
    arrSubStr.reduce(
      (acc, subStr) => acc.replace(new RegExp(subStr, "gi"), ""),
      str
    )
  );

module.exports = { removeSubStrFromStr };
