import { Link } from 'react-router-dom'
import Btn from '../Btn/Btn'
import './card.css'
import React, { useEffect, useRef, } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Card = ({ img, title, dec, key, id }) => {

    const cardContainer = useRef(null)
    
    useEffect(() => {
        const el = cardContainer.current;

        gsap.from(el, { y: 250, opacity: 0, duration: .9, scrollTrigger: { trigger: el } });
        gsap.to(el, { y: 0, opacity: 1, duration: .9, scrollTrigger: { trigger: el } });

    }, []);
    return (
        <div>
            <div ref={cardContainer} key={key} className='card text-start p-2'>
                <div className='img-container'>
                    <img className='w-100' loading='lazy' src={img} alt={title} />
                </div>
                <div className='text p-2'>
                    <h4 className='pt-3 m-0'>{title}</h4>
                    <span className='d-block pb-3'>{dec}</span>
                    <Link to={`/websites/${id}`}>
                        <Btn title={'Details'} width={'100%'} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card
