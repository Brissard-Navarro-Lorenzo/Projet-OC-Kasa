import React from "react";
import { HashRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import Erreur from "../pages/Erreur";
import About from "../pages/About";
import Header from "./Header";
import Footer from "./Footer";
import Logement from "../pages/Logement";

export default function Routeur() {
    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="*" element={<Erreur />} />
            </Routes>
            <Footer />
        </HashRouter>
    );
}
