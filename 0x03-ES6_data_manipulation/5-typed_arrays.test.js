import createInt8TypedArray from "./5-typed_arrays.js";

test('createInt8TypedArray returns a DataView with correct content', () => {
    const typedArr = createInt8TypedArray(10, 2, 89);

    // Check if it returns a DataView
    expect(typedArr).toBeInstanceOf(DataView);

    // Check the byteLength of the buffer
    expect(typedArr.byteLength).toBe(10);

    // Check specific bytes in the buffer
    expect(typedArr.getInt8(2)).toBe(89);  // At position 2, the value should be 89
    expect(typedArr.getInt8(0)).toBe(0);   // Default initialized positions should be 0
    expect(typedArr.getInt8(1)).toBe(0);
    expect(typedArr.getInt8(3)).toBe(0);
});
