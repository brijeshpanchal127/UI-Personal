import React from "react";
import Terminal from "../../reusableTerminal/Terminal";
import Page from "../../../plugins/payments/creditCrad/creditCard.html";
var htmlDoc = { __html: Page };

const CreditCard = () => {
  return (
    <div>
      <div dangerouslySetInnerHTML={htmlDoc} />
    </div>
  );
};

export default CreditCard;
