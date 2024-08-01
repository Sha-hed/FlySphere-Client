import { Outlet, useLocation } from "react-router-dom";
import Navbar from '../shared/Navbar/Navbar'
// import Footer from '../shared/Footer/Footer'

const Main = () => {
    const location = useLocation();
    const isDash = location.pathname.includes('dashboard')
    return (
        <div>
            {
                isDash || <Navbar></Navbar>
            }
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;