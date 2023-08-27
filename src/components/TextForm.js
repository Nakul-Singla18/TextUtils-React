import React , {useState} from 'react'


export default function TextForm(props) {
    const[text,setText]  =useState('');
    // text = "new text";//Wraong way to change the state
    // settext = "new text";//correct way to change the state
    const handleUpClick = ()=>{
        // console.log("UpperCase was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");

    }
    const handleLoClick = ()=>{
        // console.log("UpperCase was Clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");

    }
    const handleClearClick = ()=>{
        // console.log("UpperCase was Clicked");
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared","success")

    }
    const handleExtraSpaces = ()=>{
        // console.log("UpperCase was Clicked");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces","success")

    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
  return (
    <>
    <div className='conatiner' style={{color:props.mode==='dark'?'white':'#0f213a'}}>
       <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor:props.mode==='dark'?'#224c89':'white',color:props.mode==='dark'?'white':'#0f213a'}} id="myBox" rows="8"></textarea>
</div>
<button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled ={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button disabled ={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear text</button>
<button disabled ={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#0f213a'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words {text.length} Characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview" }</p>
    </div>
    </>
  )
}
