import groceriesList from "./9-groceries_list";

test('groceriesList returns a map with correct grocery items and quantities', () => {
    const result = groceriesList();

    // Check if the result is a Map
    expect(result).toBeInstanceOf(Map);

    // Check the size of the Map
    expect(result.size).toBe(5);

    // Check that all keys and values are correct
    expect(result.get('Apples')).toBe(10);
    expect(result.get('Tomatoes')).toBe(10);
    expect(result.get('Pasta')).toBe(1);
    expect(result.get('Rice')).toBe(1);
    expect(result.get('Banana')).toBe(5);
});

test('groceriesList contains no additional items', () => {
    const result = groceriesList();

    // Ensure no unexpected keys exist in the Map
    expect(result.has('Oranges')).toBe(false);
    expect(result.has('Milk')).toBe(false);
});