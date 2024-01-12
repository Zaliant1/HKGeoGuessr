import React from 'react'
import {HomePage} from './pages/homepage.tsx'
import { Route, Routes } from 'react-router-dom'

export const AppRoutes = () => {
    return (
    <Routes>
        <Route element={<HomePage />} path='/' />
    </Routes>
    )
}