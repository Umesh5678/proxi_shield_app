import React, { useState } from "react";
import { Data } from "./menu";
import './Style.css';

const Index=()=>{
    const[items, setItems]=useState(Data);
    const filterItem = (categItem) => {
        const UpdatedItems = Data.filter((curElem) => {
                return curElem.category === categItem;
        });
        setItems(UpdatedItems);
    }
    return(
        <>
       <section>
        <div className="container-fluid ">
            <div className="row">
                <div className="col-12 p-0">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img class="d-block w-100" src="https://www.baumerk.com/storage/app/media/blog/crystalline-waterproofing/workers-applying-concrete.jpg" height="550" alt="First slide"/>
                            </div>
                            <div class="carousel-item">
                            <img class="d-block w-100" src="https://akbarandcompany.com/images/asian-paints.jpg" height="550" alt="Second slide"/>
                            </div>
                            <div class="carousel-item">
                            <img class="d-block w-100" src="https://damsure.in/frontend/img/general-slider3m.png" height="550" alt="Third slide"/>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section>
            <div className="k2 container">
                <div className="row">
                    
                        <div className=" col-md-6">
                            <button className="btn btn-secondary ml-4">ARCHITECTS</button>
                            <button className="btn btn-secondary ml-4">CONTRACTORS</button>
                            <button className="btn btn-secondary ml-4">HOME OWNERS</button>
                        </div>
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-3   mt-5">
                                <img src="https://mykarment.com/wp-content/uploads/2015/08/tab-1.png" className="img-fluid"/>
                        </div>
                        <div className="col-md-9  mt-5">
                            <p>At MYK Arment we <b>Set Standards of Excellence & Trust in the Global Construction Chemical Industry.</b> The cornerstone of our business is formulated around the belief that the industry expects much more than just the product / service offered. Hence, our products & services are engineered to:</p>
                            <ul>
                                <li>Provide Improved material performance</li>
                                <li>Demonstrate greater reliability & durability</li>
                                <li>Be cost-effective & optimal</li>
                                <li>Contribute to the environmental sustainability efforts.</li>
                            </ul>
                        </div>
                        <div className="col-md-12">
                            <p>We constantly strive to raise the bar on the above parameters through innovation on our product & service offerings by working closely with our customers to identify what they need most—whether it’s innovative product development, greater efficiency or application expertise. Together with the customer, we want to make sure that every interaction is a step in our journey towards excellence.</p>
                            <p>Our service is backed by our strong relationships with architects, contractors, specifiers, building materials suppliers and concrete producers who offer high quality products and industry leading technical support.</p>
                            <p>Our Product range includes admixtures, grouts & anchors, repair mortars, bonding agents, adhesives, flooring coatings, curing and sealing compounds, dry shake hardeners, joint fillers, sealants, densifiers, waterproofing, repair and other products.</p>
                        </div>
                    <div className="k4 rounded-circle col-md-2 mt-4">
                        <p><b>Leadership</b> with Integrity</p>
                    </div>
                    <div className="k5 rounded-circle col-md-2 mt-4 ml-3">
                        <p>Innovative<b><br/>Engineering</b> </p>
                    </div>
                    <div className="k4 rounded-circle ml-3 col-md-2 mt-4">
                        <p><b>Focus</b>On Our Clients</p>
                    </div>
                    <div className="k5 rounded-circle ml-3 col-md-2 mt-4">
                        <p>High Quality <b>Professionals</b></p>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-light">
            <div className="container">
                <p className="k6"><b>INDUSTRIAL </b>MARKET</p>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="k7 " id="primary">
                            <li className="k8 d-inline-block ml-2" onClick={() =>setItems(Data)}>ALL</li>
                            <li className="k8 d-inline-block ml-4" onClick={()=>filterItem('Waterproofing-System')}>Waterproofing-System</li>
                            <li className="k8 d-inline-block ml-4" onClick={()=>filterItem('Flooring-Coatings')}>Flooring-Coatings</li>
                            <li className="k8 d-inline-block ml-4" onClick={()=>filterItem('Repair-And-Restoration')}>Repair-And-Restoration</li>
                            <li className="k8 d-inline-block ml-4" onClick={()=>filterItem('Grouts-Anchors')}>Grouts-Anchors</li>
                            <li className="k8 d-inline-block ml-4" onClick={()=>filterItem('Buildings-Joint-Sealants')}>Buildings-Joint-Sealants</li>
                            <li className="k8 d-inline-block ml-4" onClick={()=>filterItem('Concrete-Admixture')}>Concrete-Admixture</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        items.map((elem)=>{
                            const {id, image, Name} =elem;
                            return(
                                <>
                                    <div className=" col-md-4 mt-5 ">
                                        <div className="wrapper">
                                            <div className="images">
                                                <img src={image} alt="mypic" className="im1" width="100%"/>
                                                <div className="content">
                                                    <a href="#" className="k0"><i class="fa-solid fa-link"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="k9">{Name}</p>
                                    </div>
                                </>
                            )
                        })
                    }

                    
                </div>
            </div>
        </section>
        <section>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        
                        <div className="l1 ml-5 rounded-circle ">
                           <img src="https://mykarment.com/wp-content/uploads/2015/08/icon1.png" className="l2"/>
                        </div>
                        <p className="l3 ml-5"><b>Trust</b></p>
                        <p>We earn credibility by encouraging open communication and taking responsibility for our actions. If we are honest with our customers, they will trust us and be honest with us.</p>

                    </div>
                    <div className="col-md-3">
                        
                        <div className="l0 ml-5 rounded-circle ">
                           <img src="https://mykarment.com/wp-content/uploads/2015/08/icon2.png" className="l2" />
                        </div>
                        <p className="l3"><b>Integrity & Ethics</b></p>
                        <p>We strive to do the right thing by conducting ourselves with integrity at all times. We deliver on our promises, remain fair and ethical in every situation and treat our colleagues and customers with respect.</p>
                    </div>
                    <div className="col-md-3">
                        
                        <div className="l1 ml-5 rounded-circle ">
                            <img src="https://mykarment.com/wp-content/uploads/2015/08/icon3.png" className="l2" />
                        </div>
                        <p className="l3"><b>Innovation</b></p>
                        <p>We consistently find new ways to solve problems, share knowledge and encourage others to challenge our thinking.</p>
                    </div>
                    <div className="col-md-3">
                        
                        <div className="l0 ml-5 rounded-circle ">
                            <img src="https://mykarment.com/wp-content/uploads/2015/08/icon4.png" className="l2" />
                        </div>
                        <p className="l3"><b>Passion & Commitment</b></p>
                        <p>We show pride in our brand and our company and inspires others to do the same. We are always willing to go the extra mile for customers and employees.</p>
                    </div>
                    
                </div>
                <center><button className="btn btn-primary">More about </button></center>
            </div>
        </section>
        <section className="bg-light">
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-md-6 mt-5">
                            <h4 className="l4 ">CASE STUDIES</h4>
                            <h1 className="l4">Cement Plant</h1>
                            <p className="l5">The client constructed Cement plant at Boyireddi palli in Andhra Pradesh. In South India they are the Pioneer’s in cement manufacturing industry In this plant they have 5 cement silo, four bins are for cement storage and one for raw mill…<a href="#">Read More</a></p>
                            <br/><br/>
                            <h5 className="l4">MORE CASE RESULTS &nbsp;&nbsp;&nbsp;  ___________________________</h5>

                            <span className="l6"><i class="fa-solid fa-angles-right"></i><a href="#">Multi Speciality Hospital</a></span><br/>
                            <span className="l6"><i class="fa-solid fa-angles-right"></i><a href="#">Residency Peoject</a></span><br/>
                            <span className="l6"><i class="fa-solid fa-angles-right"></i><a href="#">Repair Of Railway Bridge</a><i class="fa-solid fa-angles-right"></i></span>

                        </div>
                        <div className="col-md-6">
                            <img src="https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/2015/09/07/pppppppic.jpg?itok=L0WKrqYu" width="100%"/>
                        </div>
                    </div>
                </div>
        </section>
        </>
    )
}
export default Index;