import React, { useLayoutEffect, useRef } from 'react'
import './Skills.css'
import { skillData } from './SkillData';
import Header from '../../../components/header/Header';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger)
const Skills = () => {
    const skillsContainerRef = useRef(null);

    useLayoutEffect(() => {
        const el = skillsContainerRef.current;

        gsap.from(el, { opacity: 0, y: 200, duration: .9, scrollTrigger: { trigger: el, start:'top 80%', end:'bottom 60%' } })
        gsap.to(el, { opacity: 1, y: 0, duration: .9, scrollTrigger: { trigger: el, start:'top 80%', end:'bottom 60%' } })

    }, []);

    return (
        <div className='skills p-5' id='skills' data-scroll data-scroll-speed={0}>
            <div className='container'>
                <Header title={'Skills'} dec={'Some of my skills :)'} />
                <div ref={skillsContainerRef} className='row'>
                    {skillData.map((skill, index) => (
                        <div key={index} className='col-sm-6 col-md-4 col-lg-3'>
                            <div className='skill d-flex align-items-center '>
                                {skill.icone}
                                <span>{skill.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            
            </div>
        </div>
    )
}

export default Skills
