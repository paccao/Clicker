import React from 'react'
import { Container, Heading, VStack, Button, Divider } from '@chakra-ui/react'

function App() {
    const startGame = () => {
        // Change router URI
    }

    return (
        <Container maxW="container.lg" minH="100vh" bg="gray.700">
            <Heading
                as="h1"
                fontSize={['4xl', '5xl', '6xl']}
                textAlign="center"
                pt="14"
                color="white"
                textShadow="2px 2px green"
            >
                Clicker
            </Heading>

            <Divider my="8" maxW="25%" mx="auto" />

            <VStack spacing={4} align="stretch" mx="auto" maxW="33%">
                <Button
                    h="14"
                    bg="green.400"
                    fontSize="2xl"
                    onClick={startGame}
                    _hover={{
                        bg: 'green.500',
                    }}
                >
                    Start Game
                </Button>
                <Button
                    h="14"
                    bg="red.400"
                    fontSize="2xl"
                    onClick={() => window.close()}
                    _hover={{
                        bg: 'red.500',
                    }}
                >
                    Quit (No)
                </Button>
            </VStack>
        </Container>
    )
}

export default App
