import { useQuery } from "@tanstack/react-query";
import AuthHook from "./AuthHook";
import useAxiosCommon from "./useAxiosCommon";


const BookedEmail = () => {
    const { user, loading } = AuthHook();
    console.log(user?.displayName, user?.email);
    const axiosCommon = useAxiosCommon();
    const { data: isBooked = false, refetch } = useQuery({
        queryKey: ['book'],
        enabled: !loading,
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/bookKorse?email=${user?.email}`);
            return data.message;
        }
    })

    return [isBooked, refetch]
};

export default BookedEmail;