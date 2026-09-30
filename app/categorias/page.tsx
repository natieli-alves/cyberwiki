import Link from "next/link";
import Image from "next/image";

export default function Categorias() {
  return (
    <main className="home">
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
        </div>
      </nav>

      <section className="categories">
        <p className="hero-tag">ORGANIZE SEU APRENDIZADO</p>

        <h1>Categorias</h1>

        <p className="hero-description">
          Encontre conceitos de cibersegurança organizados por área.
        </p>

        <div className="category-grid">
          <div className="category-card">
            <span>🔐</span>
            <h3>Criptografia</h3>
            <p>Algoritmos, chaves, hashes e proteção de dados.</p>
          </div>

          <div className="category-card">
            <span>🌐</span>
            <h3>Redes</h3>
            <p>Protocolos, comunicação e segurança de redes.</p>
          </div>

          <div className="category-card">
            <span>🦠</span>
            <h3>Ameaças</h3>
            <p>Malware, phishing e outras ameaças digitais.</p>
          </div>

          <div className="category-card">
            <span>🛡️</span>
            <h3>Defesa</h3>
            <p>Mecanismos e práticas de proteção.</p>
          </div>
        </div>
      </section>
    </main>
  );
}