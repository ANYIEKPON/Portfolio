import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
        <div className='home-a'>
            <div className='home'>
                <div className='about-a'>
                    <div className='about'>
                        <h2>Hi, My Name is Anyiekpon</h2>
                        <div className='prompt'>
                            <p>A Software Developer with a Passion for Learning, Creating and Growing</p>
                            <LinkedIn />
                            <Email />
                            <GitHub />
                        </div>
                    </div>
                </div>
                <div className='skills-a'>
                    <div className='skills'>
                        <h1>Skills</h1>
                        <ol className='list'>
                            <li className="item">
                                <h2>Front-End</h2>
                                <span>ReactJs, Redux, HTML, CSS, MaterialUI, NPM, BootStrap, StyledComponents</span>
                            </li>
                            <li className="item">
                                <h2>Back-End</h2>
                                <span>NodeJS, ExpressJS, MySql, MongoDB, AWS</span>
                            </li>
                            <li className="item">
                                <h2>Languages</h2>
                                <span>JavaScript, Dart, TypeScript</span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Home;