import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//re-render route <Reroute>

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // console.log(isAuthenticated);

  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/cart");
    } else {
      navigate("/account");
    }
  }, []);
};

export default ProtectedRoutes;
