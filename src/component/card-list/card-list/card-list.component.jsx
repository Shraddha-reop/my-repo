import React from 'react';
import './card-list.style.css';
import {Card} from '../../card/card.component';

export const CardList = props => {
    console.log(props, "props");
    return <div className="card-list"> {
        props.employeeData.map(data => 
        <Card key={data.id} data = {data}/>
        )
      }</div>
}