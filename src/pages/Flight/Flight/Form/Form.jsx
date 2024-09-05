import { useState } from "react";

const Form = ({ c, setC, adults, setAdults, child, setChild, setDate, setFrom, setTo, count, setCount }) => {
    const [a, setA] = useState(false);
    // const [c, setC] = useState('Economy');
    // const [adults, setAdults] = useState(1);
    // const [children, setChildren] = useState(0);
    // const [date, setDate] = useState('');
    // const [from, setFrom] = useState('');
    // const [to, setTo] = useState('');
    let total = adults + child;
    const airports = [
        { city: 'Dhaka', name: 'Hazrat Shahjalal International Airport', shortName: 'DAC' },
        { city: "Cox's Bazar", name: "Cox's Bazar Airport", shortName: 'CXB' },
        { city: 'Jessore', name: 'Jessore Airport', shortName: 'JSR' },
        { city: 'Chittagong', name: 'Shah Amanat International Airport', shortName: 'CGP' },
        { city: "Saidpur", name: 'Saidpur Airport', shortName: 'SPD' },
        { city: 'Sylhet', name: 'Osmani International Airport', shortName: 'ZYL' },
        // Add more airports as needed
    ];
    const handleDone = () => {
        setA(false);
    }
    const handleSearch = () => {
        setCount(count+1);
        // console.log(date)
        // console.log(from)
        // console.log(to)
        // console.log(total)
    }
    return (
        <div className="max-w-7xl mx-auto my-5 md:my-10">
            <div className="flex flex-col md:flex-row justify-between gap-y-5 md:gap-y-0">
                <div className="border-2 rounded-2xl p-3 text-center w-3/4 md:w-[200px] mx-auto md:mx-0">
                    <h1 className="uppercase font-semibold mb-2">From </h1>
                    <select onChange={(e) => setFrom(e.target.value)} className="text-[#00026e] font-bold outline-none">
                        {/* {airports.map((airport, index) => (
                            <option key={index}
                                value={airport.city}>
                                {airport.city}
                            </option>
                        ))} */}
                        <option value="city">--City--</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Cox's Bazar">Cox's Bazar</option>
                        <option value="Jessore">Jessore</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Saidpur">Saidpur</option>
                        <option value="Sylhet">Sylhet</option>
                    </select>
                </div>
                <div className="border-2 rounded-2xl p-3 text-center w-3/4 md:w-[200px] mx-auto md:mx-0">
                    <h1 className="uppercase font-semibold mb-2">To </h1>
                    <select onChange={(e) => setTo(e.target.value)} className="text-[#00026e] font-bold outline-none">
                        {/* {airports.map((airport, index) => (
                            <option className="block font-bold" key={index}
                                value={airport.city}>
                                {airport.city}
                            </option>
                        ))} */}
                        <option value="city">--City--</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Cox's Bazar">Cox's Bazar</option>
                        <option value="Jessore">Jessore</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Saidpur">Saidpur</option>
                        <option value="Sylhet">Sylhet</option>
                    </select>
                </div>
                <div className="border-2 rounded-2xl p-3 text-center w-3/4 md:w-[200px] mx-auto md:mx-0">
                    <h1 className="uppercase font-semibold mb-2">Journey Date </h1>
                    <input onChange={(e) => setDate(e.target.value)} className="text-[#00026e] font-bold" type="date" name="" id="" />
                </div>
                <div className="relative border-2 rounded-2xl p-3  cursor-pointer text-center w-3/4 md:w-[200px] mx-auto md:mx-0">
                    <button onClick={() => setA(true)} className="uppercase font-semibold mb-2">Traveller, Class </button>
                    <h1 className="text-[#00026e] font-bold">{total} traveller</h1>
                    <h1>{c}</h1>
                    {
                        a && (
                            <div className="z-10 rounded-xl bg-gray-300 shadow-xl p-3 absolute  -bottom-3/4 md:top-[110px] right-0 w-full md:w-[250px]  h-[320px]">
                                <div className="flex justify-between gap-5 my-5 border p-3 rounded">
                                    <label>Adult</label>
                                    <input placeholder="1"
                                        className='text-black w-[50px]'
                                        value={adults}
                                        onChange={(e) => setAdults(Number(e.target.value))}
                                        min="1"
                                        type="number" name="adult" id="" />
                                </div>
                                <div className="flex justify-between gap-5 border p-3 rounded">
                                    <label>Child</label>
                                    <input placeholder="0"
                                        className='text-black w-[50px]'
                                        value={child}
                                        onChange={(e) => setChild(Number(e.target.value))}
                                        min="0"
                                        type="number" name="child" id="" />
                                </div>
                                <div className="divider"></div>
                                <h1>Select Class</h1>
                                <input onChange={(e) => setC(e.target.value)} type="radio" name="class" value="Economy" />
                                <label className="ml-1" htmlFor="economy">Economy</label>
                                <input onChange={(e) => setC(e.target.value)} value="Business" className="ml-3" type="radio" name="class" id="business" />
                                <label className="ml-1" htmlFor="business">Business</label>
                                <div className="text-right">
                                    <button onClick={handleDone} className="text-right my-2 btn btn-primary">Done</button>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="border p-3 flex justify-center items-center bg-[#fdcc02] rounded-xl w-3/4 md:w-[200px] mx-auto md:mx-0">
                    <button onClick={handleSearch} className="font-bold text-xl">Modify Search</button>
                </div>
            </div>
        </div >
    );
};

export default Form;
