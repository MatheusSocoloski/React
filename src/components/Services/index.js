import React from "react";
import Icon1 from "../../assets/images/service-1.svg";
import Icon2 from "../../assets/images/service-2.svg";
import Icon3 from "../../assets/images/service-3.svg";
import {
  ServicesContainer,
  CardWrapper,
  ServicesRow,
  TextWrapper,
  TopLine,
  Heading,
  Description,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer
        role="complementary"
        aria-label="services"
        id="services"
      >
        <ServicesRow>
          <TextWrapper>
            <TopLine>PRINCIPAIS SERVIÇOS</TopLine>
            <Heading>Atendimento personalizado para garantir sua satisfação</Heading>
            <Description>
            Nós cobrimos você, não importa onde você esteja, com APIs que alcançam
            território internacional. Basta uma conexão com a internet e um telefone 
            ou computador para empregar nossa tecnologia em seu cenário de negócios.
            </Description>
          </TextWrapper>
          <CardWrapper>
            <ServicesCard>
              <ServicesIcon src={Icon1} aria-label="People shaking hands" />
              <ServicesH2>PARA EMPRESAS</ServicesH2>
              <ServicesP>
              Simplificamos vale-alimentação e vale-refeição através do 
              PAT (Alimentação do Trabalhador Programa).
              </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon2} aria-label="Person selling ice cream" />
              <ServicesH2>PARA VENDEDORES</ServicesH2>
              <ServicesP>
              Pagamentos através do nosso próprio POS, SiTEF(R), POS Web, Aplicativo ou SMS.
              </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon
                src={Icon3}
                aria-label="Person on a phone using social media"
              />
              <ServicesH2>PARA USUÁRIOS</ServicesH2>
              <ServicesP>
              Solicite um Liv Card pré-pago e ganhe descontos e benefícios em nossa rede.
              </ServicesP>
            </ServicesCard>
          </CardWrapper>
        </ServicesRow>
      </ServicesContainer>
    </>
  );
};

export default Services;
