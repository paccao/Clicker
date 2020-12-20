export const find = document.querySelector.bind(document)

export const show = (selector) => {
    find(selector).style.display = ""
}

export const hide = (selector) => {
    find(selector).style.display = "none"
}