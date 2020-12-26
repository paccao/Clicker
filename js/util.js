export const find = document.querySelector.bind(document)

export const show = (selector) => {
    find(selector).classList.remove('hide')
}

export const hide = (selector) => {
    find(selector).classList.add('hide')
}
