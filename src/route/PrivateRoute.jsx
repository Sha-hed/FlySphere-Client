import { Navigate, useLocation } from "react-router-dom";
import AuthHook from "../hook/AuthHook";
const PrivateRoute = ({ children }) => {
    const location = useLocation();
    // console.log("Private Route, Location", location);
    const c = location?.state.c
    const date = location?.state.date
    const email = location?.state.email
    const fullName = location?.state.fullName
    const phone = location?.state.phone
    const total = location?.state.total
    // console.log("Private Route, State Info", c,date,email,fullName,phone,total);

    const { user, loading } = AuthHook();
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location.pathname, c, date, email, fullName, phone, total }}></Navigate>
};

export default PrivateRoute;