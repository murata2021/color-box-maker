import React, { useState } from "react";
import "./Box.css"

const Box=(props)=>{

    const divStyle = {
        backgroundColor:props.color,
        height:props.height,
        width:props.width

      };
      
    return(
        <div className="col-3 mt-5">
           <div className="Box" style={divStyle}></div>
           <button className="btn btn-sm btn-danger mt-1" onClick={()=>props.delete(props.id)}>Delete me!</button>
        </div>
    )
}

export default Box;