import { show, hide, find } from "./util"

document.addEventListener("DOMContentLoaded", () => {
    const startButton = find(".start-button")
    startButton.addEventListener("click", () => {
        hide("#start-page")
        show("#game")
    })
})

