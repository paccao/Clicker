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
                treesPerClick: 1,
                treesPlantedToday: 0,
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

        find('.plant-tree').addEventListener('click', (event) => {
            /**
             * FIRST CLICK:
             * hide step2 & step3
             * Move day and "morning" UI (with css)
             * Remove innertext on .plant-tree
             * window.settimeout(dayTimeAmount)
             */

            if (this.state.player.treesPlantedToday === 0) {
                window.setTimeout(() => {
                    this.afternoon()
                    console.log(
                        this.state.world.trees,
                        this.state.player.treesPlantedToday,
                    )
                }, this.state.world.dayTimeAmount * 1000)
            }

            // Adds trees on click
            this.state.world.trees += this.state.player.treesPerClick
            this.state.player.treesPlantedToday += this.state.player.treesPerClick
        })
    }

    start() {
        this.morning()
        hide('#start-page')
        show('#game')
    }

    morning() {
        showNextDay(this.state.world.day)
        showMorning(this.state.world.dayTimeAmount)
    }

    afternoon() {
        showAfternoon(getRandomActions(2))
    }
}
