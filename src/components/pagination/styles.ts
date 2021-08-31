import styled from "styled-components";
import media from "styled-media-query";

export const DataContainer = styled.ul`
  width: 100%;
`;

export const MemberName = styled.div`
  a {
    display: flex;
    gap: 0.8rem;
    font-size: 2rem;
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};

    &:hover {
      color: #999;
    }

    h1 {
      font-size: ${(props) => props.theme.font.sizes.xlarge};
    }
  }
`;

export const MemberInfo = styled.li`
  h1,
  h2,
  h3 {
    text-transform: capitalize;
  }

  h2 {
    font-size: 1.4rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  .local {
    text-align: center;
  }

  img {
    &:hover {
      opacity: 0.8;
    }
  }
`;

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

    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    padding-inline-start: 0;
    list-style: none;

    ${media.between("medium", "large")`
    grid-template-columns: 1fr 1fr;
      overflow-y: auto;
     
    `}

    @media (max-width: 760px) {
      grid-template-columns: 1fr;
    }

    img {
      border-radius: 50%;
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #eee;
      padding: 35px 16px 40px;
      width: 272px;
      height: 310px;
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
