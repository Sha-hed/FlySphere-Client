import { Link, NavLink, useNavigate } from "react-router-dom";
import plane from '../../assets/images/Plane2.png'
import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import Go from '../../assets/images/Go.png'
import Home from '../../assets/images/Home.png'
import AuthHook from "../../hook/AuthHook";
import toast from "react-hot-toast";
import Dashboard from '../../assets/images/Dashboard.png';
import Booking from '../../assets/images/booking.png';
import Admin from "../../hook/Admin";
import BookedEmail from "../../hook/BookedEmail";
const Navbar = () => {
    const [isAdmin] = Admin();
    const [isBooked, refetch] = BookedEmail();
    const [open, setOpen] = useState(false);
    const { user, logOut } = AuthHook();
    const navigate = useNavigate();
    const handleSignOut = () => {
        logOut()
            .then(result => {
                toast.success('Logged Out Successfully!', {
                    duration: 3000,
                    position: 'top-right',
                });
                navigate('/')
                console.log('User LoggedOut Successfully ', result.user)
            })
            .catch(error => console.log(error))
    }
    const links = <>
        <ul className="block md:flex gap-5">
            <li className={`font-bold text-lg text-blue-900 flex ${open ? 'hover:bg-gray-200 hover:rounded' : ''}`}><NavLink to='/'>
                <div className="flex justify-center items-center gap-2">
                    <div className="w-6">
                        <img src={Home} alt="" />
                    </div>
                    Home
                </div>
            </NavLink>
            </li>
            <li className={`font-bold text-lg text-blue-900 flex ${open ? 'hover:bg-gray-200 hover:rounded' : ''}`}><NavLink to='/flight'>
                <div className="flex justify-center items-center gap-2">
                    <div className="w-6">
                        <img src={plane} alt="" />
                    </div>
                    Flight
                </div>
            </NavLink> </li>
            {
                isAdmin && (
                    <li className={`font-bold text-lg text-blue-900 flex ${open ? 'hover:bg-gray-200 hover:rounded' : ''}`}><NavLink to='/dashboard'>
                        <div className="flex justify-center items-center gap-2">
                            <div className="w-6">
                                <img src={Dashboard} alt="" />
                            </div>
                            Dashboard
                        </div>
                    </NavLink> </li>
                )
            }
            {
                isBooked && (
                    <li className={`font-bold text-lg text-blue-900 flex ${open ? 'hover:bg-gray-200 hover:rounded' : ''}`}><NavLink to='/myBookings'>
                        <div className="flex justify-center items-center gap-2">
                            <div className="w-6">
                                <img src={Booking} alt="" />
                            </div>
                            MyBookings
                        </div>
                    </NavLink> </li>
                )
            }
        </ul>
    </>
    return (
        <>
            {/* <div>
            <div className="navbar bg-base-100 fixed top-0 z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">GoZayaan</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary">Sign in</a>
                </div>
            </div>
        </div> */}
            <div className="max-w-6xl mx-auto flex justify-between items-center border-b">
                <div>
                    <div className="w-36">
                        <img src={Go} alt="" />
                    </div>
                </div>
                <div className="flex-1 hidden md:block">
                    <div className="flex justify-center items-center">
                        {links}
                    </div>
                </div>
                <div className="hidden md:block">
                    {
                        user ? <button onClick={handleSignOut} className="rounded bg-blue-950 text-white px-5 py-2">Sign Out</button>
                            : <Link to='/login' className="rounded bg-blue-950 text-white px-5 py-2">Sign In</Link>
                    }
                </div>
                <div className="flex-end md:hidden text-2xl">
                    {
                        open ? <button onClick={() => setOpen(!open)} className=""><AiOutlineClose /> </button>
                            : <button onClick={() => setOpen(!open)} className=""><RiMenu2Fill /></button>

                    }
                    {
                        open && (
                            <div className="absolute top-[69px] w-1/2  z-50 left-0 duration-1000 p-5 bg-gray-400 transition-all">
                                {links}
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;