import React from 'react'
import { Container as ChakraContainer, Link } from '@chakra-ui/react'
import { useLocation, Link as RouterLink } from 'react-router-dom'

const Container = ({ children }) => {
    const location = useLocation()

    return (
        <ChakraContainer maxW="container.lg" minH="100vh" bg="gray.700">
            {location.pathname !== '/' ? (
                <Link
                    to="/"
                    as={RouterLink}
                    position="fixed"
                    top="2.5"
                    left="4"
                    color="white"
                    fontSize="lg"
                >
                    Menu
                </Link>
            ) : null}

            {children}
        </ChakraContainer>
    )
}

export default Container
