import plane from '../../../assets/images/Plane2.png'
import { IoSearch } from "react-icons/io5";
import './banner.css'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div>
            <div className='relative banner h-[600px] bg-cover object-fit flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center gap-2 -mb-5 z-10 w-[150px] text-center rounded-xl bg-white shadow-xl text-black font-bold p-3'>
                    <div className='w-6'>
                        <img src={plane} alt="" />
                    </div>
                    <h1 className='text-blue-900 text-xl'>Flight</h1>
                </div>
                <div className='relative flex gap-5 bg-white shadow-xl text-black p-12 rounded-xl'>
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
                    <Link to='/flight' className="relative flex items-center gap-2 -mt-8 z-10 px-12 shadow-xl py-3 rounded-xl text-xl bg-[#eab308] font-bold text-blue-900"><IoSearch className='flex' />Search</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;