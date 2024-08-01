import { Navigate, useLocation } from "react-router-dom";
import AuthHook from "../hook/AuthHook";
const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = AuthHook();
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location.pathname }}></Navigate>
};

export default PrivateRoute;