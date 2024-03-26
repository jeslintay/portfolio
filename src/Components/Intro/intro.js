import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import {Link} from 'react-scroll'
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id='intro'>
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className='introText'>I'm <span className='introName'>Jeslin</span></span>
            <p className='introPara'>I am interested in software development and data analytics</p>
            <Link><button className='btn'><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src="" alt="Profile" className='bg'/>

        

    </section>
  )
}

export default Intro