import React from "react";
import BackgroundArt from "../../assets/images/background.svg";
import PhoneArt from "../../assets/images/phone.png";
import androidImg from "../../assets/images/android.svg";
import iosImg from "../../assets/images/ios.svg";

import {
  Container,
  Background,
  ContentWrapper,
  Phone,
  Content,
  H1,
  P,
  Downloads,
  AppLink,
  Android,
  IOS,
} from "./HomeElements";

const Home = () => {
  return (
    <Container role="main" aria-label="Home" id="home">
      <Background src={BackgroundArt} aria-hidden="true" />
      <ContentWrapper>
        <Content>
          <H1>
          Soluções financeiras <br /> feito para <i>você</i>.
          </H1>
          <P>
            Somos uma empresa brasileira que viabiliza o financiamento tecnológico
            soluções para empresas, funcionários, empresas e governos
            organizações. Nossa missão é fornecer sistemas inovadores para
            clientes locais e parceiros de negócios.
          </P>
          <Downloads>
            <AppLink href="https://play.google.com/store/apps/details?id=com.livpay.brasil">
              <Android
                aria-label="Click to download Android App"
                src={androidImg}
              />
            </AppLink>
            <AppLink href="https://apps.apple.com/us/app/livpay-brasil/id1589123303">
              <IOS aria-label="Click to download iOS App" src={iosImg} />
            </AppLink>
          </Downloads>
        </Content>
        <Phone
          src={PhoneArt}
          aria-label="An image of the main screen of our Mobile App open on a phone"
        />
      </ContentWrapper>
    </Container>
  );
};

export default Home;
