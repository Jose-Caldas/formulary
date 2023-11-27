import { Search } from '@styled-icons/feather/Search'
import * as S from '../styles/pages/home.styles'
import { Sidebar } from '../components/sidebar'
import { MembersList } from '../components/membersList'
import { useMembers } from '../context/useMembers'
import MediaMatch from '../components/MediaMatch'
import Dropdown from '../components/dropdown'
import Footer from '../components/Footer'

export default function Home() {
  const {
    handlers: { setFilter },
    state: { loading },
  } = useMembers()

  return (
    <S.Container>
      <S.MenuWrapper>
        <S.Menu>
          <S.Logo src="logo.svg" alt="Logo" />

          <S.Input>
            <Search size={17} />
            <input
              type="search"
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Buscar aqui"
            />
          </S.Input>

          <MediaMatch lessThan="large">
            <S.MenuMobile>
              <Dropdown />
            </S.MenuMobile>
          </MediaMatch>
        </S.Menu>
      </S.MenuWrapper>
      <S.Title>Lista de membros</S.Title>;
      <S.Main>
        {loading ? (
          <>
            <img src="/dots.svg" alt="loading" />
          </>
        ) : (
          <>
            <MediaMatch greaterThan="large">
              <Sidebar />
            </MediaMatch>
            <MembersList />
          </>
        )}
      </S.Main>
      <Footer />
    </S.Container>
  )
}
