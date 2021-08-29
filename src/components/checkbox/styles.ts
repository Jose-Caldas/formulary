import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Input = styled.input`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  width: 1.8rem;
  height: 1.8rem;
  border: 0.2rem solid ${(props) => props.theme.colors.lightGray};
  border-radius: 0.2rem;
  transition: background border ${(props) => props.theme.transition.fast};
  position: relative;
  outline: none;

  &:before {
    content: "";
    width: 0.6rem;
    height: 0.9rem;
    border: 0.2rem solid ${(props) => props.theme.colors.white};
    border-top: 0;
    border-left: 0;
    transform: rotate(45deg);
    position: absolute;
    top: -0.1rem;
    opacity: 0;
    transition: ${(props) => props.theme.transition.fast};
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.gray};
    transition: ${(props) => props.theme.transition.fast};
  }

  &:checked {
    border-color: ${(props) => props.theme.colors.secondary};
    background: ${(props) => props.theme.colors.secondary};

    &:before {
      opacity: 1;
    }
  }
`;

export const Label = styled.label`
  cursor: pointer;
  padding-left: ${(props) => props.theme.spacings.xxsmall};
  color: ${(props) => props.theme.colors.text};
  line-height: 2.8rem;
`;
