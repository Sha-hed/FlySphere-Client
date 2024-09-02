import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hook/useAxiosCommon";


const BookedFlight = () => {
  const axiosCommon = useAxiosCommon();
  const { data: bookedFlight = [] } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const { data } = await axiosCommon.get('/payment')
      return data;
    }
  })
  return (
    <div>
      <h1 className="pt-10 mb-10 text-center font-bold text-2xl uppercase underline text-[#00026e]">Booked Flights</h1>
      <div className="w-full overflow-x-auto my-10">
        <table className="w-full text-left border border-collapse rounded sm:border-separate border-slate-200">
          <tbody>
            <tr>
              {/* <th scope="col" className="h-12 px-3 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 text-center">#</th> */}
              <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 text-center">FlightName</th>
              <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 text-center">Traveller</th>
              <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 text-center">Class</th>
              <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 text-center">TravelDate</th>
              <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 text-center">Name</th>
              <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100 text-center w-[50px]">Email</th>
            </tr>
            {
              bookedFlight.map((flight, id) => <tr key={id}>
                {/* <td className="h-12 px-3 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{id + 1}</td> */}
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black">{flight?.flight?.Flight_Name}</td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black">{flight?.totalTraveller}</td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black">{flight?.ticketClass}</td>       
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black">{flight?.travelDate}</td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black">{flight?.Name}</td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-black w-[50px]">{flight?.email}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookedFlight;