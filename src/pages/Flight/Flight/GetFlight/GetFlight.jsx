import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../../hook/useAxiosCommon";
import FlightCard from "../../../../components/FlightCard";
import { useState } from "react";

const GetFlight = ({ c, adults, child, date, from, to, total, count }) => {
    const axiosCommon = useAxiosCommon()
    const [cheap, setCheap] = useState(true);
    const [fast, setFast] = useState(false);
    const { data: flights = [] } = useQuery({
        queryKey: ['flight', count, fast, cheap],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/getFlight?arr=${from}&des=${to}&fastest=${fast}`)
            return data;
        }
    })
    // console.log(flights)
    const handleCheap = () => {
        setCheap(true)
        setFast(false);
        console.log('Click korse Handle')
    }
    const handleFast = () => {
        setCheap(false);
        setFast(true);
        console.log('Click Korse Fastest eee')
    }
    return (
        <div className="my-5 min-h-screen">
            <div className="flex gap-5 justify-between bg-white mt-5 p-3 rounded-md">
                <div className="w-1/2">
                    <div className={`${cheap ? 'bg-[#ebf0f4]' : ''} p-3 rounded`}>
                        <button onClick={handleCheap} className="text-[#00026e] font-semibold">Cheapest</button>
                        <p className="text-sm text-[#6e6b7b]">{`${cheap? "Showing the cheapest flights in ascending order":"Click to see the cheapest flights in ascending order"}`}</p>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className={`${fast ? 'bg-[#ebf0f4]' : ''} p-3 rounded`}>
                        <button onClick={handleFast} className="text-[#00026e] font-semibold">Fastest</button>
                        <p className="text-sm text-[#6e6b7b]">{`${fast?"Showing the fastest flights in ascending order":"Click to see the fastest flights in ascending order"}`}</p>
                    </div>
                </div>
            </div>
            <div>
                {
                    flights?.map(flight => <FlightCard key={flight._id}
                        c={c}
                        adults={adults}
                        child={child}
                        date={date}
                        from={from}
                        to={to}
                        total={total}
                        flight={flight}>
                    </FlightCard>)
                }
            </div>
        </div>
    );
};

export default GetFlight;