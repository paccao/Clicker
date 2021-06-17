import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import Routes from './routes'

const App = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Menu</Link>
                    </li>
                    <li>
                        <Link to="/game">Game</Link>
                    </li>
                </ul>
            </nav>

            <Routes />
        </Router>
    )
}

export default App
