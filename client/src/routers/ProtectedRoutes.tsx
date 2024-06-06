import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRoutesProps {
  auth: boolean;
}

const ProtectedRoutes = ({ auth }: ProtectedRoutesProps) => {
  return auth ? <Outlet /> : <Navigate to="/logine" replace />;
};

export default ProtectedRoutes;
