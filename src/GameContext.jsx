import React, { createContext, useState } from 'react'

import {
    TREES,
    CORRUPTION,
    TPC,
    TPD,
    HEALTH,
    CORRUPTION_MODIFIERS,
} from './constants'
import { getRandomItemFromArray } from './util'

export const GameContext = createContext()

export const GameProvider = (props) => {
    const [player, setPlayer] = useState({
        name: '',
        [TPC]: 1,
        [TPD]: 0,
        treesPlantedToday: 0,
    })

    const [world, setWorld] = useState({
        [HEALTH]: 2,
        [TREES]: 100,
        [CORRUPTION]: 0.7, // trees that die off each day
        bioMass: 0, // mass to build buildings and do research with
        day: 1,
        morningDurationInSeconds: getRandomItemFromArray([3, 6, 9, 12]),
        actions: [],
    })

    function setPlayerName(name) {
        setPlayer((prevPlayer) => ({
            ...prevPlayer,
            name
        }))
    }

    console.log(player.name)

    return (
        <GameContext.Provider value={{ player, world, setPlayerName }}>
            {props.children}
        </GameContext.Provider>
    )
}
