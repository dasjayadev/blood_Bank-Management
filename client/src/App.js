import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./component/Route/PrivateRoute";
import PublicRoute from "./component/Route/PublicRoute";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...........</div>}>
        <ToastContainer />
        <Routes>
          {/* HomePage */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />

          {/* login page */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          {/* Register Page */}
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
