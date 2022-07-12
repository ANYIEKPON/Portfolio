import React from 'react'
import '../styles/Portfolio.css';
import Ecomm from '../assets/E-comm-web.PNG'


function Portfolio() {
  return (
    <div className='portfolio-a'>
        <div className='portfolio'>
            <div className='text'>
                <h4>My Recent Work</h4>
                <h2 className='a'>Portfolio</h2>
            </div>
                
                <div className='portfolio_container'>
                <div className='portfolio_item'>
                    <div className="portfolio_item_img">
                        <img src={Ecomm} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio_item-cta'>
                            <button className='btn'><a href="https://github.com" target='_blank'>Github</a></button>
                            <button className='btn'><a href="https://dribbble.com" target='_blank'>Live Demo</a></button>
                        </div>
                </div>
                <div className='portfolio_item'>
                    <div className="portfolio_item_img">
                        <img src={Ecomm} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                        <div className='portfolio_item-cta'>
                            <button className='btn'><a href="https://github.com" target='_blank'>Github</a></button>
                            <button className='btn'><a href="https://dribbble.com" target='_blank'>Live Demo</a></button>
                        </div>
                </div>
                <div className='portfolio_item'>
                    <div className="portfolio_item_img">
                        <img src={Ecomm} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio_item-cta'>
                            <button className='btn'><a href="https://github.com" target='_blank'>Github</a></button>
                            <button className='btn'><a href="https://dribbble.com" target='_blank'>Live Demo</a></button>
                        </div>
                </div>
                <div className='portfolio_item'>
                    <div className="portfolio_item_img">
                        <img src={Ecomm} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio_item-cta'>
                            <button className='btn'><a href="https://github.com" target='_blank'>Github</a></button>
                            <button className='btn'><a href="https://dribbble.com" target='_blank'>Live Demo</a></button>
                        </div>
                </div>
                
                </div>
        </div>
    </div>
  )
}

export default Portfolio;