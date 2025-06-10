import { useQuery } from "@tanstack/react-query";
import AuthHook from "../../../hook/AuthHook";
import useAxiosCommon from '../../../hook/useAxiosCommon'
import TicketCard from "../../../components/TicketCard";
const MyBookings = () => {
    const { user, loading } = AuthHook();
    const axiosCommon = useAxiosCommon();
    const { data: ticket = [], refetch } = useQuery({
        queryKey: ['bookedTicket'],
        enabled: !loading,
        queryFn: async () => {
            const { data } = await axiosCommon.get(`bookedByUser?email=${user?.email}`);
            // console.log(data)
            return data;
        }
    })
    // // console.log(ticket[0].Name);
    return (
        <div className="bg-[#ebf0f4] min-h-screen">
            <div className=" max-w-7xl mx-auto">
                <h1 className="pt-10 mb-10 text-center font-bold text-2xl uppercase underline text-[#00026e]">My Bookings</h1>
                {/* <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-5 items-center mx-5">
                    {
                        ticket?.map(ticket =>
                            <TicketCard
                                key={ticket?._id}
                                ticket={ticket}>
                            </TicketCard>)
                    }
                </div> */}
                <div className="max-w-5xl mx-auto flex flex-wrap gap-5 justify-center px-2 md:px-0">
                    {
                        ticket?.map(ticket =>
                            <TicketCard
                                key={ticket?._id}
                                ticket={ticket}>
                            </TicketCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default MyBookings;