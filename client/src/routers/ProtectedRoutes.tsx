import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRoutesProps {
  auth: boolean;
}

const ProtectedRoutes = ({ auth }: ProtectedRoutesProps) => {
  return auth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
