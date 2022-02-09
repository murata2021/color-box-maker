import React from "react";
import {render,fireEvent} from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing",()=>{
    render(<BoxList/>);
});

it("matches snapshot",()=>{
    const {asFragment}=render(<BoxList/>);
    expect(asFragment()).toMatchSnapshot();
});


it("adds new box",()=>{
    const {debug,queryByText,getByLabelText}=render(<BoxList/>);

    const btn=queryByText("Submit")
    let colorInput=getByLabelText('Color')
    let heightInput=getByLabelText('Height')
    let widthInput=getByLabelText('Width')

    
    expect(queryByText('Delete me!')).not.toBeInTheDocument()


    fireEvent.change(colorInput,{target:{value:'green'}})
    fireEvent.change(heightInput,{target:{value:'100px'}})
    fireEvent.change(widthInput,{target:{value:'150px'}})
    fireEvent.click(btn)

    let deleteMe=queryByText('Delete me!')
    
    expect(deleteMe.previousSibling).toHaveStyle(`
    width: 150px;
    height: 100px;
    background-color: green;
  `);

    //it clears form fields after submitting the form
    expect(colorInput.value).toBe("")
    expect(heightInput.value).toBe("")
    expect(widthInput.value).toBe("")



    expect(deleteMe).toBeInTheDocument()
    
});


it("deletes a box", function() {

    const {debug,queryByText,getByLabelText}=render(<BoxList/>);
    const btn=queryByText("Submit")
    let colorInput=getByLabelText('Color')
    let heightInput=getByLabelText('Height')
    let widthInput=getByLabelText('Width')

    expect(queryByText('Delete me!')).not.toBeInTheDocument()

    fireEvent.change(colorInput,{target:{value:'green'}})
    fireEvent.change(heightInput,{target:{value:'100px'}})
    fireEvent.change(widthInput,{target:{value:'150px'}})
    fireEvent.click(btn)

    let deleteMe=queryByText('Delete me!')

    fireEvent.click(deleteMe)

    expect(queryByText('Delete me!')).not.toBeInTheDocument()

  });