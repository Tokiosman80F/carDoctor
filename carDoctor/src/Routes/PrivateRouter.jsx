import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  let location = useLocation();
  
  if (loading) return <progress className="progress w-56"></progress>;
  if (user?.email) return children;
  return (
    <Navigate to="/login" state={{ from: location }} replace>
      {children}
    </Navigate>
  );
};

export default PrivateRouter;
