import axios from "axios";


const axiosCommon = axios.create({
    baseURL: "https://zayaan-server.vercel.app",
})

const useAxiosCommon = () => {
    return axiosCommon;
};

export default useAxiosCommon;