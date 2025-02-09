import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";

const ProtectedRoute = () => {
    
    const { authenticated, loading } = useAuthContext();

    if (loading) return <p>Carregando...</p>;

    return authenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
