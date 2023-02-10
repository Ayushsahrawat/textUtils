import React, {useState} from 'react'

export default function (props) {
   const handleUpClick = () =>{
    console.log("button was clicked")
   let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to uppercase", "success");
  }
  const handleDownClick = () =>{
    console.log("button was clicked")
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to lowercase", "success");
  }
  const handleClearClick = () =>{
    console.log("button was clicked")
    //  let newText = text.toLowerCase()
    setText(" ")
    props.showAlert("text cleared", "success");
  }
  const handleCopy = () =>{
    console.log("text copied")
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("text copied", "success");
   }

  const handleOnChange = (event) =>{
    console.log("handle on change")
    setText(event.target.value)
  }
  const[text, setText] = useState('Enter text here');
  return (
    <>
      <div style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
          </div>
          <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
          <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to lowercase</button>
          <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
          <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
          
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p> {text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview here"}</p>
      </div>      
    </>
  )
}
