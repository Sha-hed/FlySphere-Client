import { NavLink, Outlet } from "react-router-dom";
import Admin from '../assets/images/Admin.png';
import { MdOutlineTableView } from "react-icons/md";
import { AiOutlineBlock } from "react-icons/ai";
import { MdFlightTakeoff } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaPlane } from "react-icons/fa6";

const Dashboard = () => {
    return (
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row text-white">
            <div className="w-full flex flex-col md:flex-row md:block md:w-64 h-[300px] md:min-h-screen bg-[#374587]">
                <div className="flex flex-col justify-center items-center mt-2 md:mt-10">
                    <div className="w-20 rounded-full">
                        <img className="rounded-full border-4 p-1" src={Admin} alt="" />
                    </div>
                    <h1 className="uppercase text-2xl font-semibold my-1 md:my-10">Admin Dashboard</h1>
                    <div className="w-full mx-auto my-3 border"></div>
                </div>
                <div className="flex flex-row md:flex-col">
                    <div className="flex items-center gap-2 m-3">
                        <MdOutlineTableView className="text-xl" />
                        <li className="list-none"><NavLink to='/dashboard/viewFlight'>View All Flight</NavLink></li>
                    </div>
                    <div className="flex items-center gap-2 mx-3 mb-3">
                        <AiOutlineBlock className="text-xl" />
                        <li className="list-none"><NavLink to='/dashboard/bookedFlight'>Booked Flight</NavLink></li>
                    </div>
                    <div className="flex items-center gap-2 mx-3 mb-3">
                        <MdFlightTakeoff className="text-xl" />
                        <li className="list-none"><NavLink to='/dashboard/addFlight'>Add Flight</NavLink></li>
                    </div>
                    <div className="flex items-center gap-2 mx-3 mb-3">
                        <FaUsers className="text-xl" />
                        <li className="list-none"><NavLink to='/dashboard/users'>Users</NavLink></li>
                    </div>
                </div>
                <div className="w-full mx-auto my-3 border divide-dotted"></div>
                <div className="flex flex-row md:flex-col justify-around">
                    <div className="flex items-center gap-2 mx-3 mb-3">
                        <FaHome className="text-xl" />
                        <li className="list-none"><NavLink to='/'>Home</NavLink></li>
                    </div>
                    <div className="flex items-center gap-2 mx-3 mb-3">
                        <FaPlane className="text-xl" />
                        <li className="list-none"><NavLink to='/flight'>Flight</NavLink></li>
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-gray-200 text-black">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;