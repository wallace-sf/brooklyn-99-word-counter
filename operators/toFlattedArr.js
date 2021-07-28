const { map } = require("rxjs/operators");

const toFlattedArr = () => map((arr = []) => arr.flat());

module.exports = { toFlattedArr };
