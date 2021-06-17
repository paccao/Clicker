import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Game from './Game'
import MainMenu from './MainMenu'

const Routes = () => (
    <Switch>
        <Route path="/game">
            <Game />
        </Route>
        <Route path="/">
            <MainMenu />
        </Route>
    </Switch>
)

export default Routes
