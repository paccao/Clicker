import { Game } from './game'

document.addEventListener('DOMContentLoaded', () => {
    const game = new Game()

    game.addEventListeners()

    /// Game pseudo code
    /* 
    game.start()
        Show Morning
        Show Evening
        Show Afternoon
        Show next day(update day number, Show morning)
            if(day <= 30 || you died)
    Show endGame
    Show highscore
    */
})
