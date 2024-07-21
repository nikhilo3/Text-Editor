import React, {useState} from 'react'


export default function Textutil(props) {
    const[text , settext] = useState('');

    let handleonchange = (event)=>{
        settext(event.target.value);
    }


    let handleupclick = ()=>{
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showalert("text uppercase crated","success");
    }

    let handleloclick = ()=>{
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showalert("text lower crated","success");
    }

    let handleclear = ()=>{
        let newtext = "";
        settext(newtext);
        props.showalert("text was clear","warning");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

      let copy = () => {
        // let text = document.getElementById("mybox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showalert("text copy successfull","success");
      }
      
  return (
    <>
        
        <div className="container my-3" style={{color: props.pmode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <textarea className='form-control my-8' rows="8" id="mybox" value={text} onChange={handleonchange}></textarea>
            <button disabled={text.length===0} className='btn btn-primary my-3 mx-1' onClick={handleupclick}>convert to uppercase</button>
            <button disabled={text.length===0} className='btn btn-primary my-3 mx-1' onClick={handleloclick}>convert to lowercase</button>
            <button disabled={text.length===0} className='btn btn-primary my-3 mx-1' onClick={handleclear}>Clear</button>
            <button disabled={text.length===0} className='btn btn-primary my-3 mx-1' onClick={speak}>speak</button>
            <button disabled={text.length===0} className='btn btn-primary my-3 mx-1' onClick={copy}>copy</button>
            <div>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}word and {text.length} character</p>
            </div>
            <div>
                <h2>preview</h2>
                <p>{text.length>0?text:"NOTHING TO PREVIEW"}</p>
            </div>
        </div>
        
    </>
  )
}