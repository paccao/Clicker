import React, { createContext, useState } from 'react'

import {
    TREES,
    CORRUPTION,
    TPC,
    TPD,
    HEALTH,
    CORRUPTION_MODIFIERS,
    MORNING
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
        timeOfDay: MORNING
    })

    function setPlayerName(name) {
        setPlayer((prevPlayer) => ({
            ...prevPlayer,
            name
        }))
    }

    function setTimeOfDay(timeOfDay) {
        setWorld((prevWorld) => ({
            ...prevWorld,
            timeOfDay
        }))
    }

    return (
        <GameContext.Provider value={{ player, world, setPlayerName, setTimeOfDay }}>
            {props.children}
        </GameContext.Provider>
    )
}