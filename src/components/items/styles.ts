import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #e5e5e5;
  height: 310px;
  border-radius: ${(props) => props.theme.border.radius};
`;
