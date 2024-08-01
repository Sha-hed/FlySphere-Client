import Loo from '../assets/images/Loo.jpg';
const TicketCard = ({ ticket }) => {
    const { Name, userEmail, email, phone, totalTraveller, price, ticketClass, travelDate, flight } = ticket
    const { Airline, image, From, To, Departure_Time, Arrival_Time, Total_Time } = flight
    return (
        <div>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div className='flex justify-between items-center'>
                    <div className="flex justify-between space-x-4">
                        <img alt="" src={Loo} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{From}-{To}</a>
                            <span className="text-sm font-semibold">({ticketClass} Class)</span>
                        </div>
                    </div>
                    <p className="text-sm font-semibold">Date: {travelDate}</p>
                </div>
                <div>
                    <img src={image} alt="" className="object-cover w-full mb-4 h-10 sm:h-96 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{Airline}</h2>
                    <p className="text-black font-semibold">{Name}</p>
                    <div className='flex justify-between text-sm font-semibold'>
                        <div>
                            <p className="">{Departure_Time} Departs from {From}</p>
                            <p className="">{Arrival_Time} Lands in {To}</p>
                        </div>
                        <div>
                            <p className="">{totalTraveller} Traveller</p>
                            <p>Flight Time : {Total_Time}min</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TicketCard;