// Composant principal de l'application qui gère les routes et la structure de la page.


import "./styles/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";
import User from "./pages/User";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Header />
      <Routes> {/* ensemble de route */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/*" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
