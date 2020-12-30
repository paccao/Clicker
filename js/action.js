import { getRandomItemFromArray } from './util'

// count here has to be the same amount as the span elements in the html file
export const getRandomActions = (count = 2) => {
    const result = []
    for (let i = 0; i < count; i += 1) {
        result.push(getRandomItemFromArray(actions))
    }
    return result
}

const action = (id, title, text, upgradeText, modifiers) => {
    return {
        id,
        title,
        text,
        upgradeText,
        modifiers,
    }
}

const actions = [
    action(
        1,
        'Make a science lab',
        "The science lab will help you do further research on the planet's soil. The research helps your trees become more resilient to the corrupt nature of earth.",
        "Earth's deadly corruption takes less of a toll on your trees each day",
    ),
    action(
        2,
        'Bioengineered tree roots',
        "The ground starts moving, it seems as if the tree's roots has become sentient. They know what is best for their survival.",
        "Earth's deadly corruption takes less of a toll on your trees each day",
    ),
    action(
        3,
        'Tree planting drone',
        'The excellence of engineering shines through. You learn how to construct tree planting drones with your replicator. These will help you plant extra trees for you each day.',
        'You automatically grow trees each day',
    ),
]
