import React from 'react'
import './about.css';
import pic from '../assets/neel.PNG';
import js from '../assets/js.pdf';
const About = () => {
  return (
    <>
    <div className='main'>
        <div className="left">
<img src={pic} alt=''/>
        </div>
        <div className="right">
            <div className='one'>
            <a href={js} download><div className='oone'>
<h3>Download My Book</h3></div></a>
                <div className='ttwo'><h3>15 MoneySaving Ideas</h3></div>
                <div className='three'><h3>Future Proofing Your Career</h3></div>
            </div>
            <div className='two'>
                <div className='four'><h3>10 Online Side Hustles</h3></div>
                <div className='five'><h3>How To Be A Good Mentor</h3></div>
                <div className='six'><h3>40 SimpleSelf Care Tips</h3></div>
            </div>
        </div>
        </div>
    </>
  )
}

export default About