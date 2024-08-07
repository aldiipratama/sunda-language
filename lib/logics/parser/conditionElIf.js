const valueTransform = require("../../utils/valueTransform").default;
const mapCompare = require("../../utils/mapCompare");

const conditionElIf = (msg) => {
  let format = /atawa lamun ([a-zA-Z0-9]+) ([a-zA-Z ]+) ([^\[\]\(\)\n]+)/;
  let match = msg.match(format);
  if (!match) return null;
  if (match[2]) {
    match[2] = mapCompare[match[2]];
  }

  return {
    exp: `else if (${match[1]} ${match[2]} ${valueTransform(match[3])})`,
    closeGroup: true,
    openGroup: true,
  };
};

module.exports = conditionElIf;
