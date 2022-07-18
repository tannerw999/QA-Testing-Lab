const func = require('./functions.js')

test('test returnTwo', () => {
    expect(func.returnTwo()).toBe(2)
})

test('test greeting', () => {
    expect(func.greeting('James')).toBe('Hello, James.')
})

test('test greeting', () => {
    expect(func.greeting('Jill')).toBe('Hello, Jill.')
})

test('test for add', () => {
    expect(func.add(1, 2)).toBe(3)
})

test('test for add', () => {
    expect(func.add(5, 9)).toBe(14)
})