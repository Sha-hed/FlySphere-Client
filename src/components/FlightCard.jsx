
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const FlightCard = ({ flight, c, adults, child, date, from, to, total }) => {
    const { _id, Airline, image, From, To, Departure_Time, Arrival_Time, Total_Time, Total_Stops, Fare } = flight
    let stops;
    if (Total_Stops === 0) {
        stops = 'NS'
    }
    else if (Total_Stops === 1) {
        stops = '1-St'
    }
    else if (Total_Stops === 2) {
        stops = '2-St'
    }
    return (
        <div className="flex rounded-xl">
            <div className="h-[150px] w-[630px] flex mt-5 px-5 py-5 bg-white">
                <div className="w-36 my-5">
                    <div className="w-28">
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="w-52 m-5">
                    <h1 className="text-xl">{Airline}</h1>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-[#00026e] font-bold text-xl my-5">{Departure_Time}</h1>
                    <h1 className="text-[#00026e]">{From}</h1>
                </div>
                <div className="m-5 flex flex-col justify-center items-center">
                    <p>{stops}</p>
                    <h1><FaLongArrowAltRight className="text-7xl font-bold" /></h1>
                </div>
                <div>
                    <h1 className="text-[#00026e] font-bold text-xl my-5">{Arrival_Time}</h1>
                    <h1 className="text-[#00026e] font-medium">{To}</h1>
                </div>
                <div>
                    <h1 className="text-[#00026e] font-semibold mx-1">{Total_Time}min</h1>
                </div>
            </div>
            <div className="h-[150px] w-[250px] flex flex-col justify-center items-center mt-5 px-5 py-5 bg-[#ecf3fe] border-l-0 border-2">
                <h1 className="font-medium text-[#00026e] my-2 text-lg">BDT {Fare}</h1>
                <div className="bg-[#ffc107] rounded px-1">
                    <Link to={`/reviewBooking/${_id}`} state={{ c, adults, child, date, from, to, total }} className="flex items-center justify-around p-1 w-[200px] font-semibold text-[#00026e]">Select <FaLongArrowAltRight /></Link>
                </div>
            </div>
        </div>
    );
};

export default FlightCard;