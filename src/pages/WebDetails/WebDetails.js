import { Link, useParams } from 'react-router-dom'
import './WebDetails.css'
import React from 'react'
import { WebSiteData } from '../Home/myWork/WebSiteData'
import Service from '../Home/service/Service'
import Btn from '../../components/Btn/Btn'
import Nav from '../../components/nav/nav2'
const WebDetails = () => {
    const { id } = useParams()
    const website = WebSiteData.find((ele) => ele.id === id);
    return (
        <>
            <Nav />
            <div className='web-details py-5'>
                <div className='container mb-5'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <div className='img mb-5'>
                                <img className='w-100' loading='lazy' src={website.details_img} alt='project-img' />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='text'>
                                <div className='border-bottom pb-2 mb-2'>
                                    <span className='text-muted me-2'>Title:</span>
                                    <span className='text-light'>{website.title}</span>
                                </div>
                                <div className='border-bottom pb-2 mb-2'>
                                    <span className='text-muted me-2'>Description:</span>
                                    <span className='text-light'>{website.dec}</span>
                                </div>
                                <div className='border-bottom pb-2 mb-2'>
                                    <span className='text-muted me-2'>Technologies Used:</span>
                                    <span className='text-light'>{website.TechnologiesUsed.join('  |  ')}</span>
                                </div>
                                <div className='border-bottom pb-2 mb-2'>
                                    <span className='text-muted me-2'>GitHub repository:</span>
                                    {website.GitRepo === '' ? (
                                        <span>Not Found</span>
                                    ) : (
                                        <Link className='text-decoration-none' to={website.GitRepo} target="_blank" rel="noopener noreferrer">Click</Link>
                                    )}
                                </div>
                                <Link to={website.live} target="_blank" rel="noopener noreferrer">
                                    {website.live === '' ? (
                                        <Btn disabled={true} title={"Soon"} width={"100%"} />
                                    ) : (
                                        <Btn title={"Live"} width={"100%"} />
                                    )}

                                </Link>
                                <p className='mt-2'>If you have any questions or feedback about this project, feel free to contact me at <a className='text-decoration-none' href="mailto:aymanibraheem19@gmail.com">aymanibraheem19@gmail.com
                                </a>.</p>
                            </div>
                        </div>
                    </div>
                </div> 
                <Service />
            </div>
        </>
    )
}

export default WebDetails
