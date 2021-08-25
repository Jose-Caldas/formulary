import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin-top: 2rem;
  }
  li {
    font-size: 20px;
  }
  li + li {
    margin-left: 2rem;
    font-size: 20px;
  }
`;
