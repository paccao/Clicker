import React, { useContext } from 'react'
import { Heading, Img, Input, Text, Grid } from '@chakra-ui/react'

import { GameContext } from '../GameContext'

const Intro = () => {
    const { player, setPlayerName } = useContext(GameContext)

    const submitHandler = (e) => {
        e.preventDefault()
        const { name } = Object.fromEntries(new FormData(e.target).entries())

        setPlayerName(name)
    }
    
    return (
        <Grid gap="4" justifyItems="center" pt="8">
            <Img
                src="https://picsum.photos/1000/350?grayscale"
                width="1000"
                height="350"
            />
            <Heading
                as="h2"
                fontSize={['4xl', '3xl', '4xl']}
                textAlign="center"
                pt="14"
                pb="7"
                color="white"
                textShadow="2px 2px green"
            >
                SURVIVAL HORROR, year unknown
            </Heading>
            <Text maxW="40rem" color="gray.400">
                The world isn't as it once was. It turns out life isn't all
                rainbows and sunshines. All life on the surface of the earth has
                died out. Humans had to take the measures needed to survive and
                are now POST-HUMAN, a state beyond what we know as "human", made
                possible through genetic manipulation and other
                biointerventionist measures. People lived underground for
                decades. Now the few survivors that pushed through has to
                rebuild what was once a lush and beautiful planet.
            </Text>
            <form onSubmit={submitHandler}>
                <Input
                    name="name"
                    p="4"
                    mt="8"
                    w="96"
                    color="white"
                    display="flex"
                    justifySelf="center"
                    textAlign="center"
                    placeholder="Enter your name"
                    autoComplete="off"
                    autoFocus
                />
            </form>
        </Grid>
    )
}

export default Intro