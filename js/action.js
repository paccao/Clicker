import { getRandomItemFromArray } from './util'

export function applyAction(action, gameState) {
    return action, gameState
}

// count here has to be the same amount as the span elements in the html file
export const getRandomActions = (count = 2) => {
    const result = []
    for (let i = 0; i < count; i += 1) {
        result.push(getRandomItemFromArray(actions))
    }
    return result
}

const action = (title, text, modifiers) => {
    return {
        title,
        text,
        modifiers,
    }
}

const actions = [
    action(
        'Make a science lab',
        'The science lab will help you do further research on the planets soil. Choosing this action will grant you:',
    ),
    action(
        'Bioengineered tree roots',
        'The ground starts moving, it seems as if the trees roots has become sentient. They know what is best for their survival.',
    ),
    action(
        'Tree planting drone',
        'The excellence of engineering once again shines through. You learn how to construct tree planting drones with your replicator. These will help you plant trees each day.',
    ),
]
