import styled from "styled-components";

export const Wrapper = styled.div`
  img {
    border-radius: 50%;
    background-color: #eee;
  }
`;

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
    align-items: center;
    justify-content: center;
    border: 1px solid #eeee;
    padding: 1rem;
  }

  h2 {
    margin-right: 0.6rem;
    text-transform: capitalize;
  }
`;

export const Location = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 1rem;
    text-transform: capitalize;
  }
  h2 {
    text-transform: capitalize;
  }
  h3 {
    text-transform: uppercase;
  }
`;
