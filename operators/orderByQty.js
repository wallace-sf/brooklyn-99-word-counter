const ld = require("lodash");
const { map } = require("rxjs/operators");

const orderByQty = () =>
  map((arrWords) => ld.orderBy(arrWords, ["qty", "word"], ["desc", "asc"]));

module.exports = { orderByQty };
