const fs = require("fs");
const { Observable } = require("rxjs");
const path = require("path");

const readFile$ = (dirPath) => (value) => {
  return new Observable((subscriber) => {
    fs.readFile(
      path.join(dirPath, value),
      { encoding: "utf-8" },
      (err, data) => {
        if (err) return subscriber.error(err);
        subscriber.next(data);
        subscriber.complete();
      }
    );
  });
};

module.exports = { readFile$ };
