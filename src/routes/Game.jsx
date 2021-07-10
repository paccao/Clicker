import React, { useContext } from 'react'

import { GameContext } from '../GameContext'
import Intro from '../components/Intro'
import Morning from '../components/Morning'
import Afternoon from '../components/Afternoon'
import Evening from '../components/Evening'
import Container from '../components/Container'
import { MORNING, AFTERNOON, EVENING } from '../constants'

const timeOfDayStates = {
    [MORNING]: <Morning />,
    [AFTERNOON]: <Afternoon />,
    [EVENING]: <Evening />,
}

const Game = () => {
    const { player, world } = useContext(GameContext)
    
    return (
        <Container>
            {!player.name
                ? <Intro />
                : timeOfDayStates[world.timeOfDay]
            }
        </Container>
    )
}

export default Game
