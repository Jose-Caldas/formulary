import { Container } from "../styles/pages/home.styles";
import Head from "next/head";

export type HomeProps = {
  title: string;
  description: string;
};

export default function Home({ description, title }: HomeProps) {
  return (
    <Container>
      <Head>
        <title>Formulary</title>
      </Head>

      <main>
        <h1>Formulary</h1>
      </main>
    </Container>
  );
}
