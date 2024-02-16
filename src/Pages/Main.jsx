import React from "react";
import Index from "./Index.jsx";
import Company from "./Company.jsx";
import Product from "./Product.jsx";
import Contact from "./Contact.jsx";
// import Saleresponsive from "./SaleResponsive.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Event from "./Event.jsx";
import Videolib from "./Videolib.jsx";
import Waterproofing from "./Waterproofing.jsx";
import Flooring from "./Flooring.jsx";
import Repair from "./Repair.jsx";
import Admixture from "./Admixture.jsx";
import Grouts from "./Grouts.jsx";
import Building from "./Building.jsx";



export default function Main(){
    return(
        <>
        <Router>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Index></Index>}></Route>
                <Route path="/Company" element={<Company></Company>}></Route>
                <Route path="/Product" element={<Product></Product>}></Route>
                {/* <Route path="/Saleresponsive" element={<Saleresponsive></Saleresponsive>}></Route> */}
                <Route path="/Contact" element={<Contact></Contact>}></Route>
            </Routes>
            <Footer></Footer>       
        </Router>
        {/* <Event></Event> */}
        {/* <Videolib></Videolib> */}
        {/* <Waterproofing></Waterproofing> */}
        {/* <Flooring></Flooring> */}
        {/* <Repair></Repair> */}
        {/* <Admixture></Admixture> */}
        {/* <Grouts></Grouts> */}
        {/* <Building></Building> */}
        </>
    )
}