import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #e5e5e5;
  height: 310px;
  border-radius: ${(props) => props.theme.border.radius};

  img {
    border-radius: 50%;
    background-color: #eee;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

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
