import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 0 1rem 0;
`;

const NavContainer = styled.nav`
`;

const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
`;

const NavItem = styled.li`
  padding: 5px;
  list-style: none;
`;

const NavLink = styled.a`
  font-size: 1rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>React Weather App</h1>
      <NavContainer>
      <NavItems>
        <NavItem>
          <NavLink href="https://duncanbain.dev">duncanbain.dev</NavLink>
        </NavItem>
        <NavItem>
          <a href="https://github.com/duncanjbain/">GitHub</a>
        </NavItem>
        <NavItem>
          <a href="https://twitter.com/duncanbain">Twitter</a>
        </NavItem>
      </NavItems>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
