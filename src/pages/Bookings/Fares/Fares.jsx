import { useContext } from 'react';
import plane from '../../../assets/images/Plane2.png';
import { DetailsContext } from '../Bookings/Bookings';
const Fares = () => {
    const { flight, from, to, total } = useContext(DetailsContext);
    const { Flight_Name, image, Fare } = flight
    const tfare = Fare * total;
    const tax = 150;
    const subTotal = tfare + tax
    const charge = 350;
    const pay = tax + subTotal + charge;
    return (
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
                <h1 className='text-[#00026e] font-medium'>{from}-{to}</h1>
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
                <h1>Convenience Charge </h1>
                <h1>BDT 350</h1>
            </div>
            <div className='flex justify-between bg-[#9ed4eb] px-5 py-5'>
                <h1><span className='text-[#00026e] text-lg font-medium'>You Pay </span>(for {total} Travellers) </h1>
                <h1 className='text-[#00026e] text-lg font-medium'>BDT {pay}</h1>
            </div>
        </div>
    );
};

export default Fares;