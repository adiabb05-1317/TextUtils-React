import React, {useState}from 'react'

export default function About() {
  const[myStyle,setmyStyle]=useState({
    color:'white',
    backgroundColor:'black'
  })
  const[btntext,setBtnText]=useState("Enable Dark Mode");
   const handleDarkMode = ()=>{
    if(myStyle.color!='white')
    {
      setmyStyle({
        color:'white',
        backgroundColor: 'black',
        border: '1px solid white'
      })
      setBtnText("Enable light mode")
    }
    else{
      setmyStyle({
        color:'black',
        backgroundColor:'white'
      })
      setBtnText("Enable Dark mode")
    }
   }
    return (
    <>
      <div className="container" style={myStyle}>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">

              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
               
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
            
              </div>
            </div>
          </div>
        </div>
        <diV className="container">
          <button className="btn btn-primary mx-2" onClick={handleDarkMode} >{btntext}</button>
        </diV>
      </div>
    </>
  )
}
