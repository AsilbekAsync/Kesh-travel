let counter = 0;
const nameMap = new Map();

const toAlphabetName = (index) => {
  let name = "";
  while (index >= 0) {
    name = String.fromCharCode((index % 26) + 97) + name; // 97 = 'a'
    index = Math.floor(index / 26) - 1;
  }
  return name;
};

module.exports = {
  plugins: [
    require("postcss-rename")({
      pattern: /^\.([a-zA-Z0-9_-]+)/,
      replacement: (match, className) => {
        if (!nameMap.has(className)) {
          nameMap.set(className, `.${toAlphabetName(counter++)}`);
        }
        return nameMap.get(className);
      },
    }),
  ],
};
