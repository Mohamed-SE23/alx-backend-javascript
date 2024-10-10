import { queryAPI, weakMap } from "./100-weak.js";

test('queryAPI should increment query count and not throw for less than 5 queries', () => {
    const endpoint = { protocol: 'http', name: 'getUsers' };

    // Test for the first few queries
    queryAPI(endpoint);
    expect(weakMap.get(endpoint)).toBe(1);

    queryAPI(endpoint);
    expect(weakMap.get(endpoint)).toBe(2);

    queryAPI(endpoint);
    expect(weakMap.get(endpoint)).toBe(3);

    queryAPI(endpoint);
    expect(weakMap.get(endpoint)).toBe(4);
});

test('queryAPI should throw an error when querying more than 4 times', () => {
    const endpoint = { protocol: 'http', name: 'getUsers' };

    // Call the API 4 times to reach the limit
    for (let i = 0; i < 4; i++) {
        queryAPI(endpoint);
    }

    // On the 5th query, it should throw an error
    expect(() => {
        queryAPI(endpoint);
    }).toThrow('Endpoint load is high');
});

test('queryAPI should not throw error for different endpoints', () => {
    const endpoint1 = { protocol: 'http', name: 'getUsers' };
    const endpoint2 = { protocol: 'https', name: 'getPosts' };

    // Call the API for different endpoints and ensure it increments correctly
    queryAPI(endpoint1);
    queryAPI(endpoint2);

    expect(weakMap.get(endpoint1)).toBe(1);
    expect(weakMap.get(endpoint2)).toBe(1);
});
