import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { ChakraProvider } from '@chakra-ui/react'
import { GameProvider } from './GameContext'

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <GameProvider>
                <App />
            </GameProvider>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root'),
)
