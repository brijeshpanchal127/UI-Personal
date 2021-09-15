import React, { component } from "react";
import * as ScanditSDK from "scandit-sdk";
<<<<<<< HEAD
import Button from '@material-ui/core/Button';
=======
>>>>>>> 4bb0934ab496d0942f0971344c453a9c35f43141

class CaptureCode extends React.Component {
  constructor(props) {
    super(props);
    this.scan = this.scan.bind(this);
<<<<<<< HEAD
    // this.state = {
    //   barcode: null,
    // };
  }

  scan = () => {

    /* way 1 */
    // window.ScanditSDK.configure(
    //   "AeZwv2MMQmmLDSv+WBWjDM9FLzaOEj7b2V1403prvpOZcGUszhMze6hpk5nlXgIHlkBx7OpNBOBMdjYdflCYsodghpGuLznxckSbCUJcCMZGHJYMazZLKXUC5WxXC+fs72J7Ve2Lw57mXudLIDZY5nlT32y0A1JfLKOJ+4BA9ET5lFOISq7fZ8m64exT5RkRcBD7C39LnHcAwuLzNCmdcePbCZhq46jtt6UvKi0/lFO3iURI8pQtLMA+BFgWZy6ECWS6z4HBTmEtPcMnoSiK8Uq64Js8aLI2Y7WS9/L1UZ92fcxPvCFOL6r+JBeGCt0nlH/SOz4z1o52JU39ggiOV0FM0UKJSr7aYent4g/ohPwrewOIt2jITJFtBmxeYHWEBD/0ZIMA8Sj3Ytx4fE23RzZ2FcQqOqaYm4X+FSY6nW+Mozq9wxwynPG8duwB9V+BWJGSfsh4hp7AUOk9pJ/SE5DSLlksN1whk0IcSJW3n0QYp7pUTNcNAvz8LwF5EygynJDuEo/XWH/yJxF798LL24KIg2W6WM28VkQEpZJQNj2Sa1TmH72i6iYH81vawKmPUmkYDh3P8ltF+KgPTFN/fibYQZvoYXo6ipnVgrq1vOd5Mun8am09vDSWIPLLjV1+tBrhNOp+8TBGjJKMDylcl70Xf7Ny5Yslbi1FHBcsdubo3o6lympkYoSR/6EEVuyR+AOnhuVMk1mCfurqaqmBc+73whziMME+8W4E4y3EDLfKTDcphsWvkQu6gvum0qrRG6PIAhuUBPWEYdlc8lQWInzIfOZyRS6o72BNR0E6Xg==",
    //   {
    //     engineLocation: "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/",
    //   }
    // )
    //   .then(() => {
    //     return window.ScanditSDK.BarcodePicker.create(
    //       document.getElementById("scanner-container"),
    //       {
    //         // enable some common symbologies
    //         playSoundOnScan: true,
    //         vibrateOnScan: true,
    //         scanSettings: new window.ScanditSDK.ScanSettings({
    //           enabledSymbologies: [
    //             "ean8",
    //             "ean13",
    //             "upca",
    //             "upce",
    //             "code128",
    //             "code39",
    //             "code93",
    //             "code25",
    //             "code11",
    //             "itf",
    //             "kix",
    //             "maxicode",
    //             "micropdf417",
    //             "msi-plessey",
    //             "pdf417",
    //             "qr",
    //             "rm4scc",
    //             "aztec",
    //             "codabar",
    //             "data-matrix",
    //             "dotcode",
    //             "two-digit-add-on",
    //             "five-digit-add-on",
    //             "databar",
    //             "databar-limited",
    //             "databar-expanded",
    //           ],
    //           codeDuplicateFilter: 1000,
    //         }),
    //       }
    //     );
    //   })
    //   .then((barcodePicker) => {
    //     // barcodePicker is ready here, show a message every time a barcode is scanned
    //     barcodePicker.on("scan", (scanResult) => {
    //       document.getElementById("scanner-result").innerHTML = JSON.stringify(
    //         scanResult.barcodes
    //       );
    //     });
    //   });

    /* way 2*/

    // window.ScanditCamScan.configure(
    //   "AeZwv2MMQmmLDSv+WBWjDM9FLzaOEj7b2V1403prvpOZcGUszhMze6hpk5nlXgIHlkBx7OpNBOBMdjYdflCYsodghpGuLznxckSbCUJcCMZGHJYMazZLKXUC5WxXC+fs72J7Ve2Lw57mXudLIDZY5nlT32y0A1JfLKOJ+4BA9ET5lFOISq7fZ8m64exT5RkRcBD7C39LnHcAwuLzNCmdcePbCZhq46jtt6UvKi0/lFO3iURI8pQtLMA+BFgWZy6ECWS6z4HBTmEtPcMnoSiK8Uq64Js8aLI2Y7WS9/L1UZ92fcxPvCFOL6r+JBeGCt0nlH/SOz4z1o52JU39ggiOV0FM0UKJSr7aYent4g/ohPwrewOIt2jITJFtBmxeYHWEBD/0ZIMA8Sj3Ytx4fE23RzZ2FcQqOqaYm4X+FSY6nW+Mozq9wxwynPG8duwB9V+BWJGSfsh4hp7AUOk9pJ/SE5DSLlksN1whk0IcSJW3n0QYp7pUTNcNAvz8LwF5EygynJDuEo/XWH/yJxF798LL24KIg2W6WM28VkQEpZJQNj2Sa1TmH72i6iYH81vawKmPUmkYDh3P8ltF+KgPTFN/fibYQZvoYXo6ipnVgrq1vOd5Mun8am09vDSWIPLLjV1+tBrhNOp+8TBGjJKMDylcl70Xf7Ny5Yslbi1FHBcsdubo3o6lympkYoSR/6EEVuyR+AOnhuVMk1mCfurqaqmBc+73whziMME+8W4E4y3EDLfKTDcphsWvkQu6gvum0qrRG6PIAhuUBPWEYdlc8lQWInzIfOZyRS6o72BNR0E6Xg==",
    //   {
    //     engineLocation: "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/",
    //   }
    // )
    //   .then(() => {
    //     debugger;
    //     return window.ScanditCamScan.BarcodePicker.create(
    //       document.getElementById("scanner-container"),
    //       {
    //         // enable some common symbologies
    //         playSoundOnScan: true,
    //         vibrateOnScan: true,
    //         scanSettings: new window.ScanditCamScan.ScanSettings({
    //           enabledSymbologies: [
    //             "ean8",
    //             "ean13",
    //             "upca",
    //             "upce",
    //             "code128",
    //             "code39",
    //             "code93",
    //             "code25",
    //             "code11",
    //             "itf",
    //             "kix",
    //             "maxicode",
    //             "micropdf417",
    //             "msi-plessey",
    //             "pdf417",
    //             "qr",
    //             "rm4scc",
    //             "aztec",
    //             "codabar",
    //             "data-matrix",
    //             "dotcode",
    //             "two-digit-add-on",
    //             "five-digit-add-on",
    //             "databar",
    //             "databar-limited",
    //             "databar-expanded",
    //           ],
    //           codeDuplicateFilter: 1000,
    //         }),
    //       }
    //     );
    //   })
    //   .then((barcodePicker) => {
    //     // barcodePicker is ready here, show a message every time a barcode is scanned
    //     barcodePicker.on("scan", (scanResult) => {
    //       document.getElementById("scanner-result").innerHTML = JSON.stringify(
    //         scanResult.barcodes
    //       );
    //     });
    //   });

    /** way 3 */
    window.ScanditCamScan.configure(
      "AeZwv2MMQmmLDSv+WBWjDM9FLzaOEj7b2V1403prvpOZcGUszhMze6hpk5nlXgIHlkBx7OpNBOBMdjYdflCYsodghpGuLznxckSbCUJcCMZGHJYMazZLKXUC5WxXC+fs72J7Ve2Lw57mXudLIDZY5nlT32y0A1JfLKOJ+4BA9ET5lFOISq7fZ8m64exT5RkRcBD7C39LnHcAwuLzNCmdcePbCZhq46jtt6UvKi0/lFO3iURI8pQtLMA+BFgWZy6ECWS6z4HBTmEtPcMnoSiK8Uq64Js8aLI2Y7WS9/L1UZ92fcxPvCFOL6r+JBeGCt0nlH/SOz4z1o52JU39ggiOV0FM0UKJSr7aYent4g/ohPwrewOIt2jITJFtBmxeYHWEBD/0ZIMA8Sj3Ytx4fE23RzZ2FcQqOqaYm4X+FSY6nW+Mozq9wxwynPG8duwB9V+BWJGSfsh4hp7AUOk9pJ/SE5DSLlksN1whk0IcSJW3n0QYp7pUTNcNAvz8LwF5EygynJDuEo/XWH/yJxF798LL24KIg2W6WM28VkQEpZJQNj2Sa1TmH72i6iYH81vawKmPUmkYDh3P8ltF+KgPTFN/fibYQZvoYXo6ipnVgrq1vOd5Mun8am09vDSWIPLLjV1+tBrhNOp+8TBGjJKMDylcl70Xf7Ny5Yslbi1FHBcsdubo3o6lympkYoSR/6EEVuyR+AOnhuVMk1mCfurqaqmBc+73whziMME+8W4E4y3EDLfKTDcphsWvkQu6gvum0qrRG6PIAhuUBPWEYdlc8lQWInzIfOZyRS6o72BNR0E6Xg==",
      // {
      //   engineLocation: "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/",
      // }
    )
    window.ScanditCamScan.scan("scanner-container")
   
      .then((resp) => {

        console.log(".......", JSON.stringify(resp));
        document.getElementById("scanner-result").innerHTML = JSON.stringify(
          resp
          );
        })

        .catch((resp) => {
          console.log(JSON.stringify(resp));
          document.getElementById("scanner-result").innerHTML = JSON.stringify(
            resp
          );
        });
    // };


    //   
  };

