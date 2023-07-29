import React from 'react'
import "./Work.css"
import Working1 from "./working-1.jpg"
import Working2 from "./working-2.jpg"
import Working3 from "./working-3.jpg"
export default function Work() {
    return (
        <div className='work-main-div'>
            <div className='heading-div' data-aos="zoom-in-up" data-aos-offset="170">
                <h6 className='h6'>Working Areas</h6>
                <h1>Covered Industries</h1>

                <p>We are an Interior Designer, Who believe in excellence, quality and honesty, yes we design beautiful home interiors.</p>
            </div>
            <div className='Flex'>
                <div className='work-card-div Flex'>
                    <div>
                        <div>
                            <img src={Working1} data-aos="zoom-in-up" data-aos-offset="170" />
                        </div>
                        <div className='text-div'  >
                            <h5 >Residential</h5>
                            <p>Indignation and dislike men who are so beguiled and our the charms moment.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={Working2} data-aos="zoom-in-up" data-aos-offset="170" />
                        </div>
                        <div className='text-div'>
                            <h5>Commercial</h5>
                            <p>Righteous indignation work are so beguiled demoralized the blinded by desire.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={Working3} data-aos="zoom-in-up" data-aos-offset="170" />
                        </div>
                        <div className='text-div'>
                            <h5>Industries</h5>
                            <p>Our power of choice is and when nothing prevents work every pleasure interior.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
