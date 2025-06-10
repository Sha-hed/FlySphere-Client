import { Outlet, useLocation } from "react-router-dom";
import Navbar from '../shared/Navbar/Navbar'
import Footer from "../shared/Footer/Footer";
// import Footer from '../shared/Footer/Footer'

const Main = () => {
    const location = useLocation();
    // console.log(location)
    const isPrint = location.pathname.includes('downloadPDF')
    // console.log(isPrint)
    const isDash = location.pathname.includes('dashboard')
    // console.log('Dash Kina ',isDash)
    const confused = (isPrint || isDash) || false;
    return (
        <div>
            {
                confused || <Navbar></Navbar>
            }
            {/* {
                isDash  || <Navbar></Navbar>
            } */}
            <Outlet></Outlet>
            {
                confused || <Footer />
            }
        </div>
    );
};

export default Main;