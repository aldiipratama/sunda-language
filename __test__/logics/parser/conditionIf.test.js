const conditionIf = require('../../../lib/logics/parser/conditionIf')
const getJsFormat = require('../test-parser-helper')

describe('Test Condition If', () => {
  it('Should parse string correctly', () => {
    const test1 = conditionIf("lamun foo teh 'bar'")
    expect(test1.exp).toBe(`if (foo  ==  'bar')`)
  })

  it('Should parse number correctly', () => {
    const test1 = conditionIf("lamun foo teh 123")
    expect(test1.exp).toBe(`if (foo  ==  123)`)
  })

  it('Should return null if not match', () => {
    const test1 = conditionIf("lam foo te 123")
    const test2 = conditionIf("lamunn foo i 123")
    expect(test1).toBe(null)
    expect(test2).toBe(null)
  })

  it('Should return correctly flexing', () => {
    const jsFormat = getJsFormat(`
      lamun foo teh 123
        tingalikeun "ieu 123"
      geusan
    `)
    expect(jsFormat).not.toBeNull()
    let shouldMatch = [
      'if (foo  ==  123) {',
      'console.log("its 123")',
      '}'
    ]
    jsFormat.split("\n").every((v, i) => {
      if (!shouldMatch[i]) return true;
      return expect(v).toContain(shouldMatch[i])
    })
  })
})