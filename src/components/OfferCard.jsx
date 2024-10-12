import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const OfferCard = ({ offer }) => {
    return (
        <Link to={'/flight'} className="hover:scale-105 transition-transform duration-300">
            <div className="rounded-3xl shadow-xl">
                <div className="w-full rounded-t-3xl">
                    <img className="rounded-t-3xl object-fill" src={offer.image} alt="" />
                </div>
                <div className="bg-white rounded-b-3xl">
                    <div className="h-[90px] p-3 ">
                        <h1 className="text-2xl">{offer.title}</h1>
                    </div>
                    <div className="w-[90%] mx-auto h-[1px] border border-gray-300">
                    </div>
                    <div className="h-[70px] px-3 py-4 flex justify-between items-center">
                        <h1 className="font-medium">{offer.offer}</h1>
                        <IoIosArrowForward/>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default OfferCard;