  render() {


    // const { barcode } = this.state;
=======
    this.state = {
      barcode: null,
    };
  }

  scan = () => {
    ScanditSDK.configure(
      "AeZwv2MMQmmLDSv+WBWjDM9FLzaOEj7b2V1403prvpOZcGUszhMze6hpk5nlXgIHlkBx7OpNBOBMdjYdflCYsodghpGuLznxckSbCUJcCMZGHJYMazZLKXUC5WxXC+fs72J7Ve2Lw57mXudLIDZY5nlT32y0A1JfLKOJ+4BA9ET5lFOISq7fZ8m64exT5RkRcBD7C39LnHcAwuLzNCmdcePbCZhq46jtt6UvKi0/lFO3iURI8pQtLMA+BFgWZy6ECWS6z4HBTmEtPcMnoSiK8Uq64Js8aLI2Y7WS9/L1UZ92fcxPvCFOL6r+JBeGCt0nlH/SOz4z1o52JU39ggiOV0FM0UKJSr7aYent4g/ohPwrewOIt2jITJFtBmxeYHWEBD/0ZIMA8Sj3Ytx4fE23RzZ2FcQqOqaYm4X+FSY6nW+Mozq9wxwynPG8duwB9V+BWJGSfsh4hp7AUOk9pJ/SE5DSLlksN1whk0IcSJW3n0QYp7pUTNcNAvz8LwF5EygynJDuEo/XWH/yJxF798LL24KIg2W6WM28VkQEpZJQNj2Sa1TmH72i6iYH81vawKmPUmkYDh3P8ltF+KgPTFN/fibYQZvoYXo6ipnVgrq1vOd5Mun8am09vDSWIPLLjV1+tBrhNOp+8TBGjJKMDylcl70Xf7Ny5Yslbi1FHBcsdubo3o6lympkYoSR/6EEVuyR+AOnhuVMk1mCfurqaqmBc+73whziMME+8W4E4y3EDLfKTDcphsWvkQu6gvum0qrRG6PIAhuUBPWEYdlc8lQWInzIfOZyRS6o72BNR0E6Xg==",
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
                "code25",
                "code11",
                "itf",
                "kix",
                "maxicode",
                "micropdf417",
                "msi-plessey",
                "pdf417",
                "qr",
                "rm4scc",
                "aztec",
                "codabar",
                "data-matrix",
                "dotcode",
                "two-digit-add-on",
                "five-digit-add-on",
                "databar",
                "databar-limited",
                "databar-expanded",
              ],
              codeDuplicateFilter: 1000,
            }),
          }
        );
      })
      .then((barcodePicker) => {
        // barcodePicker is ready here, show a message every time a barcode is scanned
        barcodePicker.on("scan", (scanResult) => {
          this.setState({
            barcode: scanResult.barcodes,
          });
        });
      });
  };

  render() {
    const { barcode } = this.state;
>>>>>>> 4bb0934ab496d0942f0971344c453a9c35f43141
    return (
      <div>
        <div onClick={() => this.scan()}>
          <i class="fa fa-camera" aria-hidden="true"></i>
        </div>

<<<<<<< HEAD
        {/*{barcode &&
=======
        {barcode &&
>>>>>>> 4bb0934ab496d0942f0971344c453a9c35f43141
          barcode !== null &&
          barcode.map((data) => {
            return (
              <div>
                <div>Data : {data.data} </div>
                <div>Barcode symbology type : {data.symbology} </div>
              </div>
            );
<<<<<<< HEAD
          })} */}

        {/* <div id="scandit-barcode-picker"></div> */}
        {/* <button class="capture_btn">Capture</button> */}
        <div id="scanner-container"></div>
        <div id="scanner-result"></div>
        <button className="capture_btn" onClick={() => this.scan()}>
          Capture
        </button>
      </div>
    );


  }
}
     
=======
          })}

        <div id="scandit-barcode-picker"></div>
        <button class="capture_btn">Capture</button>
      </div>
    );
  }
}

>>>>>>> 4bb0934ab496d0942f0971344c453a9c35f43141
export default CaptureCode;
