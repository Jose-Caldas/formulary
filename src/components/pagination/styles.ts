import styled from "styled-components";

export const Wrapper = styled.div`
  .pageNumbers {
    list-style: none;
    display: flex;
  }

  .pageNumbers li {
    padding: 10px;
    /* border: 1px solid #eee; */
    cursor: pointer;
    color: #9b9b9b;
    font-size: ${(props) => props.theme.font.sizes.small};
  }

  .pageNumbers li.active {
    position: relative;
    color: #eee;
    color: black;
    font-size: ${(props) => props.theme.font.sizes.medium};

    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 4px;
      background: #9b9b9b;
      border-radius: 9px;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  .pageNumbers button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      color: #999;
    }
  }
`;

export const UserContainer = styled.ul`
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(272px, 1fr));
    grid-gap: 16px;
    padding-inline-start: 0;
    list-style: none;

    img {
      border-radius: 50%;
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid #eee;
      padding: 0.5rem 0;
    }
  }
`;

export const Controls = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;

export const PrevButton = styled.div`
  background-color: #e5e5e5;
  border-radius: 50%;

  button {
    padding: 0.8rem;
    &:focus {
      border-radius: 50%;
      background-color: #444;
      color: #fff;
    }
  }
`;
export const NextButton = styled.div`
  background-color: #e5e5e5;
  border-radius: 50%;

  button {
    padding: 0.8rem;
    &:focus {
      border-radius: 50%;
      background-color: #444;
      color: #fff;
    }
  }
`;
