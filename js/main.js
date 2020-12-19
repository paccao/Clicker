import{show,hide} from "./util"

document.addEventListener("DOMContentLoaded", ()=>{
    const startButton = document.querySelector(".start-button")
    startButton.addEventListener("click", ()=>{
        hide("#start-page")
        show("#game")
    })
})