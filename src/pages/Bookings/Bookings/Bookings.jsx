import { useLoaderData, useLocation } from "react-router-dom";
import Review from "../Review/Review";
import Fares from "../Fares/Fares";
import Payment from "../Payment/Payment/Payment";
import { createContext, useState } from "react";
export const DetailsContext = createContext(null);
const Bookings = () => {
    const flight = useLoaderData();
    const location = useLocation();
    const date = location?.state?.date
    const from = location?.state?.from;
    const to = location?.state?.to;
    const c = location?.state?.c;
    const total = location?.state?.total;
    console.log(location);
    const flightDetails = { flight, date, from, to, c, total }
    return (
        <DetailsContext.Provider value={flightDetails}>
            <div className="bg-[#ebf0f4]">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
                    <Review></Review>
                    <Fares></Fares>
                </div>
            </div>
        </DetailsContext.Provider>
    );
};

export default Bookings;