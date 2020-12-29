import { show, hide, find, getRandomItemFromArray } from './util'
import { getRandomActions } from './action'
import { showMorning, showAfternoon, showNextDay, UI } from './ui'

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

// IDEAS
// End game function (if you lose)
// Highscore (maybe add after MVP - minimum viable product)
// Restart game loop without reloading page (maybe add later)

export class Game {
    constructor() {
        this.state = {
            player: {
                name: '',
            },
            world: {
                health: 2,
                trees: 100,
                deathRate: 0.7,
                bioMass: 0,
                day: 1,
                dayTimeAmount: getRandomItemFromArray([3, 6, 9, 12]),
            },
        }
    }

    addEventListeners() {
        find('#start-page form').addEventListener('submit', (event) => {
            event.preventDefault()
            const input = find('#player-name')
            const name = input.value.trim()

            // TODO: sanitize input to prevent XSS
            if (name.length < input.minLength) return false

            this.state.player.name = name

            this.start()
        })

        find('.RNG-seconds').addEventListener('click', (event) => {
            hide('.step1')
            hide('.RNG-seconds')
            show('.step2')
            show('.step3')
            show('.plant-tree')
        })
    }

    start() {
        showNextDay(this.state.world.day)
        this.morning()
        hide('#start-page')
        show('#game')
    }

    morning() {
        showMorning(this.state.world.dayTimeAmount)
    }
}
