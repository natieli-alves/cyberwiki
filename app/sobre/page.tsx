import Link from "next/link";
import Image from "next/image";

export default function Sobre() {
  return (
    <main className="home">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <Image src="/logo.png" alt="CyberWiki" width={250} height={50} />
        </div>

        <div className="nav-links">
          <Link href="/">Início</Link>
          <Link href="/conceitos">Conceitos</Link>
          <Link href="/categorias">Categorias</Link>
          <Link href="/sobre">Sobre</Link>
        </div>
      </nav>

      {/* SOBRE */}
      <section className="about-page">
        <p className="hero-tag">SOBRE O PROJETO</p>

        <h1>
          Conheça o <span>CyberWiki</span>
        </h1>

        <p className="about-intro">
          Uma enciclopédia digital criada para tornar o conhecimento sobre
          cibersegurança mais simples, acessível e organizado.
        </p>

        {/* O PROJETO */}
        <div className="about-section">
          <h2>O que é o CyberWiki?</h2>

          <p>
            O CyberWiki é uma plataforma de conhecimento voltada para conceitos
            fundamentais de cibersegurança e segurança da informação.
          </p>

          <p>
            A proposta é reunir informações sobre diferentes temas da área em um
            único lugar, utilizando uma linguagem simples e acessível para
            facilitar o aprendizado.
          </p>
        </div>

        {/* OBJETIVO */}
        <div className="about-section">
          <h2>Qual é o objetivo?</h2>

          <p>
            O principal objetivo do CyberWiki é facilitar o acesso a conteúdos
            introdutórios sobre cibersegurança, ajudando estudantes e pessoas
            interessadas na área a compreender conceitos, tecnologias e práticas
            de segurança digital.
          </p>
        </div>

        {/* TECNOLOGIAS */}
        <div className="about-section">
          <h2>Sobre o desenvolvimento</h2>

          <p>
            O CyberWiki é desenvolvido como um projeto acadêmico na área de
            Sistemas de Informação, utilizando tecnologias modernas para
            construção de aplicações web.
          </p>

          <div className="tech-list">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>PostgreSQL</span>
            <span>Prisma</span>
          </div>
        </div>

        {/* CTA */}
        <div className="about-cta">
          <h2>Explore o CyberWiki</h2>

          <p>Comece pelos conceitos fundamentais de cibersegurança.</p>

          <Link href="/conceitos" className="hero-button">
            Explorar conceitos →
          </Link>

          <Link href="/" className="back-home">
            ← Voltar a página inicial
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 CyberWiki</p>

        <p>Enciclopédia de Cibersegurança</p>
      </footer>
    </main>
  );
}
