const loopForOf = (msg) => {
  let format = /kabeh ([a-zA-Z]+[a-zA-Z0-9]*) ti ([a-zA-Z]+[a-zA-Z0-9]*)/;
  let match = msg.match(format);
  if (!match) return null;

  return {
    exp: `for (const ${match[1]} of ${match[2]})`,
    openGroup: true,
  };
};

module.exports = loopForOf;