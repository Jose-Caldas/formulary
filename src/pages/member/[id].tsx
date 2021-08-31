import {
  FacebookWithCircle,
  LinkedinWithCircle,
  InstagramWithCircle,
} from "@styled-icons/entypo-social";

import * as S from "../../styles/pages/member.styles";
import Link from "next/link";
import { Footer, Social } from "../../styles/pages/home.styles";
import axios from "axios";
import { User } from "../../context/types";

import logo from "../../assets/logo.svg";
import logoWhite from "../../assets/LogoWhite.svg";

import Image from "next/image";
import { GetStaticProps } from "next";

export default function Member({ member }: { member: { params: User } }) {
  return (
    <S.Container>
      <S.Nav>
        <S.Logo>
          <Image src={logo} alt="logo color white" />
        </S.Logo>
      </S.Nav>
      <S.Wrapper>
        <S.MemberCard>
          <h1>View Member Profile</h1>
          <S.MemberProfile>
            <S.MemberInfo>
              <div className="member-info-name">
                <h2>{member.params.name.first}</h2>
                <h2>{member.params.name.last}</h2>
              </div>
              <h3>Member</h3>
              <Image
                src={{
                  src: member.params.picture.large,
                  height: 120,
                  width: 120,
                }}
                alt={`${member.params.name.first}, image`}
              />
              <h3>AGE: {member.params.dob.age}</h3>
              <h3>CELL: {member.params.cell}</h3>
            </S.MemberInfo>
            <S.MemberLocation>
              <h2>First Name: {member.params.name.first}</h2>
              <h2>Last Name: {member.params.name.last}</h2>
              <h2>Gender: {member.params.gender}</h2>
              <h4>Contact</h4>
              <h2>
                Email: <span>{member.params.email}</span>
              </h2>
              <h2>Phone: {member.params.phone}</h2>
              <h4>Location</h4>
              <p>Street: {member.params.location.street}</p>
              <p>City: {member.params.location.city}</p>
              <p>State: {member.params.location.state}</p>
              <S.Back>
                <Link href="/">
                  <a>Return to home</a>
                </Link>
              </S.Back>
            </S.MemberLocation>
          </S.MemberProfile>
        </S.MemberCard>
      </S.Wrapper>

      <Footer>
        <Image src={logoWhite} alt="logo color white" />
        <h2>Juntos Somos Mais Fidelização S.A.</h2>
        <h3>Siga-nos nas redes sociais:</h3>
        <Social>
          <Link href="#">
            <a>
              <FacebookWithCircle size={40} />
            </a>
          </Link>
          <Link href="#">
            <a>
              <LinkedinWithCircle size={40} />
            </a>
          </Link>
          <Link href="#">
            <a>
              <InstagramWithCircle size={40} />
            </a>
          </Link>
        </Social>
      </Footer>
    </S.Container>
  );
}

export async function getStaticPaths() {
  const API_BASE_URL =
    "https://run.mocky.io/v3/3150d4b0-fb4e-44af-94d2-689b46d91129";

  try {
    const res = await axios.get<{ results: User[] }>(API_BASE_URL);
    const { results } = res.data;
    const members = results.map((member) => ({
      params: { ...member, id: `${member.name.first}-${member.name.last}` },
    }));

    return {
      paths: members,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params);
  const API_BASE_URL =
    "https://run.mocky.io/v3/3150d4b0-fb4e-44af-94d2-689b46d91129";

  try {
    const res = await axios.get<{ results: User[] }>(API_BASE_URL);

    const { results } = res.data;
    const members = results.map((member) => ({
      params: { ...member, id: `${member.name.first}-${member.name.last}` },
    }));
    return {
      props: {
        member: members.find((member) => member.params?.id === params?.id),
      },
    };
  } catch (error) {
    return {
      props: { member: {} },
    };
  }
};
