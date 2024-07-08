 const shuffleArray = (array) => {
    // Check if array is provided and is an array
    if (!Array.isArray(array)) {
        throw new Error('Input is not an array.');
    }

    // Create a copy of the array to avoid mutating the original array
    const newArray = [...array];

    // shuffle array
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
};


export {shuffleArray}