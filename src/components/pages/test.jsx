import React, { Component } from "react";
import { helloWorld } from "./login.js";

class Test extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "./login.js";
    //For head
    document.getElementsByClassName("firstScript");
    document.head.appendChild(script);

    // For body
    document.body.appendChild(script);
  }
  render() {
    return (
      <div className="firstScript">
        <h1>Hello react</h1>
        {
          helloWorld()
          /* Script is inserted here */
          // alert("demo")
          // window["pass_function"]
        }
      </div>
    );
  }
}

export default Test;
