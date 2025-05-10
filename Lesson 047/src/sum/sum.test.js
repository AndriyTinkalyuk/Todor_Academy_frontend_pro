const sum = require("./sum.js")

describe("Testing function sum", () => {

    test('should add two numbers', () => {
        expect(sum(1,1)).toBe(2);
    });

    test('should dont be number', () => {
        expect(typeof(sum(1,undefined))).toEqual("number");
    });

    // test('should to be string', () => {
    //     expect(typeof(sum(1,undefined))).toEqual("string");
    // });
})