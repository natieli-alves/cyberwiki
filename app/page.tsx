import Link from "next/link";
import Image from "next/image";

import {
  LockKeyhole,
  Network,
  ShieldCheck,
  Bug,
  UsersRound,
  KeyRound,
  CircleDollarSign,
  Fish,
  Brain,
  LockOpen,
  Hash,
  Key,
  GlobeLock,
  UserCheck,
  ShieldPlus,
  TriangleAlert,
  Terminal,
} from "lucide-react";

import prisma from "./lib/prisma";
import SearchBox from "./components/SearchBox";

const icones = {
  criptografia: LockKeyhole,
  "criptografia-simetrica": KeyRound,
  "criptografia-assimetrica": LockOpen,
  hash: Hash,
  "chave-criptografica": Key,
  malware: Bug,
  ransomware: CircleDollarSign,
  phishing: Fish,
  "engenharia-social": Brain,
  firewall: ShieldCheck,
  vpn: GlobeLock,
  autenticacao: UserCheck,
  mfa: ShieldPlus,
  rbac: UsersRound,
  vulnerabilidade: TriangleAlert,
  exploit: Terminal,
};

export default async function Home() {
  const principais = await prisma.conceito.findMany({
    orderBy: [
      {
        visualizacoes: "desc",
      },
      {
        id: "asc",
      },
    ],
    take: 3,
  });

  return (
    <main className="home" id="topo">
      {/* NAVBAR */}
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

      {/* HERO */}
      <section className="hero">
        <p className="hero-tag">ENCICLOPÉDIA DE CIBERSEGURANÇA</p>

        <h1>
          Entenda a segurança digital
          <span> de forma simples.</span>
        </h1>

        <p className="hero-description">
          Explore conceitos, tecnologias e fundamentos de segurança da
          informação em um só lugar.
        </p>

        <SearchBox />

        <Link href="/conceitos" className="hero-button">
          Explorar conceitos
        </Link>
      </section>

      {/* CONCEITOS EM DESTAQUE */}
      <section className="featured">
        <p className="section-tag">MAIS ACESSADOS</p>

        <h2>Principais conceitos</h2>

        <p className="section-description">
          Confira os conceitos mais acessados pelos visitantes do CyberWiki.
        </p>

        <div className="featured-grid">
          {principais.map((conceito) => {
            const Icone =
              icones[conceito.slug as keyof typeof icones];

            return (
              <Link
                href={`/conceitos/${conceito.slug}`}
                className="featured-card"
                key={conceito.id}
              >
                {Icone && <Icone size={32} strokeWidth={1.8} />}

                <h3>{conceito.nome}</h3>

                <p>{conceito.descricao}</p>

                <strong>Explorar conceito</strong>
              </Link>
            );
          })}
        </div>
      </section>

      {/* O QUE ENCONTRAR */}
      <section className="topics">
        <p className="section-tag">CONHEÇA O CONTEÚDO</p>

        <h2>O que você encontra no CyberWiki?</h2>

        <p className="section-description">
          Conteúdos organizados para ajudar você a compreender diferentes áreas
          da cibersegurança.
        </p>

        <div className="topics-grid">
          <div className="topic-item">
            <LockKeyhole size={27} strokeWidth={1.8} />

            <h3>Criptografia</h3>

            <p>Proteção de informações e técnicas criptográficas.</p>
          </div>

          <div className="topic-item">
            <Network size={27} strokeWidth={1.8} />

            <h3>Redes</h3>

            <p>Comunicação, protocolos e segurança de redes.</p>
          </div>

          <div className="topic-item">
            <ShieldCheck size={27} strokeWidth={1.8} />

            <h3>Defesa</h3>

            <p>Mecanismos e práticas de proteção.</p>
          </div>

          <div className="topic-item">
            <Bug size={27} strokeWidth={1.8} />

            <h3>Ameaças</h3>

            <p>Malware, ataques e riscos digitais.</p>
          </div>

          <div className="topic-item">
            <UsersRound size={27} strokeWidth={1.8} />

            <h3>Controle de acesso</h3>

            <p>Autenticação, autorização e gerenciamento de usuários.</p>
          </div>

          <div className="topic-item">
            <KeyRound size={27} strokeWidth={1.8} />

            <h3>Segurança</h3>

            <p>Fundamentos para proteção de sistemas e informações.</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final-cta">
        <p className="section-tag">CYBERWIKI</p>

        <h2>Pronto para explorar?</h2>

        <p>Descubra conceitos e fundamentos de cibersegurança.</p>

        <Link href="/conceitos" className="hero-button">
          Explorar conceitos
        </Link>
      </section>

      {/* VOLTAR AO TOPO */}
      <div className="back-to-top">
        <a href="#topo">↑ Voltar ao topo</a>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 CyberWiki</p>

        <p>Por Natieli Alves</p>
      </footer>
    </main>
  );
}