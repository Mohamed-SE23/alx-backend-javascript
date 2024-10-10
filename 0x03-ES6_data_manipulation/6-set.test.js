import setFromArray from "./6-set";

test('setFromArray removes duplicates and returns a Set', () => {
    const result = setFromArray([12, 32, 15, 78, 98, 15]);

    // The expected result should be a Set with 5 unique elements
    const expectedSet = new Set([12, 32, 15, 78, 98]);

    // Compare the result using toEqual, which works for comparing Sets
    expect(result).toEqual(expectedSet);
});

test('setFromArray returns an empty set when passed an empty array', () => {
    const result = setFromArray([]);

    // The expected result is an empty Set
    const expectedSet = new Set();

    expect(result).toEqual(expectedSet);
});
