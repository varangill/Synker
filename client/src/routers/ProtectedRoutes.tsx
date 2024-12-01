import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRoutesProps {
  auth: boolean;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ auth }) => {
  return auth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
