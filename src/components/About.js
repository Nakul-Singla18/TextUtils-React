import React from 'react'

export default function About(props) {

//    const [myStyle,setMyStyle] = useState( {
//     color:'black',
//     backgroundColor:'white'
// }) 
 
let myStyle={
  color:props.mode==='dark'?'white':'#0f213a',
  backgroundColor:props.mode==='dark'?'#25598c':'white',
}


  return (
    <div className="container" style={  {color:props.mode==='dark'?'white':'#0f213a',
  }}>
        <h1 className="my-3">
            About Us</h1><div className="accordion" id="accordionExample" style={myStyle} >
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <strong>Analyze Your Text</strong>
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
       It gives you a way to Analyze your text quickly and effectively  </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free To use</strong>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
It is a free character counter tool that provides instant character count &word count statistics for a given text.        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <strong>Browser Compatible</strong>
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
This word counter software works in any web browser such as Chrome ,Firefox,Internet,Safari,Opera.        </div>
      </div>
    </div>
  </div>
 
  
  </div>
  )
}
