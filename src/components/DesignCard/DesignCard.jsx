import React from 'react'
import { designData } from '../../pages/Home/myWork/designData'

const DesignCard = ({ data }) => {
    return (
            <div className='card'>
                <div style={{ width: '100%'}}>
                    <img src={data.src} alt={'dd'} style={{ width: '100%', height: '100%' }} />
                </div>
            </div>
    )
}

export default DesignCard
