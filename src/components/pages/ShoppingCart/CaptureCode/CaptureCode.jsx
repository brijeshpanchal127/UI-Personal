import { green } from "@material-ui/core/colors";
import React from "react";

class CaptureCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Scan",
      show: true,
    };
    this.scan = this.scan.bind(this);
  }

  scan = () => {
    window.ScanditCamScan.configure(
      "AeZwv2MMQmmLDSv+WBWjDM9FLzaOEj7b2V1403prvpOZcGUszhMze6hpk5nlXgIHlkBx7OpNBOBMdjYdflCYsodghpGuLznxckSbCUJcCMZGHJYMazZLKXUC5WxXC+fs72J7Ve2Lw57mXudLIDZY5nlT32y0A1JfLKOJ+4BA9ET5lFOISq7fZ8m64exT5RkRcBD7C39LnHcAwuLzNCmdcePbCZhq46jtt6UvKi0/lFO3iURI8pQtLMA+BFgWZy6ECWS6z4HBTmEtPcMnoSiK8Uq64Js8aLI2Y7WS9/L1UZ92fcxPvCFOL6r+JBeGCt0nlH/SOz4z1o52JU39ggiOV0FM0UKJSr7aYent4g/ohPwrewOIt2jITJFtBmxeYHWEBD/0ZIMA8Sj3Ytx4fE23RzZ2FcQqOqaYm4X+FSY6nW+Mozq9wxwynPG8duwB9V+BWJGSfsh4hp7AUOk9pJ/SE5DSLlksN1whk0IcSJW3n0QYp7pUTNcNAvz8LwF5EygynJDuEo/XWH/yJxF798LL24KIg2W6WM28VkQEpZJQNj2Sa1TmH72i6iYH81vawKmPUmkYDh3P8ltF+KgPTFN/fibYQZvoYXo6ipnVgrq1vOd5Mun8am09vDSWIPLLjV1+tBrhNOp+8TBGjJKMDylcl70Xf7Ny5Yslbi1FHBcsdubo3o6lympkYoSR/6EEVuyR+AOnhuVMk1mCfurqaqmBc+73whziMME+8W4E4y3EDLfKTDcphsWvkQu6gvum0qrRG6PIAhuUBPWEYdlc8lQWInzIfOZyRS6o72BNR0E6Xg=="
    );
    window.ScanditCamScan.scan("scanner-container")
      .then((resp) => {
        this.showResult(resp);
      })
      .catch((resp) => {
        this.showResult(resp);
      });
  };

  showResult = (resp) => {
    console.log(JSON.stringify(resp));
    document.getElementById("scanner-result").innerHTML = JSON.stringify(resp);
  };

  action = (value) => {
    document.getElementById("scanner-result").innerHTML = "";
    if (value === "Scan") {
      document.getElementById("scanBtn01").value = "Cancel Scan";
      this.scan();
      this.setState({
        value: "Cancel Scan",
        show: false,
      });
    } else {
      document.getElementById("scanBtn01").value = "Scan";
      this.cancelScan();
      this.setState({
        value: "Scan",
        show: true,
      });
    }
  };
  

  cancelScan = () => {
    document.getElementById("scanner-result").style.display = "none";
    window.ScanditCamScan.cancelScan();
  };

  render() {
    const { value } = this.state;
    return (
      
      <div>
        {console.log('IN THE CAPTURE CODE COMPONENT')}
        {console.log(this.props)}
        <div className="camera_on_search">
          {this.state.show ? (            <i

              class="fa fa-camera "
              style={{ color: "green" , fontSize : "1.33rem" }}

              aria-hidden="true"
              id="scanBtn01"
              type="button"
              onClick={() => this.action(this.state.value)}
              value={this.state.value}
            ></i>
          ) : (
            <i
              className="fa fa-camera"
              aria-hidden="true"
              style={{ color: "red" , fontSize: "1.33rem" }}
              id="scanBtn01"
              type="button"
              onClick={() => this.action(this.state.value)}
              value={this.state.value}
            ></i>
          )}
        </div>
        <div id="scanner-container"></div>
        <div id="scanner-result"></div>
        {/* <button
          className="capture_btn"
          id="scanBtn01"
          type="button"
          onClick={() => this.action(this.state.value)}
          value={this.state.value}
        >
          {this.state.value}
        </button> */}
      </div>
    );
  }
}

export default CaptureCode;
