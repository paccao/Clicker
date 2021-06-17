import React from 'react'
import { Container, Heading } from '@chakra-ui/react'

const Game = () => (
    <Container maxW="container.lg" minH="100vh" bg="gray.700">
        <Heading
            as="h1"
            fontSize={['4xl', '5xl', '6xl']}
            textAlign="center"
            pt="14"
            color="white"
            textShadow="2px 2px green"
        >
            Game
        </Heading>
    </Container>
)

export default Game
