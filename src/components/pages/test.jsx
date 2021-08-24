import React, { Component } from "react";

class Test extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "/login.js";
    this.div.appendChild(script);
  }
  render() {
    return (
      <div className="App" ref={el => (this.div = el)}>
        <h1>Hello react</h1>
        {/* Script is inserted here */
        // alert("demo")
       

        }
      </div>
    );
  }
}

export default Test;