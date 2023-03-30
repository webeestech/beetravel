import React from 'react'
import {motion} from "framer-motion";
import { textVariant,staggerContainer} from '../utils/motion';
import HeroImage from "../assets/hero.png"
import ContactButton from './ContactButton'

const Hero = () => {
  return (
    <section id='#hero'>
        <div className='w-5/6 mx-auto mt-10'>
            <div className='flex items-start justify-between md:flex-row flex-col'>
                <motion.div 
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once:true, amount:0.25 }}
                  className='flex flex-col items-start gap-8 mt-16'>
                    <motion.h1 
                    variants={textVariant(1.1)}
                    className='text-secondary-100 font-sen font-bold md:text-7xl text-5xl'>Explore the <br />Best Place<br />Now</motion.h1>
                    <p className='font-light'>Plan your schedule and start to explore world. BeeTravel helps you to get 
                    <br />great offers. For more offer you can alway contact with us</p>
                    <ContactButton />
                </motion.div>
                <motion.div className='flex items-center md:mt-0 mt-10'>
                    <img src={HeroImage} alt="hero image" className='mr-8' />
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero