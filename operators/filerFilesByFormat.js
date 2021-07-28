const { isRegExp } = require("lodash");
const { filter } = require("rxjs/operators");

const filterFilesByFormat = (searchValue) => {
  if (!isRegExp(searchValue)) return filter(() => false);
  return filter((fileName) => new RegExp(searchValue).test(fileName));
};

module.exports = { filterFilesByFormat };
