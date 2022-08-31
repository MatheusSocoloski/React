import styled from "styled-components";

export const ClientesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
  margin-left: 460px;
  margin-right: 460px;
`;

export const ClientesWrapper = styled.div`
  display: grid;
  grid-row-gap: 10px;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: minmax(auto, 1fr);
  z-index: 1;
  max-width: 1500px;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 870px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 100px) {
    grid-template-columns: 1fr;
    margin-bottom: -100px;
  }
`;

export const ClientesH1 = styled.h1`
  font-size: 2rem;
  color: #484848;
  margin: 100px 1;
  text-align: center;
  font-weight: 700;

  @media screen and (max-width: 650px) {
    font-size: 2.3rem;
    margin-bottom: 50px;
  }
`;
export const ClientesH2 = styled.h2`
  font-size: 4rem;
  color: #303030;
  margin: 20px 0;
  text-align: center;
  font-weight: 1000;

  @media screen and (max-width: 650px) {
    font-size: 2.3rem;
    margin-bottom: 50px;
  }
`;

export const Linha = styled.h1`
    background-color: #483D8B;
    padding: 2px;
    padding-left: 700px;
    margin: 15px;

`;
export const ClientesLogo = styled.img`
  max-height: 67%;
  justify-self: center;
  align-self: center;
  transform: scale(1, 1);
  padding: 10px;
  
  @media screen and (max-width: 650px) {
    transform: scale(0.5, 0.5);
  }
`;

export const TextClientes = styled.h3`
    color: #202020;
    font-size: 20px;
    max-height: 100%;
    text-align: center;

`;

export const SubTextClientes = styled.h1`
    color: #808080;
    font-weight: 200;
    font-size: 17px;
    max-height: 100%;
    text-align: center;
    
`;


export const CardClientes = styled.div`
  display: flex;
  flex-direction: column;
  background: none;
  align-items: center;
  border-radius: 15px;
  border: 1px solid #ddd;
  max-height: 200px;
  padding: 10px;
  transition: transform 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    padding: 20px;
    transition: all 0.2s ease-in-out;
  }
`;


