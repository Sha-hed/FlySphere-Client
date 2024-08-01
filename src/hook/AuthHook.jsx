import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const AuthHook = () => {
    const Auth = useContext(AuthContext);
    return Auth;
};

export default AuthHook;