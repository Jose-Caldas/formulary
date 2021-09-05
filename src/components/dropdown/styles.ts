import styled, { css } from "styled-components";
import media from "styled-media-query";

type WrapperProps = {
  isOpen?: boolean;
};

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    position: relative;
    width: max-content;
    cursor: pointer;
    ${Content}, ${Overlay} {
      transition: transform 0.2s ease-in, opacity ${theme.transition.default};
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`;
export const Title = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.text};
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 2.4rem;
    z-index: ${theme.layers.alwaysOnTop};
    font-size: ${(props) => props.theme.font.sizes.medium};
  `}
`;
export const Content = styled.div`
  ${({ theme }) => css`
    width: 20rem;
    height: 20rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: #999;

    color: ${theme.colors.white};
    border-radius: ${(props) => props.theme.border.radius};
    padding: 2rem 0;

    margin-top: ${theme.spacings.small};
    position: absolute;
    right: 7px;
    top: 17px;
    z-index: ${theme.layers.alwaysOnTop};
    &::before {
      content: "";
      position: absolute;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid #999;
      top: -1.2rem;
      right: 2.4rem;
    }
    button {
      font-size: ${theme.font.sizes.xlarge};
      color: #fff;
      padding: 1rem 2rem;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #eee;
      cursor: pointer;

      &:hover {
        background-color: #eee;
        color: #333;

        text-decoration: underline;
      }
    }
  `}

  ${media.lessThan("medium")`
   height: 25rem;
   width: 50vw;
  `}

  ${media.lessThan("small")`
   height: 25rem;
   width: 90vw;
  `}
`;
export const Overlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: ${theme.layers.overlay};
  `}
`;
