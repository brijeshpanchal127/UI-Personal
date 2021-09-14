import React, { component } from "react";
import * as ScanditSDK from "scandit-sdk";
import Button from "@material-ui/core/Button";

class CaptureCode extends React.Component {
  constructor(props) {
    super(props);
    this.scan = this.scan.bind(this);
  }

  scan = () => {
    ScanditSDK.configure(
      "Ad8Ay2EMQEX8EvzGjxmkYKc2d4cODT7sY1fZp40RT+WNcd6WiBkzmpdDbHfcaXjnEUAUGXt7ZETFW5cIrCZOF+F8qyXGQbF/DiTBwE9rqrGBcHtvpkdPh5B/1WvTYtko2Wu+JmFScA+yT6+3TXAEp6dtY+aRW+RhQE8IsRl9qoUgeaOmWyGY07Vet53XQBUjPSFqwJZ6qcmmUEf6GULVtolkRHfgefQViWkeRiB/8uDQbNyKSUrtswVkhYxXWQJYSFFWpZ5nC/KXWMtRL0bNgQNglEzvL9D8bUQSbV1PurkBYOvLclEP3+NTbSfIV9ghinpIonl/6133UIsyBG0pV2ZEgCF7YGAVm3wDxi5MmTkwSbDktnmohc9ELoiaZnE8wEIqeZd5q6VDSi6fnXVJeiYtodt6Z6MYF1UB/f9xfIhJRCzTo1/JklJVduhWJgs5ynaMzch3MwwjATpW1l4g9dFhzTMDZk4W31SLO3JIWEWQdJ38cmtmBtlnySqtczhdrhO+3vUfVa8tPbxFKDA4qYQCaPcow0r9HC0FgB8wCG9faRXdTqS4unFkkblI8a6NivnGeXWfLmqhZGTJVSB8VerMHy0dLBxW1ptIJoXVeA0PhORenMzr7n31+GxhrcFvfFRqfrGiKAFKj932qpkGz0z3717PMhqEluWN3DSGEytfQickNQJlE4W4eOpGoA//lM4ptjWZa2Mkn02DT/TXhITKqra+RsACwU3/ptviRoXesHKfXiJB3SsfPrrxkrWIupuBXjT/yUA9UhPhUxWvGVOHvDntBCntv+ZqvtQveya2+Tkp9LUuXUxVmhWiUP1QMMV7XtRTC6RWOhOvpWWz0bkGmyhIuSSSeL+QgYTyvXleCtrGlGJ4+qvYx98GV89IYbGjiDTfWXOfpixJBk1XFhTwNsVq46AHA7WELZEMVpuHD4WEu4T7J+/a8FM41JVB31WW7NWAWc9Pen8506/t+hYVHFATniePT87oqGO2VsfPa++iKMVCU4pqjvIxOjpuNPCYR7XhT2SVRQOE4/2PAUhh3IIktv6643I+uOSiiBT/FYR5EuMbjQjHl+3wQKn8A4dFyBzOmnp75JUwh3Ql7ZheoM05cOD/n5zNAVa3Lc3Hto499s2JdNvsEzIvRQpN6nPDtmJK18DCpIC3OWdkJJsPu7ln0BkZQ/iGdd09Kpaxmv8sFTU5gfwgk55iaEwn",
      {
        engineLocation: "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/",
      }
    )
      .then(() => {
        debugger;
        return ScanditSDK.BarcodePicker.create(
          document.getElementById("scandit-barcode-picker"),
          {
            // enable some common symbologies
            playSoundOnScan: true,
            vibrateOnScan: true,
            scanSettings: new ScanditSDK.ScanSettings({
              enabledSymbologies: [
                "ean8",
                "ean13",
                "upca",
                "upce",
                "code128",
                "code39",
                "code93",
                "itf",
              ],
              codeDuplicateFilter: 1000,
            }),
          }
        );
      })
      .then((barcodePicker) => {
        // barcodePicker is ready here, show a message every time a barcode is scanned
        barcodePicker.on("scan", (scanResult) => {
          alert(
            scanResult.barcodes.reduce(function (string, barcode) {
              return (
                string +
                ScanditSDK.Barcode.Symbology.toHumanizedName(
                  barcode.symbology
                ) +
                ": " +
                barcode.data +
                "\n"
              );
            }, "")
          );
        });
      });
    // window.ScanditCamScan.scan("scanner-container")
    //   .then((resp) => {
    //     console.log(JSON.stringify(resp));
    //     document.getElementById("scanner-result").innerHTML = JSON.stringify(
    //       resp
    //     );
    //   })
    //   .catch((resp) => {
    //     console.log(JSON.stringify(resp));
    //     document.getElementById("scanner-result").innerHTML = JSON.stringify(
    //       resp
    //     );
    //   });
  };

  render() {
    return (
      <div>
        <div onClick={() => this.scan()}>
          <i class="fa fa-camera" aria-hidden="true"></i>
        </div>
        <div id="scandit-barcode-picker"></div>
        <button class="capture_btn">Capture</button>
      </div>
    );
  }
}

export default CaptureCode;
