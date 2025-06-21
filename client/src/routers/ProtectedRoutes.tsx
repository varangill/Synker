import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRoutesProps {
  auth: boolean;
}

const ProtectedRoutes = ({ auth }: ProtectedRoutesProps) => {
  return auth ? <Outlet /> : <Navigate to="/logineee" replace />;
};

export default ProtectedRoutes;
