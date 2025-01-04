import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Blog, Contact, Donate, Home } from '../../pages'

const Main = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<Home />}
            />
            <Route
                path='contact'
                element={<Contact />}
            />
            <Route
               path='blog'
               element={<Blog/>} 
            />
            <Route
                path='donate'
                element={<Donate/>}
            />
            <Route
                path='about'
                element={<About/>}
            />
        </Routes>
    )
}

export default Main