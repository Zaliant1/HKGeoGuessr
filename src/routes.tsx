import React from 'react'
import {HomePage} from './pages/HomePage.tsx'
import {ImageTest} from './pages/ImageTest.tsx'
import { Route, Routes } from 'react-router-dom'

export const AppRoutes = () => {
    return (
    <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<ImageTest imageUrl={"/src/assets/map.png"} rows={170} columns={272} />} path='/image' />
    </Routes>
    )
}