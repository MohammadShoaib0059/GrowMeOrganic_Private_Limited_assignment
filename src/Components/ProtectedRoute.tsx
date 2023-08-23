import React from "react";
import { Link } from "react-router-dom";
import { useNavigate, Outlet, Route, Routes } from "react-router-dom";

interface Props {
  isAuth: boolean;
}

const ProtectedRoute = ({ isAuth, ...routeProps }: Props) => {
  if (isAuth) {
    return (
      <>
        <Routes>
          <Route {...routeProps}></Route>
        </Routes>
        <Outlet />
      </>
    );
  }

  const navigate = useNavigate();
  navigate("/");
  return (
    null || (
      <h2>
        You need to login <Link to="/">Click here</Link>
      </h2>
    )
  );
};

export default ProtectedRoute;
