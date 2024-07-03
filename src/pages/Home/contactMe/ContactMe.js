import './ContactMe.css'
import Header from '../../../components/header/Header'
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa6";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger)
const ContactMe = () => {
    const ref = useRef(null)
    useEffect(() => {
        gsap.from(ref.current,{opacity:0, scale:0, scrollTrigger:{trigger:ref.current}})
        gsap.to(ref.current,{opacity:1, scale:1, scrollTrigger:{trigger:ref.current}})
    })
    return (
        <div className='contact py-5' id='contact' data-scroll data-scroll-speed={0}>
            <Header title={"Get In Touch"} dec={"Have a project in mind? Need some assistance? Don't hesitate to get in touch with me! Whether it's a question, feedback, or collaboration opportunity, I'm here to listen and assist you. Drop me a message, and let's start a conversation!"} />
            <div className='container '>
                <div ref={ref} className='row '>
                    <div className='col-12'>
                        <div className=' p-3  d-flex align-items-center justify-content-center flex-column' >
                            <h4 className=''>Contact Details</h4>
                            <div className='info mb-2 pb-2' >
                                <span className='text-muted me-2 mb-2 d-block d-md-inline'>Phone:</span>
                                <span className='text-light fw-bold'>07738226087</span>
                            </div>
                            <div className='info mb-2 pb-2'>
                                <span className='text-muted me-2 mb-2 d-block d-md-inline'>Email:</span>
                                <span className='text-light fw-bold'>aymanibraheem19@gmail.com</span>
                            </div>
                            <h4 className=''>Follow Me</h4>
                            <div className='d-flex justify-content-center align-items-center'>
                                <Link target="_blank" to={'https://www.facebook.com/people/Ayman-Ibrahim/pfbid02wasujU1eTmMuWEkCxzk7U9HHtQHVqXYKBJPT3cS1XQCqrYkK88a1PHGJWxGBUEBkl/?mibextid=ZbWKwL'}><FaFacebookF /></Link>
                                <Link target="_blank" to={'https://www.instagram.com/ayman_i1/?igshid=YTQwZjQ0NmI0OA%3D%3D'}><FaInstagram /></Link>
                                <Link target="_blank" to={'https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHJomh_qG31zgAAAY37f5kgNPjkwNtz6oHFw2TNQ-henHzUi2Wxo3s7-7CjGL8aPphH3HePwHQXgSbMDEHV9DyUeG4ljKxfsqBLCb8XKl9Qj_PcP-AsWNYoWl-LEMNKiNl2tMo=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fayman-ibrahim-544284217%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app'}><FaLinkedinIn /></Link>
                                <Link target="_blank" to={'https://github.com/Ayman-i25'}><FaGithub /></Link>
                            </div>
                        </div >
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactMe



