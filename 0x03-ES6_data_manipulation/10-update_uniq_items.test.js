import updateUniqueItems from "./10-update_uniq_items";

test('updateUniqueItems updates values of 1 to 100', () => {
    const groceries = new Map([
        ['Apples', 10],
        ['Tomatoes', 10],
        ['Pasta', 1],
        ['Rice', 1],
        ['Banana', 5]
    ]);

    const updatedGroceries = updateUniqueItems(groceries);

    // Check that items with quantity 1 are updated to 100
    expect(updatedGroceries.get('Pasta')).toBe(100);
    expect(updatedGroceries.get('Rice')).toBe(100);

    // Check that other items are unchanged
    expect(updatedGroceries.get('Apples')).toBe(10);
    expect(updatedGroceries.get('Tomatoes')).toBe(10);
    expect(updatedGroceries.get('Banana')).toBe(5);
});

test('updateUniqueItems throws error if input is not a map', () => {
    expect(() => {
        updateUniqueItems({});
    }).toThrow('Cannot process');

    expect(() => {
        updateUniqueItems(null);
    }).toThrow('Cannot process');

    expect(() => {
        updateUniqueItems([['Apples', 1]]);
    }).toThrow('Cannot process');
});
