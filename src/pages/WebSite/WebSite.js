import Card from '../../components/card/Card'
import Header from '../../components/header/Header'
import Nav from '../../components/nav/nav2'
import { WebSiteData } from '../Home/myWork/WebSiteData'
import './WebSite.css'
import React from 'react'

const WebSite = () => {
    return (
        <>
            <Nav />
            <div className='website py-5'>
                <div className='container'>
                    <Header title={"Personal Projects"} dec={'My Wrok :)'} />
                    <div className='row'>
                        {WebSiteData.map((ele) => (
                            <div className='col-md-6 mb-3'>
                                <Card title={ele.title} img={ele.thumbnail} dec={ele.dec} id={ele.id} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebSite
