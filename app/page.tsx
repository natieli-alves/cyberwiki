import Link from "next/link";
import Image from "next/image";

import {
  LockKeyhole,
  Network,
  ShieldCheck,
  Bug,
  UsersRound,
  KeyRound,
} from "lucide-react";

export default function Home() {
  return (
    <main className="home" id="topo">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <Image
            src="/logo.png"
            alt="CyberWiki"
            width={250}
            height={50}
          />
        </div>

        <div className="nav-links">
          <Link href="/">Início</Link>
          <Link href="/conceitos">Conceitos</Link>
          <Link href="/categorias">Categorias</Link>
          <Link href="/sobre">Sobre</Link>
        </div>
      </nav>


      {/* HERO */}
      <section className="hero">

        <p className="hero-tag">
          ENCICLOPÉDIA DE CIBERSEGURANÇA
        </p>

        <h1>
          Entenda a segurança digital
          <span> de forma simples.</span>
        </h1>

        <p className="hero-description">
          Explore conceitos, tecnologias e fundamentos de
          segurança da informação em um só lugar.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Pesquisar um conceito..."
          />
        </div>

        <Link href="/conceitos" className="hero-button">
          Explorar conceitos
        </Link>

      </section>


      {/* CONCEITOS EM DESTAQUE */}
      <section className="featured">

        <p className="section-tag">
          PARA COMEÇAR
        </p>

        <h2>
          Comece por aqui
        </h2>

        <p className="section-description">
          Não sabe por onde começar? Explore alguns dos
          principais conceitos de cibersegurança.
        </p>

        <div className="featured-grid">

          <Link
            href="/conceitos/criptografia"
            className="featured-card"
          >

            <LockKeyhole
              size={32}
              strokeWidth={1.8}
            />

            <h3>
              Criptografia
            </h3>

            <p>
              Entenda como informações podem ser protegidas
              por meio de técnicas criptográficas.
            </p>

            <strong>
              Explorar conceito →
            </strong>

          </Link>


          <Link
            href="/conceitos/malware"
            className="featured-card"
          >

            <Bug
              size={32}
              strokeWidth={1.8}
            />

            <h3>
              Malware
            </h3>

            <p>
              Conheça os principais tipos de softwares
              maliciosos e seus impactos.
            </p>

            <strong>
              Explorar conceito →
            </strong>

          </Link>


          <Link
            href="/conceitos/phishing"
            className="featured-card"
          >

            <Network
              size={32}
              strokeWidth={1.8}
            />

            <h3>
              Phishing
            </h3>

            <p>
              Aprenda como ataques de engenharia social
              podem explorar usuários.
            </p>

            <strong>
              Explorar conceito →
            </strong>

          </Link>

        </div>

      </section>


      {/* O QUE ENCONTRAR */}
      <section className="topics">

        <p className="section-tag">
          CONHEÇA O CONTEÚDO
        </p>

        <h2>
          O que você encontra no CyberWiki?
        </h2>

        <p className="section-description">
          Conteúdos organizados para ajudar você a compreender
          diferentes áreas da cibersegurança.
        </p>

        <div className="topics-grid">

          <div className="topic-item">

            <LockKeyhole
              size={27}
              strokeWidth={1.8}
            />

            <h3>
              Criptografia
            </h3>

            <p>
              Proteção de informações e técnicas criptográficas.
            </p>

          </div>


          <div className="topic-item">

            <Network
              size={27}
              strokeWidth={1.8}
            />

            <h3>
              Redes
            </h3>

            <p>
              Comunicação, protocolos e segurança de redes.
            </p>

          </div>


          <div className="topic-item">

            <ShieldCheck
              size={27}
              strokeWidth={1.8}
            />

            <h3>
              Defesa
            </h3>

            <p>
              Mecanismos e práticas de proteção.
            </p>

          </div>


          <div className="topic-item">

            <Bug
              size={27}
              strokeWidth={1.8}
            />

            <h3>
              Ameaças
            </h3>

            <p>
              Malware, ataques e riscos digitais.
            </p>

          </div>


          <div className="topic-item">

            <UsersRound
              size={27}
              strokeWidth={1.8}
            />

            <h3>
              Controle de acesso
            </h3>

            <p>
              Autenticação, autorização e gerenciamento de usuários.
            </p>

          </div>


          <div className="topic-item">

            <KeyRound
              size={27}
              strokeWidth={1.8}
            />

            <h3>
              Segurança
            </h3>

            <p>
              Fundamentos para proteção de sistemas e informações.
            </p>

          </div>

        </div>

      </section>


      {/* SOBRE */}
      <section className="about-preview">

        <div className="about-content">

          <p className="section-tag">
            SOBRE O PROJETO
          </p>

          <h2>
            Conheça o CyberWiki
          </h2>

          <p>
            O CyberWiki é uma enciclopédia digital criada para
            facilitar o acesso ao conhecimento sobre
            cibersegurança e segurança da informação.
          </p>

          <p>
            A plataforma reúne conceitos, tecnologias e
            fundamentos da área em uma linguagem simples e
            acessível.
          </p>

          <Link
            href="/sobre"
            className="about-button"
          >
            Conheça o projeto →
          </Link>

        </div>

      </section>


      {/* CTA FINAL */}
      <section className="final-cta">

        <p className="section-tag">
          CYBERWIKI
        </p>

        <h2>
          Pronto para explorar?
        </h2>

        <p>
          Descubra conceitos e fundamentos de cibersegurança.
        </p>

        <Link
          href="/conceitos"
          className="hero-button"
        >
          Explorar conceitos →
        </Link>

      </section>


      {/* VOLTAR AO TOPO */}
      <div className="back-to-top">
        <a href="#topo">
          ↑ Voltar ao topo
        </a>
      </div>


      {/* FOOTER */}
      <footer className="footer">

        <p>
          © 2026 CyberWiki
        </p>

        <p>
          Enciclopédia de Cibersegurança
        </p>

      </footer>

    </main>
  );
}