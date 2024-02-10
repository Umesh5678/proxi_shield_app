import React from "react";

import './Style.css';

export default function Index(){
    return(
        <>
       
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
        </>
    )
}