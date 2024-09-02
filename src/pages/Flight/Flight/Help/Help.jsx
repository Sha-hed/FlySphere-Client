import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookMessenger } from "react-icons/fa";
const Help = () => {
    return (
        <div className="sticky top-0 z-5 flex flex-col w-[250px] h-[200px] border-2 my-5">
            <div className="h-[60px] bg-gradient-to-r from-sky-500 to-indigo-500">
                <h1 className="text-white font-semibold p-4">We're here for you 24/7</h1>
            </div>
            <div className="h-[65px] px-4 py-5 border-b-2 bg-white">
                <h1 className="flex items-center gap-1 font-semibold"><BiSolidPhoneCall className="text-xl" />+88 09678 332211</h1>
            </div>
            <div className="h-[71px] px-4 py-5 bg-white">
                <h1 className="flex items-center gap-1 font-semibold"><FaFacebookMessenger className="text-xl" />m.me/ShaFaBD</h1>
            </div>

        </div>
    );
};

export default Help;