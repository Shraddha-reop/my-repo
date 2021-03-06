import React from 'react';
import './card.style.css'

export const Card = props => (
    <div className="card-container">
        <img alt="data" src={`https://robohash.org/${props.data.id}?set=set4&size=180x180`} />
        <h2>{props.data.name}</h2>
        <p>{props.data.email}</p>
    </div>
)

