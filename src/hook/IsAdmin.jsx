import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";
import AuthHook from "./AuthHook";


const IsAdmin = () => {

    const { user, loading } = AuthHook();
    // console.log(user?.displayName, user?.email);
    const axiosCommon = useAxiosCommon();
    const { data: isAdmin = false } = useQuery({
        queryKey: ['admin'],
        enabled: !loading,
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/adminKi?email=${user?.email}`);
            return data.message;
        }
    })
    // console.log(isAdmin);

    return [isAdmin]
};

export default IsAdmin;