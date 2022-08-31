import React from "react";
import repinho from "../../assets/images/clientes/repinho.jpg";
import TRE from "../../assets/images/clientes/tre.jpg";
import gaspar from "../../assets/images/clientes/gaspar.jpg";
import Unicentro from "../../assets/images/clientes/unicentro.jpg";
import Shopping from "../../assets/images/clientes/shopping.jpg";
import Xavante from "../../assets/images/clientes/xavante.jpg";
import Palmeira from "../../assets/images/clientes/palmeira.jpg";
import ivaipora from "../../assets/images/clientes/ivaipora.png";
import Surg from "../../assets/images/clientes/surg.gif";
import Revo from "../../assets/images/clientes/revo.png";
import Dalba from "../../assets/images/clientes/dalba.png";
import Madero from "../../assets/images/clientes/madero.jpg";
import {
  ClientesContainer,
  ClientesH1,
  ClientesH2,
  Linha,
  TextClientes,
  SubTextClientes,
  ClientesWrapper,
  ClientesLogo,
  CardClientes,
} from "./ClientesElements";
import { H1 } from "../Home/HomeElements";

const Clientes = () => {
  return (
    <ClientesContainer aria-label="clientes" role="complementary" id="clientes">
      <ClientesH1>Conheça alguns dos</ClientesH1>
      <ClientesH2>Nossos Clientes</ClientesH2>
      <Linha></Linha>
      <ClientesWrapper>
        <CardClientes>
            <ClientesLogo
             src={repinho}
             aria-label="Repinho"
             ></ClientesLogo>
             <TextClientes>
              Repinho
             </TextClientes>
             <SubTextClientes>
               Reflorestadora Madeiras e Compensados LTDA
             </SubTextClientes>
        </CardClientes>
        <CardClientes>
             <ClientesLogo
             src={TRE} 
             aria-label="TRE">
             </ClientesLogo> 
             <TextClientes>
             TRIBUNAL
             </TextClientes>
             <SubTextClientes>
             Tribunal Regional Eleitoral do Paraná
             </SubTextClientes>
        </CardClientes>
        <CardClientes>
             <ClientesLogo
             src={gaspar}
             aria-label="Gaspar"
             ></ClientesLogo>
              <TextClientes>
              PREF.  GASPAR
             </TextClientes>
             <SubTextClientes>
             Prefeitura Municipal de Gaspar
             </SubTextClientes>
        </CardClientes>
        <CardClientes>
            <ClientesLogo 
            src={Unicentro} 
            aria-label="Unicentro">
            </ClientesLogo>
            <TextClientes>
            UNICENTRO
             </TextClientes>
             <SubTextClientes>
             Universidade Estadual do Centro-Oeste do Paraná
             </SubTextClientes>
        </CardClientes>
        <CardClientes>
            <ClientesLogo 
            src={Shopping} 
            aria-label="Shopping Cidade dos lagos">
              </ClientesLogo>
              <TextClientes>
              SHOPPING
             </TextClientes>
             <SubTextClientes>
             Shopping Cidade dos Lagos - 60+ lojas
             </SubTextClientes>
        </CardClientes>
       <CardClientes>
            <ClientesLogo 
            src={Xavante} 
            aria-label="Indigena">
              </ClientesLogo>
              <TextClientes>
              DSEI.  XAVANTE
             </TextClientes>
             <SubTextClientes>
             Ministério da Saúde (Dsei Xavante, MT-BR)
             </SubTextClientes>
        </CardClientes>
        <CardClientes>
            <ClientesLogo 
            src={Palmeira} 
            aria-label="Palmeira">
              </ClientesLogo>
              <TextClientes>
              PREF.  PALMEIRA
             </TextClientes>
             <SubTextClientes>
             Prefeitura Municipal de Palmeira (PR-BR)
             </SubTextClientes>
        </CardClientes>
        <CardClientes>
            <ClientesLogo 
            src={ivaipora} 
            aria-label="ivaipora">
              </ClientesLogo>
              <TextClientes>
              PREF.  IVAIPORÃ
             </TextClientes>
             <SubTextClientes>
             Prefeitura Municipal de Ivaiporã (SC-BR)
             </SubTextClientes>
        </CardClientes>
        <CardClientes>
            <ClientesLogo 
            src={Surg} 
            aria-label="Surg">
              </ClientesLogo>
              <TextClientes>
              SURG
             </TextClientes>
             <SubTextClientes>
             Companhia de Serviços de Urbanização
             </SubTextClientes>
        </CardClientes>
        <CardClientes>
            <ClientesLogo 
            src={Revo} 
            aria-label="Revo">
              </ClientesLogo>
              <TextClientes>
              REVO
             </TextClientes>
             <SubTextClientes>
             Rede de Consumo e Benefício Inteligente
             </SubTextClientes>
        </CardClientes>
        <CardClientes>
            <ClientesLogo 
            src={Dalba} 
            aria-label="Dalba">
              </ClientesLogo>
              <TextClientes>
              DALBA
             </TextClientes>
             <SubTextClientes>
             Unidades Engenharia, Concreto
             </SubTextClientes>
        </CardClientes>
        <CardClientes>
            <ClientesLogo 
            src={Madero} 
            aria-label="Madero">
              </ClientesLogo>
              <TextClientes>
              MADERO
             </TextClientes>
             <SubTextClientes>
             O hambúrguer do Madero faz o mundo melhor
             </SubTextClientes>
        </CardClientes>
      </ClientesWrapper>
    </ClientesContainer>
  );
};

export default Clientes;
