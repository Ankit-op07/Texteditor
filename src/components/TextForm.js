import React ,{useState}from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleDownClick = () =>{
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleOnChange = (event) =>{
    setText(event.target.value)
  }
  const handleScreen = () =>{
    setText("")
  }
  const handleFont = () =>{
    document.getElementById("myBox").style.fontFamily = "Impact,Charcoal,sans-serif";
  }
  

 

  
  
  const [text, setText] = useState("");
    return (
      <>
      <div className="container">
        <div>
       <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} rows="5"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleScreen}>Clear screen</button>
<button className="btn btn-primary mx-2" onClick={handleFont}>change Font</button>




        </div>
        </div>
        <div className="container my-2">
          <h2>Your text summary</h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>you will be able to read this paragraph in {text.split(" ").length*0.008} minutes</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
        </>
    )
}
