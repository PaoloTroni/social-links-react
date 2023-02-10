import "./App.css";
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

let a = 2; //CAMBIAR EL VALOR DE LA VARIABLE A 1 SI QUIERES VER LA RUTA "/" COMO FEED. PARA VERLA COMO LOGIN, PONER UN VALOR DIFERENTE DE 1
let Auth;
a === 1 ? (Auth = true) : (Auth = false);

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={Auth ? <Feed /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/user/:id" element={<MyProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
