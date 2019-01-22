// test('Our first test', () => {

// });


const lib = require('../lib');

test('absolute - should return a positive number if input is positive', () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
})


test('absolute - should return a positive number if input is negative', () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
})

test('absolute - should return a 0 if input is 0', () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
})

// test('adding floating', () => {
//     const result = 0.1 + 0.2;
//     expect(result).toBeCloseTo(0.3);
// })