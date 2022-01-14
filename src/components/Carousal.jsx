import React from 'react'
import "./Carousal.css"
import Carousel from "../Assets/shopbanner.jpg"

export const Carousal = () => {
    return (
        <div>
            <img style={{width:"100%"}} src={Carousel} alt="carousel"/>
        </div>
    )
}
