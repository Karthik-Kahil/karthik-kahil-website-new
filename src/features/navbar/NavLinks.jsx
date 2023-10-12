import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.li`
  width: 90px;
  background-color: #ffffff;
  border-radius: 50px;
  padding: 0.6rem 0;
  text-align: center;
`;

function NavLinks({ children }) {
  return (
    <StyledNav>
      <NavLink>{children}</NavLink>
    </StyledNav>
  );
}

export default NavLinks;
