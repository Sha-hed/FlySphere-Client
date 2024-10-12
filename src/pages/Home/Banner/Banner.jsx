import plane from '../../../assets/images/Plane2.png'
import { IoSearch } from "react-icons/io5";
import './banner.css'
import { Link, useNavigate } from 'react-router-dom';
const Banner = () => {
    const navigate = useNavigate()
    const handleButton = () => {
        navigate('/flight')
    }
    return (
        <div className='bg-gray-200 text-white'>
            <div className='relative banner object-contain h-[450px] bg-no-repeat flex flex-col justify-center space-y-3'>
                <div className='ml-2 md:ml-40 space-y-4'>
                    <h1 className='text-white text-3xl'>Discover the vibrant hues of autumn</h1>
                    <h1 className='text-white'>Fares from BDT 4000*</h1>
                    <h1 className=''><button onClick={handleButton} className='p-4 rounded-2xl border-2 border-white font-semibold hover:bg-white hover:text-red-900'>Book Now</button></h1>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center -translate-y-28 md:-translate-y-32'>
                <div className='flex justify-center items-center gap-2 -mb-5 z-10 w-[150px] text-center rounded-xl bg-white shadow-xl text-black font-bold p-3'>
                    <div className='w-6'>
                        <img src={plane} alt="" />
                    </div>
                    <h1 className='text-blue-900 text-xl'>Flight</h1>
                </div>
                <div className='relative flex flex-col md:flex-row gap-5 bg-white shadow-xl text-black p-12 rounded-xl'>
                    <div className='w-[220px] border-2 p-3 rounded-xl'>
                        <h1 className='uppercase'>From</h1>
                        <h1 className='font-bold text-blue-900 text-xl'>Dhaka</h1>
                        <h3>DAC, Hazrat Shahjalal...</h3>
                    </div>
                    <div className='w-[220px] border-2 p-3 rounded-xl'>
                        <h1 className='uppercase'>To</h1>
                        <h1 className='font-bold text-blue-900 text-xl'>Cox's Bazar</h1>
                        <h3>CXB, Cox's Bazar Airport</h3>
                    </div>
                    <div className='w-[200px] border-2 p-3 rounded-xl'>
                        <h1 className='uppercase'>Journey Date</h1>
                        <h1><span className='font-bold text-blue-900 text-xl'>29</span> june'24</h1>
                        <h3>Saturday</h3>
                    </div>
                    <div className='w-[200px] border-2 p-3 rounded-xl'>
                        <h1 className='uppercase'>Return Date</h1>
                        <h3>Save more money on return flight</h3>
                    </div>
                    <div className='w-[200px] border-2 p-3 rounded-xl'>
                        <h1 className='uppercase'>Traveller, Class</h1>
                        <h1 className='font-bold text-blue-900 text-xl'>1 Traveller</h1>
                        <h3>Economy</h3>
                    </div>
                </div>
                <div>
                    <Link to='/flight' className="relative flex items-center gap-2 -mt-8 z-10 px-12 shadow-xl py-3 rounded-xl text-xl bg-[#eab308] font-bold text-blue-900 border-2"><IoSearch className='flex' />Search</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;