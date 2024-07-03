import Header from '../../../components/header/Header'
import './MyWork.css'
import React, { useEffect, useRef, useState } from 'react'
import Btn from '../../../components/Btn/Btn'
import { WebSiteData } from './WebSiteData'
import Card from '../../../components/card/Card'
import { Link } from 'react-router-dom'
import { TimelineLite, Power2 } from 'gsap/gsap-core'
import { useInView } from 'react-intersection-observer'
import DesignCard from '../../../components/DesignCard/DesignCard'
import { designData } from './designData'

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const MyWork = () => {
    const [currentList, setCurrentList] = useState('web')
    const handelCurrent = (curr) => {
        setCurrentList(curr)
    }

    return (
        <div className='mywork py-5' id='projects' data-scroll data-scroll-speed={0}>
            <div className='container'>
                <Header title={'Works & Projects'} dec={'Check out some of my design projects, meticulously crafted with love and dedication,each one reflecting the passion and soul I poured into every detail.'} />
                <div className='row justify-content-center'>
                    <div className='col '>
                        <div className='list mb-5'>
                            <ul className='d-flex justify-content-center align-items-center gap-2 p-0'>
                                <li className={`${currentList === 'web' ? 'active' : ''}`} onClick={(ele) => handelCurrent('web')}>WebSite</li>
                                <li className={`${currentList === 'design' ? 'active' : ''}`} onClick={(ele) => handelCurrent('design')}>Graphic Design</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* web */}
                {currentList === "web" ?
                    <div className='website'>
                        <div className='row' >
                            {WebSiteData.map((ele, index) => {
                                if (ele.id <= 6) {
                                    return (
                                        <div key={ele.id} className='col-sm-6 col-lg-4 mb-3'>
                                            <Card title={ele.title} img={ele.thumbnail} dec={ele.dec} key={index} id={ele.id} />
                                        </div>
                                    )
                                }
                            })}
                            <div className='mt-3'>
                                <Link to={'/websites'}>
                                    <Btn title={'Show All'} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <div className='row'>
                            {designData.map((ele, index) => {
                                if (ele.id <= 6) {
                                    return (
                                        <div key={ele.id} className='col-sm-6 col-lg-4 mb-3'>
                                            <DesignCard data={ele} />
                                        </div>
                                    )
                                }
                            })
                            }
                            <div className='mt-3'>
                                <Link to={'/designpage'}>
                                    <Btn title={'Show All'} />
                                </Link>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default MyWork
