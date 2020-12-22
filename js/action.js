export function applyAction(action, gameState){
    
    return gameState
}

export const getRandomActions = (count = 2) => {
    const result = []
    for (let i = 0; i < count; i+= 1) {
        result.push(getRandomItemFromArray(actions))
    }
    return result
}

const getRandomItemFromArray = (array) => {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
    
}

const action = (title, modifiers) => {
    return {
        title,
        modifiers
    }
}

const actions = [
    action("Make a science lab"),
    action("Bioengineered tree roots"),
    action("Tree planting drone")
]