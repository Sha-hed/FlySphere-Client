import { useLoaderData, useLocation } from "react-router-dom";
import Fares from "../../Fares/Fares";
import Payment from "./Payment";
import plane from '../../../../assets/images/Plane2.png'
import { createContext } from "react";
export const PassContext = createContext();
const PaymentAndMore = () => {

    //For Passenger Details
    const location = useLocation();
    const fullName = location?.state?.fullName;
    const email = location?.state?.email;
    const phone = location?.state?.phone;
    const total = location?.state?.total;
    const ticketClass = location?.state?.c;
    const travelDate = location?.state?.date;
    // console.log('Location er info gula load hoy? ', location);
    //For Fare Data
    const flight = useLoaderData();
    const { Flight_Name, image, Fare, From, To, } = flight
    const tfare = Fare * total;
    const tax = 150;
    const subTotal = tfare + tax
    const charge = 350;
    const pay = tax + subTotal + charge;
    // console.log("Flight Details Load HOise ?? ", flight);
    //PassFlight Details

    const passDetails = { fullName, email, phone, total, flight, ticketClass, travelDate, pay }

    return (
        <div className="bg-[#ebf0f4] min-h-screen">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
                <PassContext.Provider value={passDetails}>
                    <Payment></Payment>
                </PassContext.Provider>
                <div className="w-full md:w-[350px] bg-white pt-10 mt-5 md:mt-20 h-[493px] sticky top-0 border flex flex-col space-y-4 rounded mb-5 md:mb-0">
                    <div className='flex justify-center items-center px-5'>
                        <div className='w-5'>
                            <img src={plane} alt="" />
                        </div>
                        <h1>Flight</h1>
                    </div>
                    <div className='flex items-center justify-center gap-2 px-5'>
                        <div className='w-32'>
                            <img src={image} alt="" />
                        </div>
                        <h1 className='text-[#00026e] font-medium'>{From}-{To}</h1>
                    </div>
                    <hr className='my-4 w-[96%] mx-auto  px-5' />
                    <div className='flex justify-between'>
                        <h1 className='text-[#00026e] font-semibold px-5'>Fare Summary</h1>
                        <h1 className='text-[#f46a07] font-semibold px-5'>{Flight_Name}</h1>
                    </div>
                    <h1 className='px-5'>Adult({total}  travelers)</h1>
                    <div className='flex justify-between px-5'>
                        <h1>Base Fare</h1>
                        <h1>BDT {tfare}</h1>
                    </div>
                    <div className='flex justify-between px-5'>
                        <h1>Tax</h1>
                        <h1>BDT {tax}</h1>
                    </div>
                    <hr className='my-4 w-[96%] mx-auto px-5' />
                    <div className='flex justify-between px-5'>
                        <h1>Sub Total</h1>
                        <h1>BDT {subTotal}</h1>
                    </div>
                    <div className='flex justify-between px-5'>
                        <h1>Convenience Charge</h1>
                        <h1>BDT 350</h1>
                    </div>
                    <div className='flex justify-between bg-[#9ed4eb] px-5 py-5'>
                        <h1><span className='text-[#00026e] text-lg font-medium'>You Pay </span>(for {total} Travellers) </h1>
                        <h1 className='text-[#00026e] text-lg font-medium'>BDT {pay}</h1>
                    </div>
                </div>
                {/* <Fares flight={flight} date={date} total={total} from={from} to={to}></Fares> */}
            </div>
        </div>
    );
};

export default PaymentAndMore;