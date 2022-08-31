import styled from "styled-components";

export const PaymentContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
`;

export const PaymentImage = styled.img`
  transform: scale(0.7, 0.7);
  margin-top: 80px;
  width: 90%;
  margin-bottom: 50px;
  @media only screen and (max-width: 1160px) {
    display: none;
  }
`;

export const PaymentImageVertical = styled.img`
  display: none;

  @media only screen and (max-width: 1160px) {
    display: block;
    transform: scale(0.7, 0.7);
  }

  @media only screen and (max-width: 820px) {
    margin-top: -100px;
    margin-bottom: -200px;
  }
`;
