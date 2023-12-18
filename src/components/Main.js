import React from "react"
import mainIcon from "../Images/map-icon.png"

export default function Main(props) {
    return (
        <section className="main-container">
            <img src={props.item.imageUrl} alt="" className="main-image" />
            <div className="main-sub-container">
                <div className="main-caption-container">
                    <img src={mainIcon} alt="" className="main-icon" />
                    <h2 className="main-location">{props.item.location}</h2>
                    <h3 className="main-gmapsurl">
                        <a href={props.item.googleMapsUrl} target="blank" >View on Google Maps</a> 
                    </h3>                                        
                </div>
                <h1 classname="main-title">{props.item.title}</h1>
                <h3 className="main-date">{props.item.startDate} - {props.item.endDate}</h3>
                <p className="main-description" >{props.item.description}</p>
            </div>
        </section>
    )
}