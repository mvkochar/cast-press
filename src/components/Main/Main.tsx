import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Blog, Contact, Donate, Episodes, Home, NotFound, Post, Privacy } from '../../pages'

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
                element={<Blog />}
            />
            <Route
                path='donate'
                element={<Donate />}
            />
            <Route
                path='about'
                element={<About />}
            />
            <Route
                path='privacy'
                element={<Privacy />}
            />
            <Route
                path='post/:id'
                element={<Post />}
            />
            <Route
                path='episodes'
                element={<Episodes/>}
            />
            <Route
                path='*'
                element={<NotFound />}
            />
        </Routes>
    )
}

export default Main