import React from "react";
import Index from "./Index.jsx";
import Company from "./Company.jsx";
import Product from "./Product.jsx";
import Contact from "./Contact.jsx";
// import Saleresponsive from "./SaleResponsive.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
        </>
    )
}