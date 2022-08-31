import React from "react";
import img from "../../assets/images/about.svg";
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from "./AboutElements";

const About = () => {
  return (
    <>
      <AboutContainer role="complementary" aria-label="about" id="about">
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <TextWrapper>
                <TopLine>NOSSA EMPRESA</TopLine>
                <Heading>
                Sua carteira <br /> onde quer que você vá
                </Heading>
                <Subtitle>
                  A Liv é uma plataforma eletrônica que integra diversas
                  canais para ponte de pagamentos, empréstimos e empréstimos de/para
                  empregadores/empregados. Trabalhamos com empresas dos mais
                  próspero pólo agroindustrial do mundo e do interior do
                  Brasil.
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} aria-label="app payment"></Img>
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
