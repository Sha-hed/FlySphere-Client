import { useForm } from 'react-hook-form';
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaPhone } from "react-icons/fa6";
import Go from '../../assets/images/logo2.jpg';
import logo from '../../assets/images/L1.png';
import AuthHook from '../../hook/AuthHook';
import toast from 'react-hot-toast';
import { FaArrowLeft } from "react-icons/fa6";
import auth from '../../firebase/firebase.config';
import { updateProfile } from 'firebase/auth';
import useAxiosCommon from '../../hook/useAxiosCommon';

const Register = () => {
    const location = useLocation();
    const goThere = location?.state?.from || '/';
    const c = location?.state?.c
    const date = location?.state?.date
    const email = location?.state?.email
    const fullName = location?.state?.fullName
    const phone = location?.state?.phone
    const total = location?.state?.total
    const { createUser } = AuthHook();
    const axiosCommon = useAxiosCommon();
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const jao = location?.state?.from || '/';
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email = data.Email;
        const password = data.Password;
        const phone = data.Mobile
        const role = 'User'
        setError('');
        createUser(email, password)
            .then(async (result) => {
                const user = { Email: email, phoneNumber: phone, userRole: role }
                const { data } = await axiosCommon.post('/users', user)
                // console.log(data);
                toast.success('Signed Up Successfully!', {
                    duration: 4000,
                    position: 'top-right',
                });
                navigate(jao, { state: { c, date, email, fullName, phone, total } })
                // console.log(result.user);
            })
            .catch(error => setError(error.message))
    };
    // console.log(errors);
    return (
        <div className='bg-gray-200 py-10'>
            <div className='w-[90%] md:w-[600px] px-5 py-10 mx-auto bg-white shadow-xl border-t-4 border-blue-900 rounded'>
                <div className="w-16 flex items-center">
                    <a onClick={() => navigate(-1)} className='text-3xl cursor-pointer'><FaArrowLeft /></a>
                    <img src={logo} alt="" />
                </div>
                <h1 className='mt-5 text-2xl font-bold'>Sign Up</h1>
                <p className='my-3'>Create an account to easily use our services.</p>
                <form className='flex flex-col space-y-5' onSubmit={handleSubmit(onSubmit)}>
                    <div className='p-2 border rounded-xl flex items-center gap-5 bg-gray-100'>
                        <div>
                            <FaEnvelope className='text-lg ml-2' />
                        </div>
                        <div className='flex flex-col w-full border'>
                            <label>Email</label>
                            <input className='outline-none bg-transparent' type="email" placeholder="someone@example.com" {...register('Email',
                                {
                                    required: {
                                        value: true,
                                        message: 'Provide a Email'
                                    }
                                })} />
                        </div>
                    </div>
                    {
                        errors.Email && <p className='text-red-600'>*{errors.Email.message}</p>
                    }
                    <div className='p-2 border rounded-xl flex items-center gap-5 bg-gray-100'>
                        <div>
                            <FaPhone className='text-lg ml-2' />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label>Mobile</label>
                            <input className='outline-none bg-transparent' type="text" placeholder="0171234567" {...register('Mobile', {
                                required: {
                                    value: true,
                                    message: 'Provide a Valid Number'
                                }
                            })} />
                        </div>
                    </div>
                    {
                        errors.Mobile && <p className='text-red-600'>*{errors.Mobile.message}</p>
                    }
                    <div className='p-2 border rounded-xl flex items-center gap-5 bg-gray-100'>
                        <div>
                            <FaLock className='text-lg ml-2' />
                        </div>
                        <div className='flex justify-between '>
                            <div className='flex flex-col w-full'>
                                <label>Password</label>
                                <input className='outline-none bg-transparent'
                                    type="password"
                                    placeholder="some@pass#123" {...register("Password", {
                                        required: {
                                            value: true,
                                            message: 'Provide a Strong Password'
                                        }
                                    })} />
                            </div>
                            {/* <div className='relative top-[17px] left-1/4 md:left-[250px]'>
                                {
                                    open ? <IoMdEyeOff onClick={() => setOpen(!open)} className='text-xl' /> : <IoEye onClick={() => setOpen(!open)} className='text-xl' />
                                }
                            </div> */}
                        </div>
                    </div>
                    {
                        errors.Password && <p className='text-red-600'>*{errors.Password.message}</p>
                    }
                    <div className='flex gap-2'>
                        {/* <input className='text-xl ml-1' type="checkbox" name="box" id="" /> */}
                        <input type="checkbox" placeholder="CheckBox" {...register("CheckBox", {
                            required: {
                                value: 'true',
                                message: 'Accept Our Terms and Conditions'
                            }
                        })} />
                        <p>By creating an account you agree to our Terms & Conditions</p>
                    </div>
                    {
                        errors.CheckBox && <p className='text-red-600'>*{errors.CheckBox.message}</p>
                    }
                    <input className='bg-blue-900 text-white font-semibold p-3 rounded-lg cursor-pointer' type="submit" value="Sign Up" />
                </form>
                {
                    error && <p className='text-red-600 text-center font-semibold text-lg my-2'>{error}</p>
                }
                <p className='text-center mt-3'>Already have an Account? <Link to='/login' className='hover:underline text-blue-900 font-medium'>Sign In</Link></p>

            </div>
        </div>
    );
};

export default Register;