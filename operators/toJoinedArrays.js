const { map } = require("rxjs/operators");

const toJoinedArrays = () => map((arr = []) => arr.join());

module.exports = { toJoinedArrays };
