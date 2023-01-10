import React, {useState} from 'react';

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Onchanbg "+ text);
    let newText=text.toUpperCase()
    setText(newText);
  } 
  const handleLoClick = ()=>{
    console.log("Onchanbg "+ text);
    let newText=text.toLowerCase()
    setText(newText);
  } 
  const handleClearClick = ()=>{
    console.log("Onchanbg "+ text);
    let newText=''
    setText(newText);
  } 
  // const handleStringClick = ()=>{
  //   console.log("Onchanbg "+ text);
  //   let newText=text.trim()
  //   setText(newText);
  // } 
  const handleOnChange = (event)=>{
    console.log("on change");
    setText(event.target.value)
  }
  const [text, setText] = useState('Enter the text here');
  // setText("enter the text here");
  // setText("Enter text here")
  // <div class="mb-3">
  //   <label for="exampleFormControlInput1" class="form-label">Email address</label>
  //   <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  // </div>
  // <div class="mb-3">
  //   <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  //   <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  // </div>()

  return (
    <>
    <div>
        <h1>{props.heading}</h1>
      <div class="mb-3">
        <label for ="My Box" className="form-label">My text area</label>
        <textarea className="form-control" value={text} onChange={handleOnChange}id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear the text</button>
      {/* <button className="btn btn-primary mx-2" onClick={handleStringClick}>trim</button> */}
    </div>
    <div className="container mb-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} charecters</p>
        <p>{0.008 *text.split(" ").length} minutes takes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
