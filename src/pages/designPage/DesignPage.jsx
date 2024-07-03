import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import DesignCard from '../../components/DesignCard/DesignCard'
import Card from '../../components/card/Card'
import Header from '../../components/header/Header'
import Nav from '../../components/nav/nav2'
import { designData } from '../Home/myWork/designData'
import './style.css'
import React from 'react'

const DesignPage = () => {
    return (
        <>
            <Nav />
            <div className='design py-5'>
                <div className='container'>
                    <Header title={"Personal Design"} dec={'My Work :)'} />
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{
                            350: 1,
                            750: 2,
                            900: 3,
                        }}>
                        <Masonry gutter='5px'>
                            {designData.map((ele) => (
                                <DesignCard key={ele.id} data={ele} />
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
        </>
    )
}

export default DesignPage
