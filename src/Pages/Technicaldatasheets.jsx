import React from "react";
import './Style.css';
export default function Technicaldatasheets(){
    return(
        <>
        <section>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-5 bg-light">
                 
                 <ul>
                    <li className=" d-inline-block ml-3">Home</li>
                    <li className=" d-inline-block ml-3"><i className="fa-solid fa-chevron-right"></i></li>
                    <li className=" d-inline-block ml-3">Company</li>
                 </ul>
                </div>
            </div>
        </div>
            <div className="container mt-5">
                <div className="row">
                    <h1 className="c3">Technical Data Sheets</h1>
                    <div className="c4 col-md-12">
                        <h3 className="c5">Search By</h3>
                        <form className="mt-2">
                        

                            
                            <div className="form-group">
                                <label>Search by keyword or product name:</label><br/>
                                <input type="text" className="c7 form-control" id="inputAddress2" placeholder="Search.."/><button className="btn btn-primary mb-1">Go!</button>
                            </div>
                            <h3>OR</h3>
                            <div className="form-row">
                            <div className="form-group col-md-4">
                                <label for="inputState">Product Category</label>
                                <select id="inputState" name="Category" className="form-control">
                                    <option selected >Category</option>
                                    <option>Waterproofing</option>
                                    <option>Industrial flooring</option>
                                    <option>Repair & Reastoration</option>
                                </select>
                                </div>
                                <div className="form-group col-md-4">
                                <label for="inputState">Product sub Category</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                                </div>
                                <div className="form-group col-md-4">
                                <label for="inputState">Product Name</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                                </div>
                            </div>  
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container mt-5">
                <div className="row">
                    <div className="c9 col-md-4">
                    <h3 className="c5">Filter</h3>
                        <h6 className="mt-3">Documents Displayed</h6>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1">
                               TDS
                            </label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                            <label class="form-check-label" for="defaultCheck2">
                               MSDS
                            </label>
                        </div>
                    </div>
                    <div className="c0 col-md-8">
                        <h3 className="c5">Results</h3>
                        <p>AquaArm 1K</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}