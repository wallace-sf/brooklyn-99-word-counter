const { map } = require("rxjs/operators");

const removeIfStartWithNumber = () =>
  map((arr = []) =>
    arr.filter((el) => {
      const parsedElement = parseInt(el);

      return parsedElement !== parsedElement;
    })
  );

module.exports = { removeIfStartWithNumber };
