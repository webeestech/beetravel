import {motion} from "framer-motion";
import { staggerContainer, travelVariants,fadeIn} from "../utils/motion";
import DestinationImage from "../assets/destination.png"
const Destination = () => {
  return (
    <section id="#destination">
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once:true, amount: 0.25  }}
            className="w-5/6 mx-auto mt-16 flex md:flex-row flex-col items-center gap-12"
        >
            <motion.div variants={travelVariants('left')}>
                <img src={DestinationImage} alt="destination image" />
            </motion.div>
            <motion.div variants={fadeIn("left","tween",0.2,1)}  className="md:text-start text-center">
                <p className="text-primary-500 tracking-widest font-semibold">Destination Point</p>
                <h1 className="text-5xl text-secondary-100 font-semibold py-5">Our Stories Have <br/>Adventures</h1>
                <p className="md:px-0 px-6">We are experienced in bringing adventures to stay their journey, <br className="md:block hidden"/>with all outdoor destinations in the world as our specialties. Start <br className="md:block hidden"/>your adventure now! Nature has already called you!</p>
                <div className="flex gap-4 mt-8">
                <div className="flex items-center justify-start bg-white h-28 w-28 rounded-xl">
                    <div className=" flex flex-col items-start justify-center pl-4" >
                        <p className="text-primary-500 text-3xl font-bold mt-4">10+</p>
                        <p className="mb-4 mt-2 text-sm">European<br/>Countries</p>
                    </div>                    
                </div>
                <div className="flex items-center justify-start bg-white h-28 w-28 rounded-xl">
                    <div className=" flex flex-col items-start justify-center pl-4" >
                        <p className="text-primary-500 text-3xl font-bold mt-4">40+</p>
                        <p className="mb-4 mt-2 text-sm">Worldwide<br/>Offices</p>
                    </div>                    
                </div>
                <div className="flex items-center justify-start bg-white h-28 w-28 rounded-xl">
                    <div className=" flex flex-col items-start justify-center pl-4" >
                        <p className="text-primary-500 text-3xl font-bold mt-4">20K+</p>
                        <p className="mb-4 mt-2 text-sm">Happy<br/>Customers</p>
                    </div>                    
                </div>
                </div>
            </motion.div>
        </motion.div>

    </section>
  )
}

export default Destination


                    