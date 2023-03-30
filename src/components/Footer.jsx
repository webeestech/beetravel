import Logo from "../assets/logo.svg"
import Facebook from "../assets/facebook.svg"
import Twiter from "../assets/twitter.svg"
import Instagram from "../assets/instagram.svg"
    
const Footer = () => {
  return (
    <div className='w-5/6 mx-auto py-20'>
        <div className='flex md:flex-row flex-col items-center justify-between'>
            <div className='flex flex-col items-start gap-10 basis-1/3'>
                <div className='flex items-center justify-center gap-2'>
                    <img src={Logo} alt="logo" />
                    <h1 className='text-lg text-secondary-100 font-bold'>Be<span className='text-primary-500'>e</span>Travel</h1>
                </div>
                <p>Top 3 in the World</p>
                <div className="flex gap-2">
                    <img src={Facebook} alt="facebook" />
                    <img src={Instagram} alt="instagram" />
                    <img src={Twiter} alt="twitter" />
                </div>
            </div>
            <div className="flex items-start justify-between md:gap-0 gap-4 md:mt-0 mt-4 basis-2/3">
                <div className="flex flex-col gap-6">
                    <h1 className="font-semibold text-secondary-100">Resources</h1>
                    <p className="text-sm">Download</p>
                    <p className="text-sm">Help Center</p>
                    <p className="text-sm">Guide Book</p>
                    <p className="text-sm">App Directory</p>
                </div>
                <div className="flex flex-col gap-6">
                    <h1 className="font-semibold text-secondary-100">Travellers</h1>
                    <p className="text-sm">Advantages</p>
                    <p className="text-sm">Offers</p>
                    <p className="text-sm">Customer Stories</p>
                    <p className="text-sm">Specials</p>
                </div>
                <div className="flex flex-col gap-6">
                    <h1 className="font-semibold text-secondary-100">Company</h1>
                    <p className="text-sm">Travelling</p>
                    <p className="text-sm">Offices</p>
                    <p className="text-sm">Guide Book</p>
                    <p className="text-sm">Information</p>
                </div>
                <div className="flex flex-col  gap-6">
                    <h1 className="font-semibold text-secondary-100">Our App</h1>
                    <p className="text-sm">App Store</p>
                    <p className="text-sm">Google Play Store</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer