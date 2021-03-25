export const find = document.querySelector.bind(document)

/**
 * Show a target DOM element
 *
 * @param {string | Element} target The DOM element to show
 */
export const show = (target) => {
    getElement(target).classList.remove('hide')
}

/**
 * Hide a target DOM element
 *
 * @param {string | Element} target The DOM element to hide
 */
export const hide = (target) => {
    getElement(target).classList.add('hide')
}
/**
 * Return a random item from given array
 *
 * @param {any[]} array The array
 */
export const getRandomItemFromArray = (array) => {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}

/**
 * Get a target DOM element
 *
 * @param {string | Element} target The DOM element to get
 * @returns {Element} elementpt
 */
const getElement = (target) => {
    if (typeof target === 'string') {
        return find(target)
    } else if (target instanceof Element) {
        return target
    } else {
        throw new Error(
            'TypeError: Target must be string (CSS selector) or HTMLElement instance',
        )
    }
}
