import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'

import AppRoutes from './routes'

const App = () => {
    return (
        <Router>
            <AppRoutes />
        </Router>
    )
}

export default App
