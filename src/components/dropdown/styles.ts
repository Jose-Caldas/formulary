import styled, { css } from "styled-components";

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
export const Content = styled.ul`
  ${({ theme }) => css`
    width: 20rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background: ${theme.colors.footerBg};
    border-bottom: 6px solid #eee;

    color: ${theme.colors.white};
    border-radius: ${(props) => props.theme.border.radius};
    padding: 2rem 0;

    margin-top: ${theme.spacings.small};
    position: absolute;
    right: 8px;
    top: 17px;
    z-index: ${theme.layers.alwaysOnTop};
    &::before {
      content: "";
      position: absolute;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.footerBg};
      top: -1.2rem;
      right: 2.4rem;
    }
    a {
      text-decoration: none;
      font-size: ${theme.font.sizes.xlarge};
      color: #fff;
      padding: 1rem 2rem;

      &:hover {
        background-color: #f4f4f4;
        color: #3a3a3a;

        text-decoration: underline;
      }
    }
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
