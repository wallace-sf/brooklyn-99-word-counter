const { map } = require("rxjs/operators");

const toSplittedStr = (separator) => map((text) => text.split(separator));

module.exports = { toSplittedStr };
