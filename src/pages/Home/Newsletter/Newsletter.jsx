import { useRef } from 'react';
import Naa from '../../../assets/images/Naa.png'
import './news.css'
import useAxiosCommon from '../../../hook/useAxiosCommon';
import toast from 'react-hot-toast';
const Newsletter = () => {

    const axiosCommon = useAxiosCommon()

    const handleSubscribe = async() =>{
        const email = document.getElementById('EmailInput').value 
        const checkBox = document.getElementById('CheckBoxInput').checked
        if(!email){
            return
        }
        if(!checkBox){
            return
        }
        const user = {email}
        const { data } = await axiosCommon.post('/newsletter', user)
        if(data.insertedId){
            toast.success('Thank You for Subscribing')
            document.getElementById('EmailInput').value=''
            document.getElementById('CheckBoxInput').checked=false
        }
    }


    return (
        <div className='bg-gray-200 py-32 px-3 md:px-0'>
            <div className='bgc w-full md:w-[1100px] h-[400px] mx-auto bg-cover bg-center bg-no-repeat rounded-xl flex md:justify-end'>
                <div className='text-white w-full md:w-1/2 flex flex-col space-y-5 py-10 px-3'>
                    <h1 className='text-xl md:text-4xl'>Never miss an offer</h1>
                    <h1>Subscribe and be the first to receive our exclusive offers.</h1>
                    <input id='EmailInput' className='p-3 rounded-md text-black' type="email" name="" placeholder='Email Address' />
                    <div className='flex justify-start'>
                        <input id='CheckBoxInput' className="w-8 h-8 text-green-500 border-gray-300 rounded mr-3" type="checkbox" name="" />
                        <label htmlFor="">I would like to get offers and news. I have read and understood the privacy policy.</label>
                    </div>
                    <div>
                        <button onClick={handleSubscribe} className='py-3 px-5 border-2 border-white flex rounded-full font-semibold hover:bg-white hover:text-black'>Subscribe</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Newsletter;