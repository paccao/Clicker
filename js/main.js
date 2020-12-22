import { show, hide, find } from "./util.js"

document.addEventListener("DOMContentLoaded", () => {
    const gameState = {
        player: {
            name: ""
        }
    }
    
    find("#start-page form").addEventListener("submit", (event) => {
        event.preventDefault()
        const input = find("#player-name")
        const name = input.value.trim()

        if (name.length < input.minLength) return false

        hide("#start-page")
        show("#game")
        gameState.player.name = name
    })

    // show("#day-page")
})

// init game UI

// get initial game state

// show next day()
    // show morning()
    // show afternoon()
    // show evening()
