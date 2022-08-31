import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import Logo from "../../assets/images/logo.svg";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinksContact,
  NavBtn,
  NavBtnLink,

 
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#1677f1" }}>
        <Nav role="navigation" aria-label="Header" scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <NavIcon aria-label="Logo Liv" src={Logo} />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="products"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  tabindex={0}
                >
                  Produtos
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  tabindex={0}
                >
                  Serviços
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="payments"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  tabindex={0}
                >
                  Métodos de pagamento 
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="clientes"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-95}
                  tabindex={0}
                >
                  Clientes
                </NavLinks>
              </NavItem>
              <NavItem>
              <NavLinksContact to="/contact">Contate-nos</NavLinksContact>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/login">Entrar</NavBtnLink>
            </NavBtn>
      
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
