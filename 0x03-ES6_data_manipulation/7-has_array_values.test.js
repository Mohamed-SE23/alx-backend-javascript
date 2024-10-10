import hasValuesFromArray from "./7-has_array_values";

test('hasValuesFromArray returns true if all elements are in the set', () => {
    const set = new Set([1, 2, 3, 4, 5]);
    const arr = [1];
    
    // It should return true since 1 is in the set
    expect(hasValuesFromArray(set, arr)).toBe(true);
});

test('hasValuesFromArray returns false if any element is not in the set', () => {
    const set = new Set([1, 2, 3, 4, 5]);
    const arr = [10];
    
    // It should return false since 10 is not in the set
    expect(hasValuesFromArray(set, arr)).toBe(false);
});

test('hasValuesFromArray returns false if one of the elements is not in the set', () => {
    const set = new Set([1, 2, 3, 4, 5]);
    const arr = [1, 10];
    
    // It should return false since 10 is not in the set
    expect(hasValuesFromArray(set, arr)).toBe(false);
});

test('hasValuesFromArray returns true if all elements are in the set for multiple elements', () => {
    const set = new Set([1, 2, 3, 4, 5]);
    const arr = [1, 3, 5];
    
    // It should return true since 1, 3, and 5 are all in the set
    expect(hasValuesFromArray(set, arr)).toBe(true);
});
