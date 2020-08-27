import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

export default function CarouselComponent() {
    return(
        <div className = "carousel-wrapper">
        <Carousel>
            <div>
                <img src = "../amsterdam.jpg" title = "Amsterdam"/>
                </div>
                <div>
                    <img src = "../australia.jpg" title = "Australia"/>
                    </div>
                    <div>
                        <img src = "../london.jpg" title = "London"/>
                        </div>
                        <div>
                            <img src = "../prague.jpg" title = "Prague"/>
                            </div>
                            <div>
                                <img src = "../spain.jpg" title = "Spain"/>
                                </div>
                                </Carousel>
                                </div>

    );
}