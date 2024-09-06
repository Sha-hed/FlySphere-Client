import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import useAxiosCommon from '../../../hook/useAxiosCommon.jsx'
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import Money from '../../../assets/images/doller.svg'
import Users from '../../../assets/images/users.png'
import Flight from '../../../assets/images/totalFlight.png'
import Booking from '../../../assets/images/booking (2).png'
const datam = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Chart = () => {
    const [use, setUse] = useState();
    const [book, setBook] = useState();
    const [earn, setEarn] = useState();
    const [flight, setFlight] = useState();
    const axiosCommon = useAxiosCommon();
    const { data: airlines = [] } = useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/Airline')
            // console.log(data);
            return data;
        }
    })

    const getUser = async () => {
        const { data } = await axiosCommon.get('/users')
        setUse(data.length)
        // console.log('users ', data.length)
        // return data;
    }
    const bookedFlight = async () => {
        const { data } = await axiosCommon.get('/payment')
        setBook(data.length)
        // console.log('booked ', data.length)
        // return data;
    }
    const totalPrice = async () => {
        const { data } = await axiosCommon.get('/totalEarned')
        setEarn(data[0].totalEarned)

        // console.log('Earned ', data[0].totalEarned)
        // return data;
    }

    const totalFlight = async () => {
        const { data } = await axiosCommon.get('/allFlight')
        setFlight(data.length)
    }

    useEffect(() => {
        getUser();
        bookedFlight();
        totalPrice();
        totalFlight()
    }, [])

    console.log("Summary : ", use, book, earn, flight)

    return (
        <div className='bg-white min-h-screen'>
            <div className='flex flex-col md:flex-row gap-3 mt-5 md:mt-20 ml-5'>
                <div className="w-3/4 md:w-[200px] mx-auto h-[100px] rounded-xl bg-pink-200 flex flex-col justify-center items-center">
                    <img src={Money} alt="" className='w-10 text-center' />
                    <h1 className='font-bold'>{earn}</h1>
                    <h1 className='font-bold'>Total Earned</h1>
                </div>
                <div className="w-3/4 md:w-[200px] mx-auto h-[100px] rounded-xl bg-pink-200 flex flex-col justify-center items-center">
                    <img src={Users} alt="" className='w-10' />
                    <h1 className='font-bold'>{use}</h1>
                    <h1 className='font-bold'>Total User</h1>
                </div>
                <div className="w-3/4 md:w-[200px] mx-auto h-[100px] rounded-xl bg-pink-200 flex flex-col justify-center items-center">
                    <img src={Booking} alt="" className='w-10' />
                    <h1 className='font-bold'>{book}</h1>
                    <h1 className='font-bold'>Total Booked Flight</h1>
                </div>
                <div className="w-3/4 md:w-[200px] mx-auto h-[100px] rounded-xl bg-pink-200 flex flex-col justify-center items-center">
                    <img src={Flight} alt="" className='w-10' />
                    <h1 className='font-bold'>{flight}</h1>
                    <h1 className='font-bold'>Total Flight</h1>
                </div>
            </div>
            <h1 className='mt-10 ml-10 font-semibold underline text-lg'>Airline Preference by Users</h1>
            <div className='mt-5 ml-1 md:ml-10 overflow-x-auto'>
                <BarChart
                    width={800}
                    height={400}
                    data={airlines}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="airline" />
                    <YAxis />
                    <Bar dataKey="count" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {airlines?.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                    <Legend></Legend>
                </BarChart>
            </div>
        </div>
    );
};

export default Chart;