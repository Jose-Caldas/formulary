import styled from "styled-components";

export const Wrapper = styled.div`
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

  h2 {
    margin-bottom: 2.4rem;
    margin-top: 2.4rem;
    font-size: ${(props) => props.theme.font.sizes.medium};
  }
  h3 {
    margin-bottom: 2rem;
    font-size: ${(props) => props.theme.font.sizes.small};
  }

  img {
    width: 14.8rem;
    height: 4rem;
  }
`;

export const Logo = styled.img`
  width: 14.8rem;
  height: 4rem;
  margin-left: 0;
`;

export const Social = styled.div`
  color: #fff;
  a {
    margin-right: ${(props) => props.theme.spacings.xsmall};

    :last-child {
      margin-right: 0;
    }
    svg {
      fill: ${(props) => props.theme.colors.secondary};
    }
  }
`;
