import { useContext } from "react";
// eslint-disable-next-line no-unused-vars
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import AccessDenied from "../../pages/AccessDenied";

const PrivateRoute = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  console.log(isAuthenticated, user);

  // Trong trường hợp muốn bắt người dùng đăng nhập mới được truy cập vào trang home để mua hàng thì bật phần này
  // if (!isAuthenticated) {
  // 	return <Navigate to="/login" />;
  // }

  // Trong trường hợp muốn bắt người dùng đăng nhập và role=admin được truy cập vào trang admin thì bật phần này
  if (user?.role !== "admin") {
    return <AccessDenied />;
  }

  return <Outlet />;
};

export default PrivateRoute;
