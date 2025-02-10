import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";

const ProtectedRoute = () => {
    
    const { authenticated, loading } = useAuthContext();

    if (loading) return loading ? <Outlet /> : <Navigate to="/login" replace />;

    return authenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
