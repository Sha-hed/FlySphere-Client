import { useState } from "react";
import Form from "../Form/Form";
import GetFlight from "../GetFlight/GetFlight";
import Help from "../Help/Help";
import moment from 'moment';
const Flight = () => {
    const dat = new Date();
    const journeyTime = moment(dat).format('dddd, DD MMM,YYYY')
    const [count, setCount] = useState(0);
    const [c, setC] = useState('Economy');
    const [adults, setAdults] = useState(1);
    const [child, setChild] = useState(0);
    const [date, setDate] = useState(journeyTime);
    const [from, setFrom] = useState('aa');
    const [to, setTo] = useState('bb');
    let total = adults + child;
    // console.log('Finding Dat man ', journeyTime);
    return (
        <div className="">
            <Form
                c={c} setC={setC}
                adults={adults} setAdults={setAdults}
                child={child} setChild={setChild}
                date={date} setDate={setDate}
                from={from} setFrom={setFrom}
                to={to} setTo={setTo}
                count={count}
                setCount={setCount}
            ></Form>
            <div className="bg-[#ebf0f4]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around">
                    <GetFlight
                        c={c}
                        adults={adults}
                        child={child}
                        date={date}
                        from={from}
                        to={to}
                        total={total}
                        count={count}
                    ></GetFlight>
                    <Help></Help>
                </div>
            </div>
        </div>
    );
};

export default Flight;