import React, { Component  } from 'react';

const styles = {
  name: {
    verticalAlign: 'top',
    display: 'none',
    margin: 0,
    border: 'none',
    fontSize: "16px",
    fontFamily: "Helvetica Neue",
    padding: "16px",
    color: "#373F4A",
    backgroundColor: "transparent",
    lineHeight: "1.15em",
    placeholderColor: "#000",
    _webkitFontSmoothing: "antialiased",
    _mozOsxFontSmoothing: "grayscale",
  },
  leftCenter: {
    float: 'left',
    textAlign: 'center'
  },
  blockRight: {
    display: 'block',
    float: 'right'
  },
  center: {
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#72bb53',
    color: 'white',
    marginTop: '1.5rem',
    fontSize: '15px',
    border: 'none',
    height: '40px',
    padding: '10px 10px',
    '&:hover': {
        cursor: "pointer",
        backgroundColor: '#4c7a34'
    }
  }
}
class PaymentForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      cardBrand: "",
      nonce: undefined,
      googlePay: false,
      applePay: false,
      masterpass: false
    }
    this.requestCardNonce = this.requestCardNonce.bind(this);
  }

  requestCardNonce(){
    this.paymentForm.requestCardNonce();
  }

  componentDidMount(){
    const config = {
      applicationId: "sq0idb-hVV0B9hoqTEn9-O4z2_O1Q",
      locationId: "LEE6R8FYSX4BX",
      inputClass: "sq-input",
      autoBuild: false,
      inputStyles: [
        {
          fontSize: "16px",
          fontFamily: "Helvetica",
          padding: "16px",
          color: "#373F4A",
          backgroundColor: "transparent",
          lineHeight: "1.15em",
          placeholderColor: "#000",
          _webkitFontSmoothing: "antialiased",
          _mozOsxFontSmoothing: "grayscale"
        }
      ],
      applePay: {
        elementId: 'sq-apple-pay'
      },
      masterpass: {
        elementId: 'sq-masterpass'
      },
      // googlePay: {
      //   elementId: 'sq-google-pay'
      // },
      cardNumber: {
        elementId: "sq-card-number",
        placeholder: "Enter Card Number"
      },
      cvv: {
        elementId: "sq-cvv",
        placeholder: "CVV"
      },
      expirationDate: {
        elementId: "sq-expiration-date",
        placeholder: "MM/YY"
      },
      postalCode: {
        elementId: "sq-postal-code",
        placeholder: "Zip"
      },
      callbacks: {
        methodsSupported: (methods) => {
          if(methods.googlePay){
            this.setState({
              googlePay: methods.googlePay
            })
          }
          if(methods.applePay){
            this.setState({
              applePay: methods.applePay
            })
          }
          if(methods.masterpass){
            this.setState({
              masterpass: methods.masterpass
            })
          }
          return;
        },
        createPaymentRequest: () => {
          return {
            requestShippingAddress: false,
            requestBillingInfo: true,
            currencyCode: "USD",
            countryCode: "US",
            total: {
              label: "MERCHANT NAME",
              amount: "100",
              pending: false
            },
            lineItems: [
              {
                label: "Subtotal",
                amount: "100",
                pending: false
              }
            ]
          };
        },
        cardNonceResponseReceived: (errors, nonce, cardData) => {
          if (errors) {
            // Log errors from nonce generation to the Javascript console
            console.log("Encountered errors:");
            errors.forEach(function(error) {
              console.log("  " + error.message);
            });
            return;
          }
         this.setState({
            nonce: nonce
          })
        },
        unsupportedBrowserDetected: () => {
        },
        inputEventReceived: (inputEvent) => {
          switch (inputEvent.eventType) {
            case "focusClassAdded":
              break;
            case "focusClassRemoved":
              break;
            case "errorClassAdded":
              document.getElementById("error").innerHTML =
                "Please fix card information errors before continuing.";
              break;
            case "errorClassRemoved":
              document.getElementById("error").style.display = "none";
              break;
            case "cardBrandChanged":
              if(inputEvent.cardBrand !== "unknown"){
                this.setState({
                  cardBrand: inputEvent.cardBrand
                })
              } else {
                this.setState({
                  cardBrand: ""
                })
              }
              break;
            case "postalCodeChanged":
              break;
            default:
              break;
          }
        }
        // paymentFormLoaded: function() {
        //   document.getElementById('name').style.display = "inline-flex";
        // }
      }
    };
    this.paymentForm = new this.props.paymentForm(config);
    this.paymentForm.build();
  }

  render(){
    return (
      <div className="container">
        <div id="form-container">
          <div id="sq-ccbox">
            <p>
              <span style={styles.leftCenter}>Enter Card Info Below </span>
              <span style={styles.blockRight}>
                {this.state.cardBrand.toUpperCase()}
              </span>
            </p>
            <div id="cc-field-wrapper">
              <div id="sq-card-number"></div>
              <input type="hidden" id="card-nonce" name="nonce" />
              <div id="sq-expiration-date"></div>
              <div id="sq-cvv"></div>
            </div>
            <div id="sq-postal-code"></div>
          </div>
          <button style={styles.button}
                  onClick={this.requestCardNonce}>Pay Now</button>
        </div>
        <p style={styles.center} id="error"></p>
      </div>
    )
  }
}

export default  PaymentForm