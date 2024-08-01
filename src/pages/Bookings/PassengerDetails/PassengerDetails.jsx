import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthHook from "../../../hook/AuthHook";
import { DetailsContext } from "../Bookings/Bookings";

const PassengerDetails = () => {
    const { flight, total, c, date } = useContext(DetailsContext);
    const { user } = AuthHook();
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const fullName = title + ' ' + firstName + ' ' + lastName;
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
    return (
        <div className="p-5 bg-white rounded-xl text-[#6E6B7B]">
            <div className="flex gap-5">
                <h1 className="text-[#00026e] font-semibold">Passenger1 </h1>
                <h1 className="text-[#056998] font-semibold">Primary Contact</h1>
            </div>
            <hr className="my-3" />
            <label className="text-[#6E6B7B]" htmlFor="">Select from Traveller List</label>  <br />
            <select onChange={(e) => console.log(e.target.value)} className="border w-full p-3 rounded mb-10 mt-2" name="" id="">
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
            <div className="flex gap-5">
                <div className="my-5 flex flex-col w-1/2">
                    <label htmlFor="">Given Name / First Name</label>
                    <input onChange={(e) => setFirstName(e.target.value)} className="border p-2 rounded-lg my-2 outline-none" type="text" name="firstName" id="" />
                </div>
                <div className="my-5 flex flex-col w-1/2">
                    <label htmlFor="">Last Name</label>
                    <input onChange={(e) => setLastName(e.target.value)} className="border p-2 rounded-lg my-2 outline-none" type="text" name="lastName" id="" />
                </div>
            </div>
            <div className="flex gap-5">
                <div className=" flex flex-col w-1/2">
                    <label htmlFor="">Nationality</label>
                    <select onChange={(e) => console.log(e.target.value)} className="border p-2 rounded-lg my-2 outline-none" name="" id="">
                        <option value="">Select Nationality</option>
                        <option value="Bangladeshi">Bangladeshi</option>
                    </select>
                </div>
                <div className="flex flex-col w-1/2">
                    <label htmlFor="">Frequent Flyer Number (Optional)</label>
                    <input className="border p-2 rounded-lg my-2 outline-none" type="text" name="flayerNumber" id="" />
                </div>
            </div>
            <hr className="my-5" />
            <h1 className="text-[#00026e] font-semibold">Contact Details</h1>
            <p className="pl-1 text-sm my-2">Receive booking confirmation & updates</p>
            <div className="flex gap-5">
                <div className=" flex flex-col w-1/2">
                    <label htmlFor="">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded-lg my-2 outline-none" type="email" name="email" id="" />
                </div>
                <div className="flex flex-col w-1/2">
                    <label htmlFor="">Phone Number</label>
                    <input onChange={(e) => setPhone(e.target.value)} className="border p-2 rounded-lg my-2 outline-none" type="text" name="flayerNumber" id="" />
                </div>
            </div>
            <div >
                <Link to={`/payments/${flight?._id}`} state={{ fullName, email, phone, total, c, date }} className="w-full btn bg-[#fdcc02] text-[#00026e] mt-5 p-3 rounded-lg font-semibold">Continue</Link>
            </div>
        </div>
    );
};

export default PassengerDetails;