const ld = require("lodash");

const { map } = require("rxjs/operators");

const toCapitalizedArr = () =>
  map((arr = []) => arr.map((text = "") => ld.capitalize(text)));

module.exports = { toCapitalizedArr };
