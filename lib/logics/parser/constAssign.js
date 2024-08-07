const valueTransform = require("../../utils/valueTransform")

const constAssign = (msg) => {
  let format = /nyaan ([a-zA-Z_]+[a-zA-Z0-9_]*) teh ([^\[\]\(\)\n]+)/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: `const ${match[1]} = ${valueTransform(match[2])};`,
  };
};

module.exports = constAssign;
