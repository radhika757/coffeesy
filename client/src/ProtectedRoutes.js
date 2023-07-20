import React from "react";
import { UseSelector, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
//re-render route <Reroute>

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);

  return (
    <>
      <Router>
        <Routes>
          <Route
            {...rest}
            render={(props) =>
              isAuthenticated ? (
                <Component {...props} />
              ) : (
                <Link to="/account" />
              )
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default ProtectedRoutes;
