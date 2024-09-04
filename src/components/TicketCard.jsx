import { Link } from 'react-router-dom';
import Loo from '../assets/images/Loo.jpg';
import { usePDF, Document, Page } from '@react-pdf/renderer';
const TicketCard = ({ ticket }) => {
    // const [instance, updateInstance] = usePDF({ document: <TicketPDF /> });
    const { _id: id, Name, userEmail, email, phone, totalTraveller, price, ticketClass, travelDate, flight } = ticket
    const { Flight_Name, Airline, image, From, To, Departure_Time, Arrival_Time, Total_Time } = flight
    return (
        <div>
            
            <div className="card glass w-96">
                <figure>
                    <img
                        style={{ border: '2px'}}
                        src={image}
                        alt="car!" />
                </figure>
                <hr />
                <div className="card-body">
                    <h2 className="card-title">{Airline} | {Flight_Name}</h2>
                    <p className="text-black font-semibold">{Name}</p>
                    <div className='text-sm font-semibold'>
                            <p className="">{Departure_Time} Departs from {From}</p>
                            <p className="">{Arrival_Time} Lands in {To}</p>
                        
                            <p className="">{totalTraveller} Traveller</p>
                            <p>Flight Time : {Total_Time}min</p>
                    </div>
                    <div className="card-actions justify-end mt-5">
                    <Link to={`/downloadPDF/${id}`} className='rounded-xl bg-blue-950 text-white px-5 py-2 hover:underline'>DownLoad Ticket</Link>
                        {/* <button className="btn btn-primary">Learn now!</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;

