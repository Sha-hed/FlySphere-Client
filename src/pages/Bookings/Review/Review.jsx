import { FaLongArrowAltRight } from "react-icons/fa";
import moment from 'moment';
import PassengerDetails from "../PassengerDetails/PassengerDetails";
import { useContext } from "react";
import { DetailsContext } from "../Bookings/Bookings";
const Review = () => {
    const { flight, date, from, to, c, total } = useContext(DetailsContext);
    // console.log({ flight, location, date, from, to, c, total });
    // console.log(date);
    const journeyTime = moment(date).format('dddd, DD MMM,YYYY')
    // console.log(journeyTime);
    const { Airline, Flight_Name, image, From, To, Departure_Time, Arrival_Time, Total_Time, Total_Stops } = flight
    let stops;
    if (Total_Stops === 0) {
        stops = 'Non-Stop'
    }
    else if (Total_Stops === 1) {
        stops = '1 Stops'
    }
    else if (Total_Stops === 2) {
        stops = '2 Stops'
    }

    return (
        <div className="my-2 md:my-5">
            <h1 className="text-[#00026e] text-xl font-semibold my-5 pl-2 md:pl-0">Review Your Booking</h1>
            <div className="w-full md:w-[720px] bg-white rounded pb-2">
                <div className="flex justify-between">
                    <h1 className="text p-4 font-semibold text-[#00026e]">{From}-{To}</h1>
                    <h1 className="text p-4 font-semibold text-[#f46a07]">{Flight_Name}</h1>
                    <h1 className="text p-4 font-semibold text-[#00026e]">({c})</h1>
                </div>
                <hr className="w-[95%] mx-auto" />
                <div className="flex items-center justify-center my-3">
                    <div className="w-32">
                        <img src={image} alt="" />
                    </div>
                    <h1>{Airline}</h1>
                </div>
                <hr className="w-[92%] mx-auto" />
                <div className="flex justify-between items-center ml-5 my-2">
                    <div>
                        <h1 className="text-xl text-[#00026e] font-medium">{Departure_Time}</h1>
                        <h1 className="text-sm text-[#00026e]">{journeyTime}</h1>
                        <h1>{From}</h1>
                    </div>
                    <div className="text-center mb-2">
                        <h1 className="text-[#728db6]">{stops}</h1>
                        <h1 className="flex justify-center"><FaLongArrowAltRight className="text-xl text-[#728db6]" /></h1>
                        <h1 className="text-[#728db6]">{Total_Time}min</h1>
                    </div>
                    <div className="text-end mr-5">
                        <h1 className="text-xl text-[#00026e] font-medium">{Arrival_Time}</h1>
                        <h1 className="text-sm text-[#00026e]">{journeyTime}</h1>
                        <h1>{To}</h1>
                    </div>
                </div>
            </div>
            <h1 className="text-[#00026e] text-xl font-semibold my-5 pl-2 md:pl-0">Enter Traveller Details</h1>
            <PassengerDetails></PassengerDetails>
        </div>
    );
};

export default Review;