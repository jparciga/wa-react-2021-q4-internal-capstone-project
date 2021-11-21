import React from 'react';
//import { useState, useEffect } from 'react';


const Sidebar = ({data, title, clickEvent}) => {

    return (
        <div style={{boxShadow: "10px 5px 5px black"}}>
            <h2>{title}</h2>
            <ul>
            {data.map( obj => {
               return (<li key={obj.id} onClick={() => clickEvent(obj.data.name.toLowerCase())}>{obj.data.name}</li>) 
            })}
            </ul>
        </div>
    )
}

export default Sidebar;