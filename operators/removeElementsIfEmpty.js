const { map } = require("rxjs/operators");

const removeElementsIfEmpty = () => map((arr = []) => arr.filter((el) => !!el));

module.exports = { removeElementsIfEmpty };
