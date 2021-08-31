import styled from "styled-components";

export const Wrapper = styled.div`
  width: 27.2rem;
  padding: 2.4rem 2.7rem;
  border-radius: ${(props) => props.theme.border.radius};
  border: 1px solid #e5e5e5;
  margin-bottom: 2rem;

  h2 {
    color: ${(props) => props.theme.colors.text};
    font-weight: 500;
    font-size: 2rem;
    margin-bottom: ${(props) => props.theme.spacings.xsmall};
  }

  input {
    width: 1.8rem;
    height: 1.8rem;
  }

  label {
    font-size: ${(props) => props.theme.font.sizes.medium};
    margin-left: 0.5rem;
    color: ${(props) => props.theme.colors.text};
  }

  Button {
    font-size: ${(props) => props.theme.font.sizes.medium};
    color: ${(props) => props.theme.colors.text};
    border: none;
    background-color: ${(props) => props.theme.colors.secondary};
    background-color: #0070f3;
    box-shadow: 0 6px 20px rgba(0, 118, 255, 0.23);

    color: ${(props) => props.theme.colors.white};
    padding: 1rem;
    border-radius: ${(props) => props.theme.border.radius};
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;
export const City = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacings.xxsmall};
`;
