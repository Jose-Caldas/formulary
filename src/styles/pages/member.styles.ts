import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  width: 100%;
  flex: 1;

  max-width: ${(props) => props.theme.grid.container};

  margin: 0 auto;
  padding: ${(props) => props.theme.spacings.small};
`;

export const Nav = styled.nav`
  width: 100%;
  background-color: ${(props) => props.theme.colors.menuBg};
`;

export const Logo = styled.div`
  width: 100%;
  display: flex;
  max-width: ${(props) => props.theme.grid.container};
  padding: ${(props) => props.theme.spacings.small};

  margin: 0 auto;
  max-width: ${(props) => props.theme.grid.container};
  img {
    width: 14.8rem;
    height: 4rem;
    margin-left: 0;
  }
`;

export const Back = styled.div`
  margin: ${(props) => props.theme.spacings.large} 0;
  font-size: ${(props) => props.theme.font.sizes.xlarge};
  color: #999999;
`;

export const MemberInfo = styled.div`
  border: 1px solid #eee;
  padding: ${(props) => props.theme.spacings.medium};

  h1 {
    span {
      font-weight: 400;
      text-transform: capitalize;
    }
  }
`;
