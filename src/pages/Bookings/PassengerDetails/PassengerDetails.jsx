import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthHook from "../../../hook/AuthHook";
import { DetailsContext } from "../Bookings/Bookings";
import toast from "react-hot-toast";

const PassengerDetails = () => {
    const navigate = useNavigate();
    const { flight, total, c, date } = useContext(DetailsContext);
    const { user } = AuthHook();
    const [title, setTitle] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const fullName = title + ' ' + firstName + ' ' + lastName;
   // console.log('Total Money:', total);
   // console.log("Total types :", typeof total);
    const t = [
        {
            name: 'MR'
        },
        {
            name: 'MS'
        },
        {
            name: 'MRS'
        }
    ]

    const handleContinue = () => {
        // Handle continue logic here, e.g., form validation, API calls, etc.
        if (!email || !phone || !firstName || !lastName || !title) {
            return toast.error("Please fill all the fields");
        }
        if (!user) {
            return setOpenModal(true)
        }
        navigate(`/payments/${flight?._id}`, { state: { c, date, email, fullName, phone, total } });

    }


    return (
        <div className="p-5 bg-white rounded-xl text-[#6E6B7B]">
            {/*  Modal for promotion */}
            <div className="mx-auto flex w-72 items-center justify-center">
                {/* <button onClick={() => setOpenModal(true)} className="rounded-md bg-indigo-600 px-4 py-[6px] text-white">
                    Attention!
                </button> */}
                <div
                    onClick={() => setOpenModal(false)}
                    className={`fixed z-[100] flex items-center justify-center ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100`}
                >
                    <div
                        onClick={(e_) => e_.stopPropagation()}
                        className={`absolute w-80 rounded-lg bg-white p-6 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${openModal ? 'opacity-1 translate-y-0 duration-300' : 'translate-y-20 opacity-0 duration-150'}`}
                    >
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <svg className="w-16 stroke-rose-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g strokeWidth="0"></g>
                                <g strokeLinecap="round" strokeLinejoin="round"></g>
                                <g>
                                    <path opacity="0.4" d="M12 7.75V13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}
                                    <path
                                        d="M21.0802 8.58003V15.42C21.0802 16.54 20.4802 17.58 19.5102 18.15L13.5702 21.58C12.6002 22.14 11.4002 22.14 10.4202 21.58L4.48016 18.15C3.51016 17.59 2.91016 16.55 2.91016 15.42V8.58003C2.91016 7.46003 3.51016 6.41999 4.48016 5.84999L10.4202 2.42C11.3902 1.86 12.5902 1.86 13.5702 2.42L19.5102 5.84999C20.4802 6.41999 21.0802 7.45003 21.0802 8.58003Z"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                    <path opacity="0.4" d="M12 16.2002V16.3002" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>{' '}
                                </g>
                            </svg>
                            <h6 className="text-center text-sm font-medium opacity-70">You need to log in to your account to book a ticket.</h6>
                            <div className="flex gap-2">
                                <Link
                                    to={`/payments/${flight?._id}`}
                                    state={{ c, date, email, fullName, phone, total }}
                                    // onClick={() => setOpenModal(false)} 
                                    className="rounded-md bg-indigo-600 px-6 py-2 text-sm text-white">
                                    Sign In
                                </Link>
                                <button onClick={() => setOpenModal(false)} className="rounded-md border border-rose-600 px-6 py-2 text-sm text-rose-600 hover:bg-rose-600 hover:text-white">
                                    Not Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-5">
                <h1 className="text-[#00026e] font-semibold">Passenger1 </h1>
                <h1 className="text-[#056998] font-semibold">Primary Contact</h1>
            </div>
            <hr className="my-3" />
            <label className="text-[#6E6B7B]" htmlFor="">Select from Traveller List</label>  <br />
            <select className="border w-full p-3 rounded mb-10 mt-2" name="" id="">
                <option value="Select Traveller">Select Traveller</option>
                <option value="New Traveller">New Traveller</option>
                {user && <option value="">(Me)</option>}
            </select>
            <h1 className="text-[#00026e] font-semibold mb-1">Personal Details</h1>
            <p className="pl-1 text-sm">As mentioned on your passport or government approved IDs</p>
            <p className="my-2">Select Title</p>
            <div className="flex gap-5">
                {/* <button onClick={() => setMr(!mr)} className={`btn btn-outline rounded ${mr ? 'bg-black text-white' : ''}`}>MR.</button>
                <button onClick={() => setMs(!ms)} className={`btn btn-outline rounded ${ms ? 'bg-black text-white' : ''}`}>MS.</button>
                <button onClick={() => setMrs(!mrs)} className={`btn btn-outline rounded ${mrs ? 'bg-black text-white' : ''}`}>MRS.</button> */}
                {
                    t?.map((b, id) =>
                        <button
                            onClick={() => setTitle(b.name)}
                            key={id}
                            className={`btn btn-outline rounded ${title ? title === b.name ? 'bg-black text-white' : '' : ''}`}>
                            {b.name}.
                        </button>)
                }
            </div>
            <div className="flex gap-5 items-center">
                <div className="my-5 flex flex-col w-1/2">
                    <label htmlFor="">Given Name / First Name</label>
                    <input onChange={(e) => setFirstName(e.target.value)} className="bg-gray-100 border p-2 rounded-lg my-2 outline-none" type="text" name="firstName" id="" />
                </div>
                <div className="flex flex-col w-1/2 gap-y-1">
                    <label className="mb-[2px]" htmlFor="">Last Name</label>
                    <input onChange={(e) => setLastName(e.target.value)} className="bg-gray-100 border p-2 rounded-lg my-2 outline-none mt-8 md:mt-0" type="text" name="lastName" id="" />
                </div>
            </div>
            <div className="flex gap-5">
                <div className=" flex flex-col w-1/2 gap-y-2">
                    <label htmlFor="">Nationality</label>
                    <select className="bg-gray-100 border p-2 rounded-lg my-2 outline-none mt-8 md:mt-0" name="" id="">
                        <option value="">Select Nationality</option>
                        <option value="Bangladeshi">Bangladeshi</option>
                    </select>
                </div>
                <div className="flex flex-col w-1/2">
                    <label htmlFor="">Frequent Flyer Number (Optional)</label>
                    <input className="bg-gray-100 border p-2 rounded-lg my-2 outline-none" type="text" name="flayerNumber" id="" />
                </div>
            </div>
            <hr className="my-5" />
            <h1 className="text-[#00026e] font-semibold">Contact Details</h1>
            <p className="pl-1 text-sm my-2">Receive booking confirmation & updates</p>
            <div className="flex gap-5">
                <div className=" flex flex-col w-1/2">
                    <label htmlFor="">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} className="bg-gray-100 border p-2 rounded-lg my-2 outline-none" type="email" name="email" id="" />
                </div>
                <div className="flex flex-col w-1/2">
                    <label htmlFor="">Phone Number</label>
                    <input onChange={(e) => setPhone(e.target.value)} className="bg-gray-100 border p-2 rounded-lg my-2 outline-none" type="text" name="flayerNumber" id="" />
                </div>
            </div>
            <div>
                <button onClick={handleContinue} className="w-full btn bg-[#fdcc02] text-[#00026e] mt-5 p-3 rounded-lg font-semibold">Continue</button>
                {/* <Link to={`/payments/${flight?._id}`} state={{ fullName, email, phone, total, c, date }} className="w-full btn bg-[#fdcc02] text-[#00026e] mt-5 p-3 rounded-lg font-semibold">Continue</Link> */}
            </div>
        </div>
    );
};

export default PassengerDetails;