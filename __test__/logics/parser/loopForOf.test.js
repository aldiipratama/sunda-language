const loopForOf = require('../../../lib/logics/parser/loopForOf');
const getJsFormat = require('../test-parser-helper');

describe('Test var assign', () => {
  it('Should return null if not match', () => {
    const test1 = loopForOf('kabeuh foo ti bar');
    const test2 = loopForOf('kbeh foo tii bar');
    expect(test1).toBe(null);
    expect(test2).toBe(null);
  });

  it('Should return correctly flexing', () => {
    const jsFormat = getJsFormat(`
      kabeh foo ti bar
        tingalikeun foo
      geusan
    `);
    expect(jsFormat).not.toBeNull();
    let shouldMatch = ['for (const foo of bar) {', 'console.log(foo)', '}'];
    jsFormat.split('\n').every((v, i) => {
      if (!shouldMatch[i]) return true;
      return expect(v).toContain(shouldMatch[i]);
    });
  });
});
