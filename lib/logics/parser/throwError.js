const throwError = (msg) => {
  const format = /kumaha atuh (.*)/;
  const match = msg.match(format);
  if (!match) return null;

  return {
    exp: `throw new Error(${match[1]});`,
  };
};

module.exports = throwError;