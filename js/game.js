import { show, hide, find, getRandomItemFromArray } from './util'
import { getRandomActions } from './action'
import {
    showMorning,
    showAfternoon,
    showEvening,
    showNextDay,
    UI,
    showRemainingTime,
} from './ui'

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
                actions: [],
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
             * Move day and "morning" UI (with css)
             */

            if (this.state.player.treesPlantedToday === 0) {
                let timeRemaining = this.state.world.dayTimeAmount * 1000
                const interval = window.setInterval(() => {
                    timeRemaining -= 100
                    showRemainingTime(timeRemaining)
                }, 100)

                window.setTimeout(() => {
                    this.afternoon()
                    console.log(
                        'total amount of trees: ' + this.state.world.trees,
                        'trees planted today : ' +
                            this.state.player.treesPlantedToday,
                    )
                    window.clearInterval(interval)
                }, this.state.world.dayTimeAmount * 1000)

                hide('.step2')
                hide('.step3')
                //find('.plant-tree').innerText = ''
            }

            // Adds trees on click
            this.state.world.trees += this.state.player.treesPerClick
            this.state.player.treesPlantedToday += this.state.player.treesPerClick
        })

        document.querySelectorAll('#actions button').forEach((btn) => {
            btn.addEventListener('click', () => {
                // apply action
                // hide afternoon
                // evening(){ show evening }

                // Make sure we use the correct action based on button ID
                const selectedActionID = btn.dataset.id
                const selectedAction = this.state.world.actions.find(
                    (action) => {
                        if (action.id === Number(selectedActionID)) {
                            return true
                        }
                        return false
                    },
                )
            })
        })
    }

    // find('.span2-button').addEventListener('click', (event) => {})

    applyAction(action) {
        // this.state.world.actions
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
        this.state.world.actions = getRandomActions(2)
        showAfternoon(this.state.world.actions)
    }
}
