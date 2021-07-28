const { Observable } = require("rxjs");

const operatorWrapper$ = (observerCb) => (source) => {
  return new Observable((subscriber) =>
    source.subscribe(observerCb(subscriber))
  );
};

module.exports = {
  operatorWrapper$,
};
