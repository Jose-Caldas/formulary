import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
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
  width: 100%;
  font-size: ${(props) => props.theme.font.sizes.xlarge};
  color: #999999;
  text-align: center;
  margin-top: 3rem;
  a {
    background-color: #0070f3;
    box-shadow: 0 6px 20px rgba(0, 118, 255, 0.23);
    padding: 0.5rem 0.8rem;
    border-radius: 4px;
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  max-width: ${(props) => props.theme.grid.container};

  margin: 5vh auto;
  padding: 0 ${(props) => props.theme.spacings.small};
`;

export const MemberCard = styled.div`
  h1 {
    text-align: center;
  }
`;

export const MemberProfile = styled.div`
  display: flex;

  grid-gap: 2rem;
  margin-top: 2rem;
  border-radius: 4px;
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.23);

  h3 {
    margin-bottom: 0.5rem;
  }

  ${media.lessThan("medium")`
  flex-direction: column;
  `}
`;

export const MemberInfo = styled.div`
  background-color: #eee;
  padding: 2rem;
  border-radius: 4px;

  h2 {
    color: ${(props) => props.theme.colors.footerBg};
    margin-bottom: 2rem;
  }

  .member-info-name {
    display: flex;
    gap: 0.5rem;
    text-transform: capitalize;
    font-size: 2rem;
  }
`;

export const MemberLocation = styled.div`
  padding: 2rem;
  h2 {
    text-transform: capitalize;
    font-weight: 400;

    span {
      text-transform: lowercase;
    }
  }

  h4 {
    color: #3a3a3a;
    font-weight: normal;
    text-align: flex-start;
    font-size: 18px;
    margin: 1rem 0;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  h2 {
    font-size: 18px;
    color: ${(props) => props.theme.colors.text};

    span {
      color: #0070f3;
      cursor: pointer;
    }
  }
  p {
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.text};
    font-size: 18px;
  }
`;
