import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Layout = ({ title, description, keywords, author }) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Navbar />
            <div className='min-h-[78vh]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
Layout.defaultProps = {
    title: "AutoElite",
    description: "react-router-dom",
    keywords: "React JS, react-router-dom, HTML, TailwindCSS",
    author: "Alju Sabu",
}

export default Layout