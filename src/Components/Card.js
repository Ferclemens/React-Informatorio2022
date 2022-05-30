import React from "react";


export default function Card(props) {
    return (
        <div className="card--container">
            <div className="card">
                <img className="card--imagen" src={props.imagen}/>
                <h2 className="card--tittle">{props.tittle}</h2>
                <p className="card--description">{props.description}</p>
                <button className="card--button">IR AL CURSO</button>
            </div>
        </div>
    )
}