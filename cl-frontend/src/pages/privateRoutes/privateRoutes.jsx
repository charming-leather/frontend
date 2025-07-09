import {getToken} from "../../services/storage.service.js";
import {Navigate, Outlet} from "react-router-dom";

const privateRoutes = () => {
    const isAuthenticated = !!getToken()
    return isAuthenticated ? <Outlet /> : <Navigate to="/login"/>
}

export default privateRoutes;