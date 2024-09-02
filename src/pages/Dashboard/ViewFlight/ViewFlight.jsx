import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hook/useAxiosCommon";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ViewFlight = () => {

  const axiosCommon = useAxiosCommon();
  const { data: flights = [], refetch } = useQuery({
    queryKey: ['flight'],
    queryFn: async () => {
      const { data } = await axiosCommon.get('/allFlight');
      return data;
    }
  })

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Write Deleting Code
        const { data } = await axiosCommon.delete(`/deleteFlight/${id}`);
        console.log(data);
        if (data.deletedCount) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          refetch();
        }
      }
    });
  }
  return (
    <div>
      <h1 className="mt-10 text-center font-bold uppercase underline text-3xl text-[#00026e]">All Flights</h1>
      <div className="w-full overflow-x-auto my-10">
        <table className="w-full text-left border border-collapse rounded sm:border-separate border-slate-200">
          <tbody>
            <tr>
              <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 text-center">#</th>
              <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 text-center">Airline</th>
              <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 text-center">From - To</th>
              <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 text-center">Time</th>
              <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 text-center">Action</th>
            </tr>
            {
              flights.map((flight, id) => <tr key={id}>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-[#f46a07] font-semibold">{flight.Flight_Name}</td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black ">{flight.Airline}</td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{flight.From} - {flight.To}</td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{flight.Departure_Time} - {flight.Arrival_Time}</td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 flex justify-center items-center">
                  <Link to={`/dashboard/updateDetails/${flight._id}`}><FiEdit className="text-2xl text-green-600 mr-5" /></Link>
                  <button onClick={() => handleDelete(flight._id)}><MdDelete className="text-2xl text-red-600" /></button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewFlight;