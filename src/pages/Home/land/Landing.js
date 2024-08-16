import Btn from '../../../components/Btn/Btn'
import './Landign.css'
import me from '../../../assets/imgs/IMG_20240110_220907.jpg'
import { Link } from 'react-scroll'
import {  TimelineLite,TweenMax, Power3, Power2 } from 'gsap';
import React, { useEffect, useRef } from 'react';
const Landing = () => {
    
    let tl = new TimelineLite()

    const text = useRef(null)
    const imgContainer = useRef(null)
    const img = useRef(null)
    
    useEffect(() => {
        TweenMax.from(text.current, .9, { x: -300, opacity: 0, ease:Power3.easeInOut })
        TweenMax.to(text.current, .9, { x: 0, opacity: 1, ease:Power3.easeInOut })
        // tl.to(imgeReveal, .9, {width: '0%', ease:Power2.easeInOut})
        // .from(img.current, .9, {scale:1.7, ease:Power2.easeInOut, delay: -1.9})
        tl.to(imgContainer.current , .9, {clipPath:'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)', ease:Power2.easeInOut})
        .from(img.current, .9, {scale:1.7, ease:Power2.easeInOut, delay: -1.9})
    }, [])


    return (
        <div className='landing py-5 d-flex align-items-center' data-scroll data-scroll-speed={0} >
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-7 text-light'>
                        <div ref={text} className='text-content text-start mb-3'>
                            <h6 className='mb-4'>Hey there!</h6>
                            <p>I'm Ayman, Welcome to my front-end portfolio! As a dedicated front-end developer, I specialize in crafting captivating and user-centric web experiences. With a keen eye for design and a passion for cutting-edge technologies, I bring websites to life that not only look stunning but also function flawlessly across devices.
                            </p>
                            <span className='lead d-block mb-3'>Available for Freelancing</span>
                            <Link smooth={true} offset={-100} duration={100} className="nav-link text-light" to={'contact'}>
                                <Btn title={'Content Me!'} />
                            </Link>
                        </div>
                    </div>
                    <div className='col-md-5'>
                        <div ref={imgContainer}  className='image'>
                            <img ref={img} className='w-100' src={me} alt='pic' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
