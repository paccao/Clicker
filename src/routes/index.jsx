import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Game from './Game'
import MainMenu from './MainMenu'

const AppRoutes = () => (
    <Routes>
        <Route index element={<MainMenu />} />
        <Route path="/game" element={<Game />} />
    </Routes>
)

export default AppRoutes
