import { Email } from '@styled-icons/material-outlined/Email'
import { Location } from '@styled-icons/ionicons-outline/Location'

import * as S from '../../styles/pages/member.styles'
import Link from 'next/link'
import axios from 'axios'
import { User } from '../../context/types'

import { GetStaticProps } from 'next'
import Footer from '../../components/Footer'
import { API_BASE_URL } from '../../context/useMembers'

interface MemberProps {
  member: { params: User }
}

export default function Member({ member }: MemberProps) {
  return (
    <S.Container>
      <S.Nav>
        <Link href="/">
          <S.Logo>
            <img src="/logo.svg" alt="logo Juntos somos mais" />
          </S.Logo>
        </Link>
      </S.Nav>
      <S.Wrapper>
        <S.MemberCard>
          <h1>Informações sobre o Usuário</h1>
          <S.MemberProfile>
            <S.MemberInfo>
              <div className="member-info-name">
                <h2>{member.params?.name?.first}</h2>
                <h2>{member.params?.name?.last}</h2>
              </div>
              <h3>Membro</h3>
              <img
                src={member.params?.picture?.large}
                alt={member.params?.name?.first}
              />

              <h3>IDADE: {member.params?.dob?.age}</h3>
              <h3>CEL: {member.params?.cell}</h3>
            </S.MemberInfo>
            <S.MemberLocation>
              <h2>Nome: {member.params?.name?.first}</h2>
              <h2>Sobrenome: {member.params?.name?.last}</h2>
              <h4>
                <Email size={20} color="#28B0FC" /> Contato
              </h4>

              <h2>
                Email:
                <span> {member.params?.email}</span>
              </h2>
              <h2>Telefone: {member.params?.phone}</h2>
              <h4>
                <Location size={20} color="#28B0FC" /> Localização
              </h4>
              <p>Rua: {member.params?.location.street}</p>
              <p>Cidade: {member.params?.location.city}</p>
              <p>Estado: {member.params?.location.state}</p>
              <S.Back>
                <Link href="/">Retornar à lista</Link>
              </S.Back>
            </S.MemberLocation>
          </S.MemberProfile>
        </S.MemberCard>
      </S.Wrapper>

      <Footer />
    </S.Container>
  )
}

export async function getStaticPaths() {
  try {
    const res = await axios.get(API_BASE_URL)
    const results = res.data as User[]
    const members = results.map((member) => ({
      params: { ...member, id: `${member?.name?.first}-${member?.name?.last}` },
    }))

    return {
      paths: members,
      fallback: false,
    }
  } catch (error) {
    console.log(error)
    return {
      paths: [],
      fallback: false,
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const res = await axios.get(API_BASE_URL)

    const results = res.data as User[]
    const members = results.map((member) => ({
      params: { ...member, id: `${member?.name?.first}-${member?.name?.last}` },
    }))
    return {
      props: {
        member: members.find((member) => member.params?.id === params?.id),
      },
    }
  } catch (error) {
    return {
      props: { member: {} },
    }
  }
}
