import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import LegalNotice from "./pages/LegalNotice";
import AboutUs from "./pages/AboutUs";
import MyProfile from "./pages/MyProfile";

export default function App() {
  const [Auth, setAuth] = useState(false);
  const handleAuth = () => {
    setAuth(!Auth);
  };
  return (
    <>
      <button onClick={handleAuth}>
        {Auth
          ? "Cerrar sesión - botón provisional"
          : "Iniciar sesión - botón provisional"}
      </button>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={Auth ? <Feed /> : <Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/user/:id" element={<MyProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
