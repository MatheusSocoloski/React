import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(108deg, #1677f1 0%, #0252b6 100%);
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const IconLogo = styled.img`
  width: 70px;
  margin: 0 20px;
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  margin-bottom: 50px;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #fff;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 54px 36px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 10px;
  margin-top: 15px;
  color: #010101;
  font-size: 25px;
  font-weight: 400;
  text-align: center;
`;

export const FormButton = styled(Link)`
  background: #ffae00;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  color: #fff;
  border: solid 1px #010101;
  text-decoration: none;
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #fff;
    color: #37419b;
    transition: 0.2s ease-in-out;
  }
`;
export const FormButton2 = styled(Link)`
  background: #9a00cc;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  color: #fff;
  border: solid 1px #010101;
  text-decoration: none;
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #fff;
    color: #37419b;
    transition: 0.2s ease-in-out;
  }
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
