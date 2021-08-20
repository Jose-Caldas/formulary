import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: ${(props) => props.theme.grid.container};
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  h1 {
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.font.sizes.huge};
  }
`;
