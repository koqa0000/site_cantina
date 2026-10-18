import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/publics/Home";
import Error from "../pages/publics/Error";
import Login from "../pages/publics/Login";
import Register from "../pages/publics/Register";
import Clicker from "../pages/publics/Clicker";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Error />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/auth/login" element={<Login />}></Route>
        <Route path="/auth/register" element={<Register />}></Route>
        <Route path="/teste" element={<Clicker />}></Route>
      </Routes>
    </BrowserRouter>
  );
}