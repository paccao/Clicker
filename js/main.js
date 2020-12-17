document.addEventListener("DOMContentLoaded", ()=>{
    const startButton = document.querySelector(".start-button");
    startButton.addEventListener("click", ()=>{
        const startPage = document.querySelector("#start-page");
        console.log("start page found!", startPage)
        startPage.style.display = "none"

        const gamePage = document.querySelector("#game")
        console.log("game page found!", gamePage)
        gamePage.style.display ="block"
    })
})