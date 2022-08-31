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
  FormButton2,
} from "./CantinasElements";

const Cantinas = () => {

  return (
    <>
      <Container role="main">
        <FormWrap>
          <Icon to="/">
            <IconLogo src={Logo} aria-label="Logo live in white" />
          </Icon>
          <FormContent>
            <Form>
              <FormH1>Portal Liv Cantinas</FormH1>
               <FormButton to={{ pathname: "https://cantinas.livpay.com.br/adventista/visitante"}} target="_blank" >
                Colégio Adventista
              </FormButton>
              <FormButton to={{pathname: "https://cantinas.livpay.com.br/alianca/visitante"}} target="_blank">
                 Colégio Aliança
              </FormButton>
              <FormButton to={{ pathname: "https://cantinas.livpay.com.br/integracao/visitante"}} target="_blank">
                 Colégio Integração
              </FormButton>
              <FormButton to={{ pathname: "https://cantinas.livpay.com.br/ccbeu/visitante"}} target="_blank">
               CCBEU Escola de inglês
              </FormButton>
              <FormButton to={{ pathname: "https://cantinas.livpay.com.br/r9/visitante"}} target="_blank" >
                R9 Ronaldo Academy
              </FormButton>
              <FormH1>Cantinas Tia Cilla</FormH1>
              <FormButton2 to={{ pathname: "https://cantinas.livpay.com.br/alfa-chapeco/visitante"}} target="_blank">
                Alfa Chapeco
              </FormButton2>
              <FormButton2 to={{ pathname: "https://cantinas.livpay.com.br/alfa-elite/visitante"}} target="_blank">
                Elite
              </FormButton2>
              <FormButton2 to={{ pathname: "https://cantinas.livpay.com.br/alfa-gpva/visitante"}} target="_blank">
                Alfa Guarapuava
              </FormButton2>
              <FormButton2 to={{ pathname: "https://cantinas.livpay.com.br/alfa-pg/visitante"}} target="_blank">
                Alfa Ponta Grossa - Centro
              </FormButton2>
              <FormButton2 to={{ pathname: "https://cantinas.livpay.com.br/alfa-oficinas/visitante"}} target="_blank">
                Alfa Ponta Grossa - Oficinas
              </FormButton2>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Cantinas;
