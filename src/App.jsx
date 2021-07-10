import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'

import Routes from './routes'

const App = () => {
    return (
        <Router>
            <Routes />
        </Router>
    )
}

export default App
