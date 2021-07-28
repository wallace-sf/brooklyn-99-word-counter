const ld = require("lodash");
const { map } = require("rxjs/operators");

const groupByWord = () =>
  map((arrWordInObj = []) =>
    ld
      .values(ld.groupBy(arrWordInObj, "word"))
      .map((group) => ({ ...group[0], qty: group.length }))
  );

module.exports = { groupByWord };
