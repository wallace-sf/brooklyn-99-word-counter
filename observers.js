const { Observable } = require("rxjs");
const fs = require("fs");

const DEFAULT_OPTIONS = {
  encoding: "utf-8",
};

const writeFile =
  (path, options = DEFAULT_OPTIONS) =>
  (data) => {
    fs.writeFile(path, JSON.stringify(data), options, (err) => {
      if (err) return console.error(err);
      console.log("File saved in word_counter_bb99.json");
    });
  };

module.exports = { writeFile };
