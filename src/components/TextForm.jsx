import React, { useState } from "react";
import "../App.css";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handelOnChange = (event) => {
    setText(event.target.value);
  };

  const handelLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handelUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handelClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };

  const handelCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("copied to clipboard!", "success");
  };

  const handelExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed!", "success");
  };
  return (
    <React.Fragment>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handelOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handelUpClick}
          type="button"
        >
          Convert to uppercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handelLoClick}
          type="button"
        >
          Convert to lowercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handelClearClick}
          type="button"
        >
          Clear text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handelCopyClick}
          type="button"
        >
          Copy text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handelExtraSpace}
          type="button"
        >
          Remove extra space
        </button>

        <div
          className="container my-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h2>Your text summary</h2>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} charecters
          </p>
          <p>
            {0.008 *
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            Minuts read
          </p>
          <p>{text.length > 0 ? text : "Nothing to priview!"} Preview</p>
        </div>
      </div>
    </React.Fragment>
  );
}
