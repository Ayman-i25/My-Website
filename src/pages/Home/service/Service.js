import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './service.css';
import Header from '../../../components/header/Header';
import ServiceIcone from './serviceIcone';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
// Register ScrollTrigger with gsap
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin)
const Service = () => {
    const serviceRef = useRef(null);

    useEffect(() => {
        const el = serviceRef.current;
        gsap.from(el, { y: 250, opacity: 0, duration: .9, scrollTrigger: { trigger: el } });
        gsap.to(el, { y: 0, opacity: 1, duration: .9, scrollTrigger: { trigger: el } });

    }, []);

    return (
        <div className='services py-5' id='services' data-scroll data-scroll-speed={0}>
            <div className='container'>
                <Header title={"Service"} dec={'WHAT I DO'} />
                <div ref={serviceRef} className='row'>
                    <div className='col-md-6 col-lg-3'>
                        <div className='service text-light p-3 mb-5'>
                            <ServiceIcone svg={'fromScratch'} />
                            <div className='text'>
                                <h4 className='mb-1 mt-3'>Build From Scratch</h4>
                                <p>build website from scratch useing the front-end technologies (HTML, CSS, JavaScript)</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <div className='service text-light p-3 mb-5 '>
                            <ServiceIcone svg={'responsiv'} />
                            <div className='text'>
                                <h4 className='mb-1 mt-3'>Responsive WebSite</h4>
                                <p>create websites that are responsive and optimized for various devices and screen sizes</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <div className='service text-light p-3 mb-5'>
                            <ServiceIcone svg={'graphic'} />
                            <div className='text'>
                                <h4 className='mb-1 mt-3'>Graphic Design</h4>
                                <p> I use Photoshop and Illustrator to craft eye-catching social media posts. From engaging illustrations to striking banners</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3'>
                        <div className='service text-light p-3 mb-5'>
                            <ServiceIcone svg={'support'} />
                            <div className='text'>
                                <h4 className='mb-1 mt-3'>Support</h4>
                                <p> such as website updates, troubleshooting, security monitoring, and backups.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
