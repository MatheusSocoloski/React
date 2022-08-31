import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaWhatsapp, FaYoutube, FaLinkedin } from "react-icons/fa";
import Logo from "../../assets/images/logo-white.svg";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterWebLink,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  IconLogo,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer role="contentinfo">
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Companhia</FooterLinkTitle>
              <FooterLink to="/">Nossa história</FooterLink>
              <FooterLink to="/">Benefícios</FooterLink>
              <FooterLink to="/">Equipe</FooterLink>
              <FooterLink to="/">Carreiras</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>AJUDA</FooterLinkTitle>
              <FooterLink to="/">FAQs</FooterLink>
              <FooterLink to="/">Contate-nos</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Recursos</FooterLinkTitle>
              <FooterWebLink href="/">Ferramentas de terceiros</FooterWebLink>
              <FooterWebLink href="https://undraw.co/illustrations">
              Ilustrações
              </FooterWebLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>LEGAL</FooterLinkTitle>
              <FooterLink to="/">Política de Privacidade</FooterLink>
              <FooterLink to="/">Termos de serviço</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              <IconLogo src={Logo} aria-label="Liv logo in white" />
            </SocialLogo>
            <WebsiteRights>
              {new Date().getFullYear()} © All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/LivCardBrasil"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://api.whatsapp.com/send?phone=+554298805-4663"
                target="_blank"
                aria-label="Whatsapp"
              >
                <FaWhatsapp />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/channel/UCpP7e6em2SSCcJN_GWD8v-A"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/company/livcard/mycompany/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
