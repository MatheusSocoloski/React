import React from "react";
import ImageVertical from "../../assets/images/payment-vertical.png";

import {
  PaymentContainer,
  PaymentImage,
  PaymentImageVertical,
} from "./PaymentElements";

const Payment = () => {
  return (
    <PaymentContainer
      role="complementary"
      aria-label="Payment methods"
      id="payments"
    >
      <PaymentImage src={ImageVertical} aria-label="Payment methods"></PaymentImage>
      <PaymentImageVertical
        src={ImageVertical}
        aria-label="Payment methods"
      ></PaymentImageVertical>
    </PaymentContainer>
  );
};

export default Payment;
