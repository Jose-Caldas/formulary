import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;

  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
  }

  .pagination__item--active {
    position: relative;
    background-color: transparent;
    font-weight: bold;
    color: #9b9b9b;
    transform: scale(1.2);

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

  a {
    border: none;
    padding: 1rem 1.5rem;
    cursor: pointer;
    font-size: ${(props) => props.theme.font.sizes.medium};
    background-color: transparent;
    text-decoration: none;

    @media (max-width: 840px) {
      font-size: ${(props) => props.theme.font.sizes.small};
      padding: 6px;
    }

    &:hover {
      background-color: #e5e5e5;
    }
  }

  .pagination__svg {
    background-color: #e5e5e5;
    border-radius: 50%;
    padding: 1.5rem;
    border: none;

    &:focus {
      background-color: #444;
    }
  }
`;
