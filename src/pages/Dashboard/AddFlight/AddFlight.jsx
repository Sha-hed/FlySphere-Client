import axios from "axios";
// import { useState } from "react";
import useAxiosCommon from "../../../hook/useAxiosCommon";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddFlight = () => {
    const navigate = useNavigate()
    const axiosCommon = useAxiosCommon();
    // const [image, setImage] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const Airline = e.target.airline.value;
        const Flight_Name = e.target.flightName.value;
        const photo = e.target.image.files[0];
        const From = e.target.fromm.value;
        const To = e.target.too.value;
        const Departure_Time = e.target.departure_time.value;
        const Arrival_Time = e.target.arrival_time.value;
        const Total_Time = parseInt(e.target.total_time.value);
        const Total_Stops = parseInt(e.target.total_stops.value);
        const Fare = parseInt(e.target.total_fare.value);
        const formdata = new FormData();
        formdata.append('image', photo)
        try {
            const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGbbAPIKEY}`, formdata)
            const image = await data?.data?.display_url
            const flightDetails = { Flight_Name, Airline, image, From, To, Departure_Time, Arrival_Time, Total_Time, Total_Stops, Fare }
            // await setImage(data?.data?.display_url)
            // console.log(flightDetails)
            const res = await axiosCommon.post('/addFlight', flightDetails);
            // console.log(res.data);
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Flight Details Added Successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(() => {
                    navigate('/dashboard/viewFlight')
                }, 1500)
            }
        } catch (error) {
            // console.log(error)
        }
        // const flightDetails = { Airline, image, From, To, Departure_Time, Arrival_Time, Total_Time, Total_Stops, Fare }
        // const res = await axiosCommon.post('/addFlight', flightDetails);
        // // console.log(res.data);
        // if (res.data.insertedId) {
        //     Swal.fire({
        //         position: "top",
        //         icon: "success",
        //         title: "Flight Details Added Successfully!",
        //         showConfirmButton: false,
        //         timer: 1500
        //     });
        // }
    }


    return (
        <div className="w-full mx-auto bg-gray-50">
            <h1 className="pt-10 mb-10 text-center font-bold text-2xl uppercase underline text-[#00026e]">Add a Flight!</h1>
            <form onSubmit={handleSubmit} className="border p-5 rounded-xl">
                <div className="flex gap-5 justify-between">
                    <div className="flex flex-col w-1/2">
                        <label className="text-[#00026e] uppercase font-bold text-lg my-3">Flight Name</label>
                        <input className="p-3 outline-none border rounded-xl" type="text" name="flightName" id="" />
                    </div>
                    <div className="flex flex-col w-1/2">
                        <label className="text-[#00026e] uppercase font-bold text-lg my-3">Select an Airlines</label>
                        <select name="airline" className="p-3 outline-none border rounded-xl">
                            <option value="Biman Bangladesh Airlines">Biman Bangladesh Airlines</option>
                            <option value="Air Astra">Air Astra</option>
                            <option value="US Bangla">US Bangla</option>
                            <option value="NOVOAIR">NOVOAIR</option>
                        </select>
                    </div>
                </div>
                <div className="flex gap-5 justify-between">
                    <div className="flex flex-col w-1/2">
                        <label className="text-[#00026e] uppercase font-bold text-lg my-3">From</label>
                        <select name="fromm" className="p-3 outline-none border rounded-xl">
                            <option value="Dhaka">Dhaka</option>
                            <option value="Cox's Bazar">Cox's Bazar</option>
                            <option value="Jessore">Jessore</option>
                            <option value="Chittagong">Chittagong</option>
                            <option value="Saidpur">Saidpur</option>
                            <option value="Sylhet">Sylhet</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <label className="text-[#00026e] uppercase font-bold text-lg my-3">To</label>
                        <select name='too' className="p-3 outline-none border rounded-xl">
                            <option value="Dhaka">Dhaka</option>
                            <option value="Cox's Bazar">Cox's Bazar</option>
                            <option value="Jessore">Jessore</option>
                            <option value="Chittagong">Chittagong</option>
                            <option value="Saidpur">Saidpur</option>
                            <option value="Sylhet">Sylhet</option>
                        </select>
                    </div>
                </div>
                <div className="flex gap-5 justify-between">
                    <div className="flex flex-col w-1/2">
                        <label className="text-[#00026e] uppercase font-bold text-lg my-3">Departure Time</label>
                        <input className="p-3 outline-none border rounded-xl" type="text" name="departure_time" id="" />
                    </div>
                    <div className="flex flex-col w-1/2">
                        <label className="text-[#00026e] uppercase font-bold text-lg my-3">Arrival Time</label>
                        <input className="p-3 outline-none border rounded-xl" type="text" name="arrival_time" id="" />
                    </div>
                </div>
                <div className="flex gap-5 justify-between">
                    <div className="flex flex-col w-1/2">
                        <label className="text-[#00026e] uppercase font-bold text-lg my-3">Total Time</label>
                        <input className="p-3 outline-none border rounded-xl" type="text" name="total_time" id="" />
                    </div>
                    <div className="flex flex-col w-1/2">
                        <label className="text-[#00026e] uppercase font-bold text-lg my-3">Total Stops</label>
                        <input className="p-3 outline-none border rounded-xl" type="text" name="total_stops" id="" />
                    </div>
                </div>
                <div className="flex gap-5 justify-between">
                    <div className="flex flex-col w-1/2">
                        <label className="text-[#00026e] uppercase font-bold text-lg my-3">Fare</label>
                        <input className="p-3 outline-none border rounded-xl" type="text" name="total_fare" id="" />
                    </div>
                    <div className="flex flex-col w-1/2">
                        <label className="text-[#00026e] uppercase font-bold text-lg my-3">Image/Logo</label>
                        <input
                            required
                            type='file'
                            // id='image'
                            name='image'
                            // accept='image/*'
                            className="file-input file-input-bordered file-input-success w-full max-w-xs" />
                    </div>
                </div>
                <div className="flex justify-center items-center ">
                    <input className="w-1/3 bg-[#00026e] text-white font-bold p-3 rounded my-3 cursor-pointer" type="submit" value="Add Flight" />
                </div>
            </form>

        </div>
    );
};

export default AddFlight;