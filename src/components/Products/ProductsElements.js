import styled from "styled-components";

export const ProductsContainer = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #353131;

  @media screen and (max-width: 820px) {
    height: 1100px;
  }

  @media screen and (max-width: 768px) {
    height: 1500px;
  }
`;

export const ProductsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1150px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-bottom: 100px;
  }

  @media screen and (max-width: 330px) {
    margin-bottom: -50px;
  }
`;

export const ProductsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 350px;
  padding: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    padding: 20px;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    transform: scale(1.05);
    outline: 3px solid #7094ff;
    transition: transform 0.3s ease-in-out;
  }
`;

export const ProductsIcon = styled.img`
  height: 190px;
  width: 190px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    height: 160px;
    width: 160px;
  }
`;

export const ProductsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 62px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.9rem;
    margin-top: 100px;
  }

  @media screen and (max-width: 468px) {
    margin-top: 130px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 330px) {
    display: none;
  }
`;

export const ProductsH2 = styled.h2`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const ProductsP = styled.p`
  font-size: 0.9rem;
  text-align: center;
  font-weight: light;
`;
