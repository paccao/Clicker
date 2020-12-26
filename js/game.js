import { show, hide, find } from './util'
import { getRandomActions } from './action'
import { showAfternoon, showNextDay, UI } from './ui'

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
            },
        }
    }

    initUI() {
        find('#start-page form').addEventListener('submit', (event) => {
            event.preventDefault()
            const input = find('#player-name')
            const name = input.value.trim()

            // TODO: sanitize input to prevent XSS
            if (name.length < input.minLength) return false

            showNextDay(this.state.world.day)

            hide('#start-page')
            show('#game')
            this.state.player.name = name
        })
    }
}
