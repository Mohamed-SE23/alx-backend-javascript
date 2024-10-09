export default function updateUniqueItems(map) {
    // Check if the argument is a Map
    if (!(map instanceof Map)) {
        throw new Error('Cannot process');
    }

    // Iterate through the map entries
    for (const [key, value] of map) {
        if (value === 1) {
            map.set(key, 100);  // Update quantity to 100 if it's 1
        }
    }

    return map;  // Return the updated map
}
