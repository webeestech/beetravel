import React, { useState } from 'react'
import Logo from "../assets/logo.svg"
import {motion} from "framer-motion"
import { navVariants } from '../utils/motion';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import useMediaQuery from "../hooks/useMediaQuery"
import ContactButton from './ContactButton'

const Navbar = () => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once:true}}
    >
        <div className='flex items-center justify-between py-6 w-full'>
            <div className='flex items-center justify-between w-5/6 mx-auto gap-20'>
                <div className='flex items-center justify-center gap-2'>
                    <img src={Logo} alt="logo" />
                    <h1 className='text-lg text-secondary-100 font-bold'>Be<span className='text-primary-500'>e</span>Travel</h1>
                </div>
                {isAboveMediumScreen ? (
                    <div className='flex justify-between items-center w-full'>
                        <div className='text-primary-300 text-sm'>
                            <ul className='flex gap-6'>
                                <li><a href="">Home</a></li>
                                <li><a href="">Countries</a></li>
                                <li><a href="">Features</a></li>
                                <li><a href="">Customers</a></li>
                            </ul>
                        </div>
                    <ContactButton />
                    </div>
                ): (
                    <button
                            className="rounded-full bg-primary-300 p-2"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <Bars3Icon className="h-6 w-6 text-white"/>
                    </button>
                )}
            </div>
        </div>
        {/* MOBILE NAVBAR */}
        { isMenuToggled && !isAboveMediumScreen && ( 
            <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-300 drop-shadow-xl' >
                {/* CLOSING */}
                <div className='flex justify-end p-12'>
                    <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                      <XMarkIcon className='h-6 w-6 text-white' />
                    </button>
                </div>
                {/* LINKS */}
                <div className='ml-[33%] '>
                        <ul className='flex flex-col gap-10 text-2xl text-white'>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#countries">Countries</a></li>
                            <li><a href="">Features</a></li>
                            <li><a href="">Customers</a></li>
                        </ul>
                </div>
            </div>
          )

        }
    </motion.nav>
  )
}

export default Navbar