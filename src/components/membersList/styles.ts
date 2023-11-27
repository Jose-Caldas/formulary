import styled from 'styled-components'

export const Container = styled.div`
  max-width: 848px;
`

export const Wrapper = styled.div`
  display: flex;
  width: 848px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e5e5e5;
  padding: ${(props) => props.theme.spacings.xsmall};
  border-radius: ${(props) => props.theme.border.radius};
  height: 6rem;
  margin-bottom: ${(props) => props.theme.spacings.xsmall};
  background-color: ${(props) => props.theme.colors.menuBg};

  p {
    font-size: ${(props) => props.theme.font.sizes.medium};
    color: ${(props) => props.theme.colors.text};

    span {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`

export const MembersContainer = styled.div``

export const Loading = styled.div``

export const Paginate = styled.div`
  display: flex;
  flex-direction: column;
`

export const Pagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.font.sizes.xxlarge};
  margin: 2rem 0 4rem;
`

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
`
