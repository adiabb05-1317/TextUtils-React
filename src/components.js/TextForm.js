import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("upperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upperCase!!","Success")
    }
    const handleOnChange = (event) => {
        console.log("onChange was clicked");
        setText(event.target.value)
    }
    const handleClearClick = (event) => {
        let newText = '';

        setText(newText);
        props.showAlert("Text cleared","Success")
    }



    const [text, setText] = useState("");


    return (
        <>
            <div className="container" style={{color:props.Mode==='dark'?'white':'white'}}>
                {/* to update settext state variable thejn we need to  */}
                <div className="mb-3">

                    <h1>{props.aboutText}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.Mode==='dark'?'grey':'white',color:'white'}} id="mybox" rows="3"></textarea>
                </div>

                <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>


                <button className="btn btn-primary mx-2">describe about given sentence</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick} >clear text</button>
                <div classname="container">

                </div>
            </div>
            <div className="container"  style={{color:props.Mode==='dark'?'grey':'white'}} >
                <h1>your Text summary</h1>
                <p>{text.split(" ").length} words,{text.length} characters</p>



            </div>
        </>
    )
}
