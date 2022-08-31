import React, { useRef } from "react";
import Logo from "../../assets/images/logo-white.svg";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormWrap,
  Icon,
  IconLogo,

} from "./LoginElements";

const Login = () => {

  return (
    <>
      <Container role="main">
        <FormWrap>
          <Icon to="/">
            <IconLogo src={Logo} aria-label="Logo live in white" />
          </Icon>
          <FormContent>
            <Form>
              <FormH1>Selecione uma opção</FormH1>
               <FormButton to={{ pathname: "https://associados.livpay.com.br/login"}} target="_blank" >
                Portal Liv Associoados
              </FormButton>
              <FormButton to="/cantinas" target="_blank">
                Portal Liv Cantinas
              </FormButton>
              <FormButton to={{ pathname: "https://merchant.livpay.com.br/merchant/"}} target="_blank">
                Portal Liv Vounchers
              </FormButton>
              <FormButton to={{ pathname: "https://associados.livpay.com.br/login"}} target="_blank">
                Extrato e Saldo
              </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Login;
