import React from "react";

export default function Contact(props) {
    return (
        <div className="contact-card">
            <img className='pic' src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
            <p><i class="fas fa-phone"></i><span>{props.phone}</span></p>
            </div>
            <div className="info-group">
            <p><i class="far fa-envelope"></i><span>{props.mail}</span></p>
            </div>
        </div>
    )
}