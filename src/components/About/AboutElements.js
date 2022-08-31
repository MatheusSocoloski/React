import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #fff;

  @media screen and (max-width: 820px) {
    padding: 60px 0;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 600px) {
    margin-top: -50px;
    margin-bottom: -50px;
  }
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 820px) {
    grid-template-areas: "col1" "col2";
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
`;

export const Column2 = styled.div`
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
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
  color: #000;

  @media screen and (max-width: 820px) {
    font-size: 42px;
  }
`;

export const Subtitle = styled.p`
  max-width: 550px;
  font-weight: 300;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #3f3f3f;

  @media screen and (max-width: 820px) {
    font-size: 16px;
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;

  @media screen and (max-width: 820px) {
    margin-top: -100px;
  }

  @media screen and (max-width: 600px) {
    margin-top: -200px;
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
