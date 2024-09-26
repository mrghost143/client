
import {  useSelector } from "react-redux";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? element : null;
};
export default PrivateRoute;
