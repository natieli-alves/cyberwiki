import Link from "next/link";
import Image from "next/image";

import prisma from "../../lib/prisma";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ConceitoPage({ params }: Props) {
  const { slug } = await params;

  const conceito = await prisma.conceito.findUnique({
    where: {
      slug,
    },
  });

  if (!conceito) {
    return (
      <main className="home">
        <nav className="navbar">
          <Link href="/" className="logo">
            <Image
              src="/logo.png"
              alt="CyberWiki"
              width={250}
              height={50}
            />
          </Link>

          <div className="nav-links">
            <Link href="/">Início</Link>
            <Link href="/conceitos">Conceitos</Link>
            <Link href="/categorias">Categorias</Link>
            <Link href="/sobre">Sobre</Link>
          </div>
        </nav>

        <section className="categories">
          <p className="hero-tag">CYBERWIKI</p>

          <h1>Conceito não encontrado</h1>

          <p className="hero-description">
            O conceito que você procura não foi encontrado.
          </p>

          <Link href="/conceitos" className="hero-button">
            Voltar aos conceitos
          </Link>
        </section>
      </main>
    );
  }

  // Registra uma visualização do conceito
  await prisma.conceito.update({
    where: {
      id: conceito.id,
    },
    data: {
      visualizacoes: {
        increment: 1,
      },
    },
  });

  return (
    <main className="home">
      <nav className="navbar">
        <Link href="/" className="logo">
          <Image
            src="/logo.png"
            alt="CyberWiki"
            width={250}
            height={50}
          />
        </Link>

        <div className="nav-links">
          <Link href="/">Início</Link>
          <Link href="/conceitos">Conceitos</Link>
          <Link href="/categorias">Categorias</Link>
          <Link href="/sobre">Sobre</Link>
        </div>
      </nav>

      <section className="categories">
        <p className="hero-tag">CONCEITO DE CIBERSEGURANÇA</p>

        <h1>{conceito.nome}</h1>

        <p className="hero-description">
          {conceito.descricao}
        </p>

        <div className="about-content">
          <p>{conceito.conteudo}</p>
        </div>

        <Link href="/conceitos" className="hero-button">
          ← Voltar aos conceitos
        </Link>
      </section>
    </main>
  );
}