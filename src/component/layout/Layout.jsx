import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-[78vh]'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout