
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const FlightCard = ({ flight, c, adults, child, date, from, to, total }) => {
    const { Flight_Name, _id, Airline, image, From, To, Departure_Time, Arrival_Time, Total_Time, Total_Stops, Fare } = flight
    let timeCalc = Total_Time
    if (timeCalc === 60) {
        timeCalc = `1h`
    }
    else if (timeCalc > 60) {
        let intTime = Math.floor(timeCalc / 60);
        let intMin = timeCalc % 60;
        if (!intMin) {
            timeCalc = `${Total_Time}h`
        } else {
            timeCalc = `${intTime}h ${intMin}min`
        }
    }
    else {
        timeCalc = `${Total_Time}min`
    }
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
            <div className="h-[150px] w-[700px] flex mt-5 pl-5 py-5 bg-white">
                {/* Plane Pic */}
                <div className="w-28 my-5">
                    <div className="w-28">
                        <img src={image} alt="" />
                    </div>
                </div>
                {/* AirLine Name */}
                <div className="w-[200px] m-5 py-2">
                    <h1 className="text-xl">{Airline}</h1>
                </div>
                {/* Departure Section */}
                <div className="mr-1 flex flex-col w-[100px]">
                    <h1 className="text-[#00026e] font-bold text-xl my-5 text-right">{Departure_Time}</h1>
                    <h1 className="text-[#00026e] font-medium text-right">{From}</h1>
                </div>
                <div className="flex items-center mx-2">
                    <h1><FaLongArrowAltRight className="text-3xl" /></h1>
                </div>
                {/* <div className="m-5 flex flex-col justify-center items-center">
                    <p>{stops}</p>
                    <h1><FaLongArrowAltRight className="text-7xl font-bold" /></h1>
                </div> */}
                <div className="ml-1 w-[100px]">
                    <h1 className="text-[#00026e] font-bold text-xl my-5">{Arrival_Time}</h1>
                    <h1 className="text-[#00026e] font-medium">{To}</h1>
                </div>
                <div className="">
                    <h1 className="text-[#00026e] font-semibold mx-1 text-[12px]">{timeCalc}</h1>
                </div>
            </div>
            <div className="h-[150px] w-[250px] flex flex-col justify-end items-center mt-5 px-5 py-5 bg-[#ecf3fe] border-l-0 border-2">
                <h1 className="text-[#f46a07] font-semibold">{Flight_Name}</h1>
                <h1 className="font-medium text-[#00026e] my-2 text-lg">BDT {Fare}</h1>
                <div className="bg-[#ffc107] rounded px-1">
                    <Link to={`/reviewBooking/${_id}`} state={{ c, adults, child, date, from, to, total }} className="flex items-center justify-around p-1 w-[200px] font-semibold text-[#00026e]">Select <FaLongArrowAltRight /></Link>
                </div>
            </div>
        </div>
    );
};

export default FlightCard;