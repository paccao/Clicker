import React, { createContext, useState } from 'react'

import {
    TREES,
    CORRUPTION,
    TPC,
    TPD,
    HEALTH,
    CORRUPTION_MODIFIERS,
    MORNING,
} from './constants'

export const GameContext = createContext()

export const GameProvider = (props) => {
    // ------------  Player state -------------
    const [playerName, setPlayerName] = useState('')
    const [treesPerClick, setTreesPerClick] = useState(1) // Active income per click
    const [treesPerSecond, setTreesPerSecond] = useState(0) // Passive income
    const [treesPlantedToday, setTreesPlantedToday] = useState(0) // daily total from clicks
    const [treeIncomeToday, setTreeIncomeToday] = useState(0) // daily total from passive income

    // -------------- Game World state --------------
    const [health, setHealth] = useState(2)
    const [trees, setTrees] = useState(100)
    const [corruption, setCorruption] = useState(0.7) // trees that die off each day
    const [bioMass, setBioMass] = useState(0) // mass to build buildings and do research with
    const [day, setDay] = useState(1)
    const [morningDuration, setMorningDuration] = useState(0) // seconds
    const [actions, setActions] = useState([])
    const [timeOfDay, setTimeOfDay] = useState(MORNING)

    return (
        <GameContext.Provider
            value={{
                playerName,
                setPlayerName,
                treesPerClick,
                setTreesPerClick,
                treesPerSecond,
                setTreesPerSecond,
                treesPlantedToday,
                setTreesPlantedToday,
                health,
                setHealth,
                trees,
                setTrees,
                corruption,
                setCorruption,
                bioMass,
                setBioMass,
                day,
                setDay,
                morningDuration,
                setMorningDuration,
                actions,
                setActions,
                timeOfDay,
                setTimeOfDay,
                treeIncomeToday,
                setTreeIncomeToday,
            }}
        >
            {props.children}
        </GameContext.Provider>
    )
}
