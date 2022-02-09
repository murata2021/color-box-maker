import React, { useState } from "react";
import Box from './Box'
import NewBoxForm from "./NewBoxForm";
import uuid from 'react-uuid';



const BoxList=()=>{

    const INITIAL_BOX_STATE=[]
    const [boxes,setBoxes]=useState(INITIAL_BOX_STATE)

    const addBox=(newBox)=>{
        newBox.id=uuid()
        setBoxes(boxes=>[...boxes,{...newBox,id:uuid()}])
    }

    const deleteBox=(id)=>{

        let copyBox=[...boxes.filter(box=>box.id!==id)]
        setBoxes(boxes=>copyBox)
    }

    return(
        <div className="container mt-3 ">
            <h2 className="d-flex justify-content-center">Let's make some color box 🥳🥳🥳</h2>
            <NewBoxForm addBox={addBox}/>
            <div className='row row-cols-2'>
                {boxes.map(box=><Box id={box.id} key={box.id} color={box.color} height={box.height} width={box.width} delete={deleteBox}/>)}
            </div>
        </div>
    )
}

export default BoxList;