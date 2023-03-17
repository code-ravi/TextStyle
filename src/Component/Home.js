import React, { useState } from 'react'

function Home(props) {
    const [text, setText] =useState("Enter text here");
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    // convert to uppercase
    const handleUpperCase=()=>{
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to uppercase", "Sucess");
    }
    
    // convert to lowercase
    const handleLowerCase=()=>{
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase", "Sucess");
    }
    
    // remove extra spaces
    const handleExtraSpaces=()=>{
        const newText= text.replace(/\s+/g, ' ').trim();
        setText(newText);
        props.showAlert("Extra spaces has been removed", "Sucess");
    }
    
    // copy text
    const handleCopyText=()=>{
        //get the text field 
        const newText= document.getElementById('exampleFormControlTextarea1');
        // select the text field
        newText.select();
        // Copy the text inside the text field
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to clipboard", "Sucess");
        
    }
    
    // clear text
    const handleClearText=()=>{
        const newText= ''
        setText(newText);
        props.showAlert("Text deleted", "Sucess");
    }
    return (
        <div style={{color: props.mode=== 'light'? 'black':'white'}}>
        <div className='container my-4'>
            <div className="mb-3 my-3">
                <label for="exampleFormControlTextarea1" className={`form-label `}> <h2>Enter your text below:</h2>  </label>
                <textarea className={`form-control bg-${props.mode === 'light'? 'light':'dark'}`} style={{color: props.mode=== 'light'? 'black':'white'}} id="exampleFormControlTextarea1" rows="8" onChange={handleOnChange} value={text}></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-2" onClick={handleUpperCase}>UPPERCASE</button>
            <button type="button" className="btn btn-info mx-2" onClick={handleLowerCase}>lowercase</button>
            <button type="button" className="btn btn-warning mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
            <button type="button" className="btn btn-success mx-2" onClick={handleCopyText}>Copy Text</button>
            <button type="button" className="btn btn-danger mx-2" onClick={handleClearText}>Clear Text</button>
            {/* <button type="button" className="btn btn-link" onClick={handleWebSearch}>Search on Web</button> */}
        </div>
        <div className='container'>
            <h4>View Text Summary</h4>
            <p> {text.split(' ').length} Words and {text.length} Characters</p>
            <p>{text.trim(' ').split(/\s+/).length}</p>
            <p>{0.008 * text.split('').length} Minutes read</p>
        </div>
        <div className="container">
            <h4>Preview:</h4>
            <p>{text}</p>
        </div>
        </div>
    )
}

export default Home
