import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SideBtnWrap,
  SidebarLink,
  SidebarRoute,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu role="menu">
          <li role="menuitem">
            {" "}
            <SidebarLink onClick={toggle} to="about">
             Sobre
            </SidebarLink>
          </li>
          <li role="menuitem">
            {" "}
            <SidebarLink onClick={toggle} to="products">
              Produtos
            </SidebarLink>
          </li>
          <li role="menuitem">
            {" "}
            <SidebarLink onClick={toggle} to="services">
              Serviços
            </SidebarLink>
          </li>
          <li role="menuitem">
            <SidebarLink onClick={toggle} to="payments">
              Metódos de pagamento
            </SidebarLink>
          </li>
          <li role="menuitem">
            <SidebarLink onClick={toggle} to="network">
              Rede
            </SidebarLink>
          </li>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/contact">Contate-nos</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
