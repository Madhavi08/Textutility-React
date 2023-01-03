import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('')
    const upClick=()=>{
        let newText=text.toUpperCase()
        setText(newText)
        props.setAlertwithType("converted to uppercase","success")
    }
    const lowClick=()=>{
        let newText=text.toLowerCase()
        setText(newText)
        props.setAlertwithType("converted to lowercase","success")
    }
    const sentenceClick=()=>{
        let newText=text.split('. ')
        newText=newText.map(ele=>{
            return ele.charAt(0).toUpperCase()+ele.substring(1,ele.length).toLowerCase()      
        })   
        setText(newText.join(". "))
        props.setAlertwithType("converted to sentencecase","success")
    }
    const copyClick=()=>{
        let newText=document.getElementById('mybox')
        newText.select()
        navigator.clipboard.writeText(newText.value)
        props.setAlertwithType("copied to clipboard ","success")
    }
    const clearClick=()=>{
        let newText=''
        setText(newText)
        props.setAlertwithType("cleared","success")
    }
    const changeClick=(event)=>{
        setText(event.target.value)
    }
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="mybox" rows="10" value={text} onChange={changeClick} style={{backgroundColor: props.mode ==='light'?'white':'#121212',color:props.mode ==='light'?'black':'white'}}></textarea>
            </div>
            <div className="btn btn-primary mx-1 my-1" onClick={upClick}>Convert to Uppercase</div>
            <div className="btn btn-primary mx-1 my-1" onClick={lowClick}>Convert to Lowercase</div>
            <div className="btn btn-primary mx-1 my-1" onClick={sentenceClick}>Convert to Sentencecase</div>
            <div className="btn btn-primary mx-1 my-1" onClick={copyClick}>Copy Text</div>
            <div className="btn btn-primary mx-1 my-1" onClick={clearClick}>Clear Text</div>
        </div>
            
        <div className="container my-3">
            <h1>Your Text summary:</h1>
            <p>{text.split(" ").filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters</p>
            <p>{0.08 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text in the above Textbox to preview"}</p>
        </div>
        </>
    )
}
