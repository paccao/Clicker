import { getRandomItemFromArray } from './util'
import { TREES, CORRUPTION, TPC, TPD, CORRUPTION_MODIFIERS } from './constants'

// count here has to be the same amount as the span elements in the html file
export const getRandomActions = (count = 2) => {
    const result = []
    for (let i = 0; i < count; i += 1) {
        result.push(getRandomItemFromArray(actions))
    }
    return result
}

const action = (
    id,
    title,
    text,
    upgradeText,
    modifiers,
    upgradeCost,
    applyActionCallback,
) => {
    return {
        id,
        title,
        text,
        upgradeText,
        modifiers,
        upgradeCost,
        applyActionCallback,
    }
}

const getNextCorruptionLevel = (game) => {
    game.state.world[CORRUPTION] = CORRUPTION_MODIFIERS.shift()
}

const actions = [
    // TODO: Fix stats updates here
    action(
        1,
        'Make a science lab',
        "The science lab will help you do further research on the planet's soil. The research helps your trees become more resilient to the corrupt nature of earth.",
        "Earth's deadly corruption takes less of a toll on your trees each day",
        {},
        {
            [TREES]: -10,
        },
        getNextCorruptionLevel,
    ),
    action(
        2,
        'Bioengineered tree roots',
        "The ground starts moving, it seems as if the tree's roots has become sentient. They know what is best for their survival.",
        "Earth's deadly corruption takes less of a toll on your trees each day",
        {},
        {
            [TREES]: -5,
        },
        getNextCorruptionLevel,
    ),
    action(
        3,
        'Tree planting drone',
        'The excellence of engineering shines through. You learn how to construct tree planting drones with your replicator. These will help you plant extra trees for you each day.',
        'You automatically grow trees each day',
        {
            [TPD]: 50,
        },
        {
            [TREES]: -5,
        },
    ),
    action(
        4,
        'Tree school',
        'You have excelled in your studies. You are now more proficient in planting trees by following a routine that makes you more effective.',
        'You plant more trees per click.',
        {
            [TPC]: 1,
        },
        {
            [TREES]: -10,
        },
    ),
]
