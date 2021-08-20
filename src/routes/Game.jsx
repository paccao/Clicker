import React, { useContext } from 'react'

import { GameContext } from '../GameContext'
import Intro from '../components/Intro'
import Morning from '../components/Morning'
import Afternoon from '../components/Afternoon'
import Evening from '../components/Evening'
import Container from '../components/Container'
import { MORNING, AFTERNOON, EVENING } from '../constants'


const Game = () => {
    const { playerName, timeOfDay } = useContext(GameContext)

    return (
        <Container>
            {!playerName ? <Intro /> : (
                <>
                    {timeOfDay === MORNING ? <Morning /> : null}
                    {timeOfDay === AFTERNOON ? <Afternoon /> : null}
                    {timeOfDay === EVENING ? <Evening /> : null}
                </>
            )}
        </Container>
    )
}

export default Game
