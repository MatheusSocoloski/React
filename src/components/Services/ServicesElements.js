import styled from "styled-components";

export const ServicesContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;

  @media screen and (max-width: 820px) {
    padding: 100px 0;
    padding-bottom: 0;
  }
`;

export const ServicesRow = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
`;

export const TextWrapper = styled.div`
  max-width: 900px;
  padding: 50px 30px;

  @media screen and (max-width: 820px) {
    max-width: 600px;
    padding: 0;
    padding-top: 30px;
    padding-right: 20px;
    justify-self: center;
  }
`;

export const TopLine = styled.p`
  color: #37419b;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 54px;
  line-height: 1.1;
  font-weight: 600;
  color: #353131;

  @media screen and (max-width: 820px) {
    font-size: 42px;
  }
`;

export const Description = styled.p`
  font-weight: 300;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #455a64;

  @media screen and (max-width: 820px) {
    font-size: 16px;
  }
`;

export const CardWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: -50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  grid-gap: 16px;

  @media screen and (max-width: 1000px) {
    padding: 0 50px;
    grid-template-columns: 1fr 1fr;
    margin-top: -180px;
  }

  @media screen and (max-width: 820px) {
    margin-top: -210px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: -250px;
  }
`;

export const ServicesCard = styled.div`
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
  }

  &:hover {
    transform: scale(1.05);
    outline: 2px solid #37419b;
    transition: transform 0.3s ease-in-out;
  }
`;

export const ServicesIcon = styled.img`
  height: 190px;
  width: 190px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    height: 160px;
    width: 160px;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const ServicesP = styled.p`
  font-size: 0.9rem;
  text-align: center;
  font-weight: light;
`;
