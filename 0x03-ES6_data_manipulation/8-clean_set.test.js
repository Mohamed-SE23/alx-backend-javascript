import cleanSet from "./8-clean_set";

test('cleanSet returns hyphenated string for elements starting with given prefix', () => {
    const result = cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon');
    
    // It should return the string 'jovi-aparte-appetit'
    expect(result).toBe('jovi-aparte-appetit');
});

test('cleanSet returns an empty string if no elements start with the prefix', () => {
    const result = cleanSet(new Set(['apple', 'banana', 'grape']), 'bon');
    
    // It should return an empty string since no element starts with 'bon'
    expect(result).toBe('');
});

test('cleanSet returns an empty string if the prefix is not provided', () => {
    const result = cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), '');
    
    // It should return an empty string since the prefix is empty
    expect(result).toBe('');
});

test('cleanSet returns an empty string if startString is not a string', () => {
    const result = cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), null);
    
    // It should return an empty string because startString is not a string
    expect(result).toBe('');
});

test('cleanSet returns elements properly when the prefix matches exactly', () => {
    const result = cleanSet(new Set(['bon']), 'bon');
    
    // It should return an empty string because 'bon' matches the whole word and leaves nothing after slicing
    expect(result).toBe('');
});
