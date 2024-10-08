const cleanSet = (set, startString) => {
    if (!startString || typeof startString !== 'string') return '';

    return [...set]
        .filter((item) => item.startsWith(startString)) // Filter elements that start with the prefix
        .map((item) => item.slice(startString.length)) // Remove the prefix
        .join('-'); // Join the resulting parts with a hyphen
};

export default cleanSet;
