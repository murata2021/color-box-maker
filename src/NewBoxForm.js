import React, { useState } from "react";


const NewBoxForm=({addBox})=>{

    const INITIAL_FORM_DATA={id:"",color:'',width:'',height:''}
    const [formData,setFormData]=useState(INITIAL_FORM_DATA)

    const handleChange=(e)=>{

        
        const {name,value}=e.target
        setFormData(data=>({...data,
        [name]:value}))
    }

    const handleSubmit=(e)=>{

        e.preventDefault();
        addBox({...formData})
        setFormData(INITIAL_FORM_DATA)
    }
    

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="row g-3 align-items-center d-flex justify-content-center mt-4">
                    <div className="col-auto">
                        <label htmlFor="color" className="form-label">Color</label>
                        <input  className="form-control"
                                id="color"
                                name="color"
                                type='text'
                                placeholder='color'
                                value={formData.color}
                                onChange={handleChange}
                        />
                    </div>
                    <div className="col-auto">
                        <label htmlFor="width" className="form-label">Width</label>
                        <input  className="form-control"
                                id="width"
                                name="width"
                                type='text'
                                placeholder='width'
                                value={formData.width}
                                onChange={handleChange}
                        />
                    </div>
                    <div className="col-auto">
                        <label htmlFor="height" className="form-label">Height</label>
                        <input  className="form-control"
                                id="height"
                                name="height"
                                type='text'
                                placeholder='height'
                                value={formData.height}
                                onChange={handleChange}
                        />
                    </div>
                    <button style={{width:"50%"}}className="btn btn-success mt-2" onClick={handleSubmit}>Submit</button>

                        
                </div>

            </form>
            
        </>
    )
}

export default NewBoxForm;