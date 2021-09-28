import React, { useState, useEffect, useMemo } from "react";
import data from "../../../../data/data";
import Detail from "../Detail/Detail.jsx";
import CaptureCode from "../CaptureCode/CaptureCode";
import { useTheme } from "@material-ui/styles";
import axios from "axios";

export default function MainPanel() {
  let [captureData, setCaptureData] = useState([]);
  let [capturedData, setCapturedData] = useState([]);
  // const ref = React.useRef < HTMLDivElement > null;
  // const cont = React.useRef(0);
  // const [qrValueUID, setQrValueUID] = useState("jeftar");
  // const [qrValueQTY, setQrValueQTY] = useState("jeftar");
  // const [qrValuePRICE, setQrValuePRICE] = useState("jeftar");

  useEffect(() => {
    fetch("/landing/shopping")
      .then((res) => res.json())
      .then((json) => {
        setCaptureData(json.captureCodeData);
      });
  }, []);

  useEffect(() => {
    fetch("/landing/shopping/code")
      .then((res) => res.json())
      .then((json) => {
        setCapturedData(json.capturedCodeData);
      });
  }, []);

  // React.useEffect(() => {
  //   fetch("/landing/shopping")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       window.setTimeout(function () {
  //         window.JsBarcode("#barcode", json.barcodeValues.SKU
  // +" "+json.barcodeValues.UID  + " "
  // +json.barcodeValues.QTY+" "
  // +json.barcodeValues.PRICE
  // );

  // }, 0);
  // setQrValueUID(json.barcodeValues.UID);
  // setQrValueQTY(json.barcodeValues.QTY);
  // setQrValuePRICE(json.barcodeValues.PRICE);
  // });
  // });

  // window.QsmShoppingCart.addCartItem({id:456, description:'phone cover', unitPrice:4.99, qty:1});
  // var cartItems = window.QsmShoppingCart.getCartItems();
  // console.log('ShoppingCartMainPanel - cartItems', cartItems);

  // const scan = () => {
  //   window.ScanditCamScan.configure(
  //     "AeZwv2MMQmmLDSv+WBWjDM9FLzaOEj7b2V1403prvpOZcGUszhMze6hpk5nlXgIHlkBx7OpNBOBMdjYdflCYsodghpGuLznxckSbCUJcCMZGHJYMazZLKXUC5WxXC+fs72J7Ve2Lw57mXudLIDZY5nlT32y0A1JfLKOJ+4BA9ET5lFOISq7fZ8m64exT5RkRcBD7C39LnHcAwuLzNCmdcePbCZhq46jtt6UvKi0/lFO3iURI8pQtLMA+BFgWZy6ECWS6z4HBTmEtPcMnoSiK8Uq64Js8aLI2Y7WS9/L1UZ92fcxPvCFOL6r+JBeGCt0nlH/SOz4z1o52JU39ggiOV0FM0UKJSr7aYent4g/ohPwrewOIt2jITJFtBmxeYHWEBD/0ZIMA8Sj3Ytx4fE23RzZ2FcQqOqaYm4X+FSY6nW+Mozq9wxwynPG8duwB9V+BWJGSfsh4hp7AUOk9pJ/SE5DSLlksN1whk0IcSJW3n0QYp7pUTNcNAvz8LwF5EygynJDuEo/XWH/yJxF798LL24KIg2W6WM28VkQEpZJQNj2Sa1TmH72i6iYH81vawKmPUmkYDh3P8ltF+KgPTFN/fibYQZvoYXo6ipnVgrq1vOd5Mun8am09vDSWIPLLjV1+tBrhNOp+8TBGjJKMDylcl70Xf7Ny5Yslbi1FHBcsdubo3o6lympkYoSR/6EEVuyR+AOnhuVMk1mCfurqaqmBc+73whziMME+8W4E4y3EDLfKTDcphsWvkQu6gvum0qrRG6PIAhuUBPWEYdlc8lQWInzIfOZyRS6o72BNR0E6Xg=="
  //   );
  //   window.ScanditCamScan.scan("scanner-container")
  //     .then((resp) => {
  //       console.log(JSON.stringify(resp));
  //     })
  //     .catch((resp) => {
  //       console.log(JSON.stringify(resp));
  //     });
  // };

  useMemo(() => {
    window.QsmShoppingCart.emptyCart();
    window.QsmShoppingCart.addCartItem({
      id: 123,
      sku: "IPHONE12MAX",
      uid: "1207126312638",
      description: "IPHONE 12 MAX",
      qty: 1,
      unitPrice: 1599.99,
    });
    window.QsmShoppingCart.addCartItem({
      id: 124,
      sku: "WLCHARGER",
      uid: "1207126312638",
      description: "QI WIRELESS CHARGER",
      qty: 1,
      unitPrice: 29.99,
    });
    window.QsmShoppingCart.addCartItem({
      id: 125,
      sku: "NTDSWITCH",
      uid: "2342374987272",
      description: "NINTENDO SWITCH LITE",
      qty: 1,
      unitPrice: 329.99,
    });
  }, []);

  const [clicked, setClicked] = useState(false);
  const [cartItemAdded, setCartItemAdded] = useState(0);

  const searchBarKeyPressed = (event) => {
    var code = event.keyCode || event.which;
    console.log("code", code);
  };

  const scan = () => {
    window.ScanditCamScan.scan("scandit-scancam-scanner-pane")
      .then((resp) => {
        console.log(JSON.stringify(resp));
        if (resp.status.code == 0) {
          const barcode = resp.barcode.value;
          var el = document.getElementById("qsm-shopping-cart-search-bar");
          el.value = barcode;

          axios
            .get(`/inventory/item/${barcode}`)
            .then((res) => {
              console.log("item", res.data);
              window.QsmShoppingCart.addCartItem(res.data);
              setCartItemAdded(Date.now());
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(JSON.stringify(err)))
      .finally(() => {
        if (window.ScanditCamScan.isContinueScanning()) scan();
      });
  };

  const handleClick = () => {
    clicked ? window.ScanditCamScan.cancelScan() : scan();
    setClicked(!clicked);
  };

  return (
    <div className="shoppingCart__main">
      <div className="shoppingCart__main--inventory">
        <div className="inventory">
          {/* Search bar */}
          <div className={"search"}>
            <div className={"searchIcon"}>
              {/* <i class="fa fa-search"></i> */}
              <i class="fas fa-bars"></i>
            </div>
            <div className="MuiInputBase-root inputRoot">
              <input
                id="qsm-shopping-cart-search-bar"
                placeholder="SKU/Transaction#"
                type="text"
                aria-label="search"
                class="MuiInputBase-input inputInput"
                value=""
                onKeyPress={searchBarKeyPressed}
              />
            </div>
          </div>

          <div className={clicked ? "Camera_cancelScan" : "camera_scan"}>
            <i
              class="fas fa-camera"
              aria-hidden="true"
              onClick={handleClick}
            ></i>
          </div>
          {/* Invetory panel */}
          <div className="shoppingCart__main_root">
            <ul component="nav" aria-label="main mailbox folders">
              {window.QsmShoppingCart.getCartItems().map((item, index) => (
                <>
                  {/* {index === 0 ? <hr class="solid" /> : null} */}
                  <div className="d-flex">
                    <li id="shoppingInventoryParent" key={item.name}>
                      <div className="shoppingInventoryFirstRow">
                        <div className="d-flex">
                          <span className="inventory__card--label pr">
                            SKU:
                          </span>
                          <div className="fw">{item.sku}</div>
                        </div>
                        <div className="d-flex">
                          <span className="inventory__card--label pr">
                            UID:
                          </span>
                          <div className="fw">{item.uid}</div>
                        </div>
                        <div className="d-flex">
                          <span className="inventory__card--label pr">
                            QTY:
                          </span>
                          <div className="fw"> {item.qty}</div>
                        </div>
                        <div className="d-flex">
                          <span className="inventory__card--label pr">
                            PRICE:
                          </span>
                          <div className="fw">{item.unitPrice}</div>
                        </div>
                      </div>
                      <div className={"shopping_InventorySecondRow"}>
                        <div>{item.description}</div>
                      </div>
                      <div className={"iconContainer"}>
                        <hr class="solid" />
                      </div>
                    </li>
                    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                  </div>
                </>
              ))}
            </ul>
          </div>

          <div className="card_scan_result">
            {captureData.map((item) => {
              return (
                <div>
                  <div>
                    {/* <div> {item.Data} </div> */}
                    <div id={item.id}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Side Bar */}
      <div className="shoppingCart__main--detail">
        {/* {console.log(value)} */}
        <Detail cameraClicked={!clicked} />
      </div>
    </div>
  );
}
