import styled from "styled-components";

export const Wrapper = styled.div`
  height: 47.4rem;
  padding: 2.4rem 2.7rem;
  border-radius: ${(props) => props.theme.border.radius};
  border: 1px solid #e5e5e5;

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

  a {
    font-size: ${(props) => props.theme.font.sizes.medium};
    color: ${(props) => props.theme.colors.text};
  }
`;
export const City = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacings.xxsmall};
`;
