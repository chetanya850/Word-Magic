import React, { useState } from "react";

function Form(props) {
  const [text, setText] = useState('');


  //Function to set value inside text
  function handleOnChange(event) {
    setText(event.target.value);
  };

  //Function for Uppercase
  const hahaboi = () => {
    let capitalletter = text.toUpperCase();
    setText(capitalletter);
    props.showalert("Converted to Uppercase", "success")
  };

  //Function for Lowercase
  const hahabou = () => {
    let smallletter = text.toLowerCase();
    setText(smallletter);
    props.showalert("Converted to Lowercase", "success")
  };

  //Function to Clear Text
  const hahaboy = () => {
    let newText = text.replace(text, "");
    setText(newText);
    props.showalert("Text Cleared", "success")
  };

  //Function to Copy Text (google se teepa h)
  function copyfunction() {
    var copyText = document.getElementById("hehecopy");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showalert("Copied to clipboard", "success")
  }

  return (
    <>
      <div className="container my-3" style={{ fontFamily: 'Roboto', }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="hehecopy"
            rows="7"
            value={text}
            name="textArea"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-danger mx-1 my-1" onClick={hahaboi}>
          Convert to Uppercase
        </button>
        <button className="btn btn-danger mx-1 my-1" onClick={hahabou}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger mx-1 my-1" onClick={hahaboy}>
          Clear Text
        </button>
        <button className="btn btn-danger mx-1 my-1" onClick={copyfunction}>
          Copy Text
        </button>
      </div>
      <div className="container my-3">



        {/* Summary Code Here */}
        <h1 style={{ fontFamily: 'Roboto', }}>Text Summary</h1>
        <p>
          {text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes to read.</p>




        {/* Preview Code Here */}
        <h1 className="my-3" style={{ fontFamily: 'Roboto', }}>Text Preview</h1>
        <p>{text.length > 0 ? text : "Enter Something to Preview it here."}</p>
      </div>
    </>
  );
};

export default Form
