import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  position: relative;
  padding-left: 100px;

  @media screen and (max-width: 1300px) {
    padding-left: 0px;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-gap: 50px;
  height: 100vh;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  z-index: 1;
  height: 860px;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 1300px) {
    padding-left: 80px;
  }

  @media screen and (max-width: 820px) {
    padding-left: 70px;
    padding-top: 40px;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }

  @media screen and (max-width: 768px) {
    padding-left: 50px;
  }

  @media screen and (max-width: 600px) {
    padding-left: 30px;
  }
`;

export const Phone = styled.img`
  justify-self: center;
  align-self: center;
  max-height: 688px;
  max-width: 770px;
  transition: transform 0.3s ease-in-out;

  @media screen and (max-width: 1300px) {
    transform: scale(0.9, 0.9);
  }

  @media screen and (max-width: 820px) {
    transform: scale(0.7, 0.7);
    margin-top: -150px;
  }

  @media screen and (max-width: 480px) {
    transform: scale(0.6, 0.6);
  }
`;

export const Background = styled.img`
  position: absolute;
  width: 600px;
  height: 100%;
  top: 20%;
  left: -100px;

  @media screen and (max-width: 1300px) {
    width: 500px;
    left: -120px;
  }

  @media screen and (max-width: 820px) {
    width: 400px;
    top: 15%;
    left: -130px;
  }
  @media screen and (max-width: 600px) {
    width: 350px;
    top: 10%;
    left: -130px;
  }
`;

export const Content = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  transition: 0.3s ease-in-out;
  margin-right: 20px;
`;

export const H1 = styled.h1`
  color: #37419b;
  font-size: 60px;
  font-weight: 600;

  @media screen and (max-width: 1300px) {
    font-size: 58px;
  }

  @media screen and (max-width: 820px) {
    font-size: 54px;
  }

  @media screen and (max-width: 600px) {
    font-size: 48px;
  }
`;

export const P = styled.p`
  margin-top: 24px;
  color: #242121;
  font-size: 18px;
  font-weight: 300;
  line-height: 24px;
  padding-bottom: 42px;

  @media screen and (max-width: 1300px) {
    font-size: 16px;
  }
`;

export const Downloads = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AppLink = styled.a`
  align-self: center;
  margin: 10px;
`;

export const Android = styled.img`
  width: 175px;

  @media screen and (max-width: 820px) {
    width: 150px;
  }
`;

export const IOS = styled.img`
  width: 150px;

  @media screen and (max-width: 820px) {
    width: 135px;
  }
`;
