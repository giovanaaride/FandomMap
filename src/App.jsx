//import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Login from "./components/pages/Login";
import Cadastro from "./components/pages/Cadastro";

import "./styles/globals.scss";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração das animações
      once: true, // Anima apenas uma vez
      offset: 100, // Trigger 100px antes do elemento
    });
  }, []);
  return (
    <>
      <Login />
      <Cadastro />

      {/* <BrowserRouter>
        <Route>
          <Route path="/" element={<Login />} />
        </Route>
      </BrowserRouter> */}
    </>
  );
}

export default App;
