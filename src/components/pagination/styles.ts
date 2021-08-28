import styled from "styled-components";
import media from "styled-media-query";

export const DataContainer = styled.ul``;

export const MemberName = styled.div`
  a {
    display: flex;
    font-size: 2rem;
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};

    &:hover {
      color: #999;
    }

    h1 {
      font-size: ${(props) => props.theme.font.sizes.xlarge};
      :first-child {
        margin-right: 0.8rem;
      }
    }
  }
`;

export const MemberInfo = styled.li``;

export const Wrapper = styled.div`
  position: relative;
  .pageNumbers {
    list-style: none;
    display: flex;
  }

  .pageNumbers li {
    padding: 10px;
    cursor: pointer;
    color: #9b9b9b;
    font-size: ${(props) => props.theme.font.sizes.medium};
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

    ${media.lessThan("large")`
      height: 430px;
      overflow-y: auto;
    `}

    img {
      border-radius: 50%;
    }

    h1 {
      text-transform: capitalize;
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
