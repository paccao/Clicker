import { show, hide, find } from './util.js'
import { getRandomActions, applyAction } from './action.js'

document.addEventListener('DOMContentLoaded', () => {
    const gameState = {
        player: {
            name: '',
        },
        world: {
            health: 2,
            trees: 100,
            deathRate: 0.7,
            bioMass: 0,
        },
    }

    find('#start-page form').addEventListener('submit', (event) => {
        event.preventDefault()
        const input = find('#player-name')
        const name = input.value.trim()

        if (name.length < input.minLength) return false

        hide('#start-page')
        show('#game')
        gameState.player.name = name
    })
    
    const showAction = ({ title }) => `
        <span>${title}</span>
    `
    
    function showAfternoon(actions = []) {
        
        find('#afternoon-div').innerHTML = actions.map(showAction).join('')
    }
    showAfternoon(getRandomActions(2))
})
