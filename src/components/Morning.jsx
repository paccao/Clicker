import React, { useContext } from 'react'
import { Heading } from '@chakra-ui/react'

import { GameContext } from '../GameContext'

const Morning = () => {
   const { player } = useContext(GameContext)
   
   return (
      <Heading>
         Morning {player.name}!
      </Heading>
   )
}

export default Morning