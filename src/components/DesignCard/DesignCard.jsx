import React from 'react'

const DesignCard = ({ data }) => {
    return (
            <div className='card'>
                <div style={{ width: '100%'}}>
                    <img src={data.src} alt={'dd'} loading='lazy' style={{ width: '100%', height: '100%' }} />
                </div>
            </div>
    )
}

export default DesignCard
