import {
  FacebookWithCircle,
  LinkedinWithCircle,
  InstagramWithCircle,
} from '@styled-icons/entypo-social'
import * as S from './styles'
import Link from 'next/link'

function Footer() {
  return (
    <S.Wrapper>
      <img src="/LogoWhite.svg" alt="Logo Juntos somos mais" />
      <h2>Juntos Somos Mais Fidelização S.A.</h2>
      <h3>Siga-nos nas redes sociais:</h3>
      <S.Social>
        <Link href="#">
          <FacebookWithCircle size={40} />
        </Link>
        <Link href="#">
          <LinkedinWithCircle size={40} />
        </Link>
        <Link href="#">
          <InstagramWithCircle size={40} />
        </Link>
      </S.Social>
    </S.Wrapper>
  )
}

export default Footer
