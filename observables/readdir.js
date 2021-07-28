const { Observable } = require("rxjs");
const fs = require("fs");

const defaultOptions = {
  encoding: "utf8",
};

const readDir$ = (path = "", options = defaultOptions) => {
  return new Observable((subscriber) => {
    fs.readdir(path, options, (err, files) => {
      if (err) return subscriber.error(err);
      subscriber.next(files);
      return subscriber.complete();
    });
  });
};

module.exports = {
  readDir$,
};
