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
            console.log(data)
            return data;
        }
    })
    // console.log(ticket[0].Name);
    return (
        <div className="bg-[#ebf0f4] min-h-screen">
            <div className=" max-w-7xl mx-auto">
                <h1 className="pt-10 mb-10 text-center font-bold text-2xl uppercase underline text-[#00026e]">My Bookings</h1>
                <div className="flex justify-center items-center">
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