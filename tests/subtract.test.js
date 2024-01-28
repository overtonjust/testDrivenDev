const subtract = require('../src/subtract')

test('properly subtracts two numbers', () => {
    expect(subtract(3,2)).toEqual(1)
})