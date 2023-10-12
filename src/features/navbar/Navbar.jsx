import styled from "styled-components";
import NavLinks from "./NavLinks";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: top;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #0088ff;
`;

const StyledUl = styled.ul`
  display: flex;
  background-color: var(--color-grey-50);
  border-radius: 50px;
  padding: 1.2rem 1.2rem;
`;

function Navbar() {
  return (
    <StyledNav>
      <StyledUl>
        <NavLinks>Work</NavLinks>
        <NavLinks>About</NavLinks>
        <NavLinks>Play</NavLinks>
        <NavLinks>Notes</NavLinks>
        <NavLinks>Contact</NavLinks>
      </StyledUl>
    </StyledNav>
  );
}

export default Navbar;
