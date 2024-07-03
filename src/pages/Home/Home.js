import React from 'react'
import Landing from './land/Landing'
import Skills from './Skills/Skills'
import MyWork from './myWork/MyWork'
import Service from './service/Service'
import ContactMe from './contactMe/ContactMe'
import Nav from '../../components/nav/Nav'

const Home = () => {
    return (
        <>
            <Nav />
            <Landing />
            <Service />
            <MyWork />
            <Skills />
            <ContactMe />
        </>
    )
}

export default Home
