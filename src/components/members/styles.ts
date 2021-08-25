import styled from "styled-components";

export const Wrapper = styled.div``;

export const Profile = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(272px, 1fr));
  grid-gap: 16px;
  padding-inline-start: 0;

  ul {
    list-style: none;
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0.1rem solid #e5e5e5e5;
    padding: ${(props) => props.theme.spacings.xsmall};
    border-radius: ${(props) => props.theme.border.radius};

    img {
      border-radius: 50%;
      background-color: #eee;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  p {
    margin: 0.5rem 0 2rem;
    font-size: small;
    color: #999999;
  }
`;

export const Name = styled.div`
  display: flex;
  h1 {
    margin-right: 0.6rem;
    text-transform: capitalize;
    margin-top: ${(props) => props.theme.spacings.xsmall};
    font-size: large;
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    font-size: small;
    text-transform: capitalize;
  }
  h2 {
    text-transform: capitalize;
  }
  h3 {
    text-transform: uppercase;
  }
`;
