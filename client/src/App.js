import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...........</div>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
