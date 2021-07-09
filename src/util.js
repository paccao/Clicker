/**
 * Return a random item from given array
 *
 * @param {any[]} array The array
 */
 export const getRandomItemFromArray = (array) => {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}