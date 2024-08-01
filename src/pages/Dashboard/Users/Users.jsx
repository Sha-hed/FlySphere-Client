import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosCommon from "../../../hook/useAxiosCommon";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUser } from "react-icons/fa";
const Users = () => {

    const axiosCommon = useAxiosCommon();
    const { data: users = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/users')
            return data;
        }
    })
    return (
        <div>
            <h1 className="mt-10 text-center font-bold uppercase underline text-3xl text-[#00026e]">All users</h1>
            <div className="w-full overflow-x-auto my-10">
                <table className="w-full text-left border border-collapse rounded sm:border-separate border-slate-200">
                    <tbody>
                        <tr>
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 text-center">#</th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 text-center">Email</th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 text-center">Phone</th>
                            <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 text-center">userRole</th>
                        </tr>
                        {
                            users.map((user, id) => <tr key={id}>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{id + 1}</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black">{user.Email}</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black">{user.phoneNumber}</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-green-600 flex flex-col justify-center items-center uppercase font-semibold">
                                    {
                                        user?.userRole === 'Admin' ? <MdAdminPanelSettings /> : <FaUser />
                                    }
                                    {user.userRole}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;