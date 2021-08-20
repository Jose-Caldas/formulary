import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.menuBg};
`;

export const Wrapper = styled.div`
  max-width: ${(props) => props.theme.grid.container};
  background: #fff;

  margin: 0 auto;

  h1 {
    width: 100%;
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.font.sizes.huge};
  }
`;

export const Logo = styled.div``;
export const Image = styled.img`
  width: 14.8rem;
  height: 4rem;
`;

export const Menu = styled.div`
  max-width: ${(props) => props.theme.grid.container};
  padding: ${(props) => props.theme.spacings.small};

  margin: 0 auto;
`;

export const Footer = styled.footer`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.footerBg};
  color: white;
  padding-top: ${(props) => props.theme.spacings.medium};
  padding-bottom: ${(props) => props.theme.spacings.xlarge};
`;
