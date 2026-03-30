import { Navigate,Outlet } from "react-router-dom"
import Login from "./Login";

const ProtectedRoute = () => {

    const SignUpDetail = localStorage.getItem('SignUp');
    if (!SignUpDetail) {
        return <Navigate to='/Login' replace/>
    }
    // if it is Login
    return <Outlet/>
}

export default ProtectedRoute;