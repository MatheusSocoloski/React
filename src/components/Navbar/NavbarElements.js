import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#fff" : "transparent")};
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  border-bottom: solid 1px #37419b;
`;

export const NavLogo = styled(LinkRouter)`
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  align-items: center;
  
  
`;

export const NavIcon = styled.img`
  width: 70px;
  margin: 20px;
  &:hover {
    
    transform: scale(1.1);
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 820px) {
    display: block;
    position: absolute;
    color: #37419b;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 820px) {
    display: none;
    
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #37419b;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 300;
  &:hover {
    
    transform: scale(1.1);
  }

  &.active {
    border-bottom: 3px solid #37419b;
    
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #37419b;
  color: #fff;
  border: 2px solid #37419b;
  white-space: nowrap;
  margin-right: 20px;
  padding: 18px 22px 16px;
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #37419b;
    transform: scale(1.1);
  }
`;

export const NavLinksContact = styled(LinkRouter)`
color: #37419b;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 300;

  &:hover {
    
    transform: scale(1.1);
  }
  &.active {
    border-bottom: 3px solid #37419b;

  }
`;
