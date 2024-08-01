import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthHook from '../../hook/AuthHook';
import toast from 'react-hot-toast';
import useAxiosCommon from '../../hook/useAxiosCommon';
const Login = () => {
    const location = useLocation();
    const jao = location?.state?.from || '/';
    const navigate = useNavigate();
    const { user, signIn, GoogleSignIn } = AuthHook();
    const [open, setOpen] = useState(false);
    const [error, setError] = useState('');
    const axiosCommon = useAxiosCommon();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const email = data.Email;
        const password = data.Password;
        signIn(email, password)
            .then((result) => {
                toast.success('logged in successfully!', {
                    duration: 4000,
                    position: 'top-right',
                });
                navigate(jao)
                console.log('from result ', result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    };
    console.log(errors);
    const handleGoogle = () => {
        GoogleSignIn()
            .then(async (result) => {
                const u = { Email: result?.user?.email, phoneNumber: '01812345678', userRole: 'User' }
                const { data } = await axiosCommon.post('/users', u)
                console.log(data);
                toast.success('logged in successfully!', {
                    duration: 4000,
                    position: 'top-right',
                });
                navigate(jao)
                console.log('From Google Sign In ', result.user)
            })
            .catch(error => setError(error.message))
    }
    return (
        <div className='bg-gray-200 py-10'>
            <div className='w-[600px] px-5 py-10 mx-auto bg-white shadow-xl border-t-4 border-blue-900 rounded'>
                <div className='p-3 border-2 text-center'>
                    <h1 onClick={handleGoogle} className='cursor-pointer flex justify-center items-center text-lg gap-2 font-semibold'><FcGoogle />Login With Google</h1>
                </div>
                <div className="divider">OR</div>
                <h1 className='my-5 font-bold text-2xl'>Sign In</h1>
                <form className='flex flex-col space-y-5' onSubmit={handleSubmit(onSubmit)}>
                    <div className='p-2 border rounded-xl flex items-center gap-5 bg-pink-50'>
                        <div>
                            <FaEnvelope className='text-lg ml-2' />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label>Email</label>
                            <input className='outline-none bg-transparent' type="email" placeholder="someone@example.com" {...register('Email', { required: true })} />
                        </div>
                    </div>
                    <div className='p-2 border rounded-xl flex items-center gap-5 bg-pink-50'>
                        <div>
                            <FaLock className='text-lg ml-2' />
                        </div>
                        <div className='flex justify-between '>
                            <div className='flex flex-col w-full'>
                                <label>Password</label>
                                <input className='outline-none bg-transparent'
                                    type={open ? 'text' : 'password'}
                                    placeholder="some@pass#123" {...register("Password", { required: true })} />
                            </div>
                            <div className='relative top-[17px] left-[250px]'>
                                {
                                    open ? <IoMdEyeOff onClick={() => setOpen(!open)} className='text-xl' /> : <IoEye onClick={() => setOpen(!open)} className='text-xl' />
                                }
                            </div>
                        </div>
                    </div>
                    <p className='text-right hover:underline cursor-pointer'>Forget Password?</p>
                    <input className='bg-blue-900 text-white font-semibold p-3 rounded-lg cursor-pointer' type="submit" value="Sign In" />
                </form>
                {
                    error && <p className='text-center text-lg font-semibold text-red-400'>{error}</p>
                }
                <p className='text-center mt-3'>Don't have an Account? <Link to='/register' className='hover:underline text-blue-900 font-medium'>Sign Up</Link></p>

            </div>
        </div>
    );
};

export default Login;