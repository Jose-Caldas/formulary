import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e5e5e5;
  padding: ${(props) => props.theme.spacings.xsmall};
  border-radius: ${(props) => props.theme.border.radius};
  height: 6rem;
  margin-bottom: ${(props) => props.theme.spacings.xsmall};

  p {
    font-size: ${(props) => props.theme.font.sizes.medium};
    color: ${(props) => props.theme.colors.text};
  }

  @media (max-width: 50rem) {
    flex-direction: column;
    padding: 0.5rem;
    p {
      width: 100%;
      font-size: ${(props) => props.theme.font.sizes.xsmall};
      margin-bottom: ${(props) => props.theme.spacings.xsmall};
      text-align: end;
    }
    Select {
      width: 100%;
    }
  }
`;

export const Select = styled.select`
  width: 20rem;
  height: 35px;
  background: white;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.font.sizes.small};

  border: none;

  option {
    color: ${(props) => props.theme.colors.text};
    background: white;
    display: flex;
    white-space: pre;
    min-height: 2rem;
    padding: 0 0.2rem 0.1rem;
  }
`;

export const MembersContainer = styled.div``;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #e5e5e5;
  height: 310px;
  border-radius: ${(props) => props.theme.border.radius};
`;

export const Loading = styled.div``;

export const Paginate = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Pagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.font.sizes.xxlarge};
  margin: 2rem 0 4rem;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15rem;

  button {
    background-color: #eee;
    border-radius: 50%;
    padding: 5px;
    border: none;
  }
`;
