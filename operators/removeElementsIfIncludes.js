const { map } = require("rxjs/operators");

const removeElementsIfIncludes = (arrStr = []) =>
  map((arr = []) =>
    arr.filter((el) => !arrStr.some((str) => el.includes(str)))
  );

module.exports = { removeElementsIfIncludes };
