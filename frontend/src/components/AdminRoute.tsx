import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }: any) => {
  const userInfo = localStorage.getItem("userInfo");

  if (!userInfo) {
    return <Navigate to="/login" />;
  }

  const user = JSON.parse(userInfo);

  if (user.role !== "admin") {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default AdminRoute;