import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./pages/login/container";
import PrivetRoutes from "routes/container/PrivetRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  let token = localStorage.getItem("token");

  useEffect(() => {
    if (token || location.pathname === "/") {
      navigate("/main");
    }
  }, [token]);

  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<PrivetRoutes />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
