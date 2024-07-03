import './Btn.css'

import React from 'react'

const Btn = ({title, width, disabled = false}) => {
    return (
        <button disabled={disabled} class={`button`} style={{width: width ? width : ''}}>{title}</button>

    )
}

export default Btn
