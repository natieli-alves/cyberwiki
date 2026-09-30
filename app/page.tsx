export default function Home() {
  return (
    <main className="home">
      <nav className="navbar">
        <div className="logo">
          🛡️ CyberWiki
        </div>

        <div className="nav-links">
          <a href="/">Início</a>
          <a href="/conceitos">Conceitos</a>
          <a href="/categorias">Categorias</a>
        </div>
      </nav>

      <section className="hero">
        <p className="hero-tag">ENCICLOPÉDIA DE CIBERSEGURANÇA</p>

        <h1>
          Entenda a segurança digital
          <span> de forma simples.</span>
        </h1>

        <p className="hero-description">
          Explore conceitos, tecnologias e fundamentos de
          segurança da informação em um só lugar.
        </p>

        <div className="search-box">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Pesquisar um conceito..."
          />
        </div>
      </section>

      <section className="categories">
        <h2>Explore por categoria</h2>

        <div className="category-grid">
          <div className="category-card">
            <span>🔐</span>
            <h3>Criptografia</h3>
            <p>Proteção e segurança de informações.</p>
          </div>

          <div className="category-card">
            <span>🌐</span>
            <h3>Redes</h3>
            <p>Comunicação e segurança de redes.</p>
          </div>

          <div className="category-card">
            <span>🦠</span>
            <h3>Malware</h3>
            <p>Ameaças e softwares maliciosos.</p>
          </div>

          <div className="category-card">
            <span>🛡️</span>
            <h3>Segurança</h3>
            <p>Princípios fundamentais de proteção.</p>
          </div>
        </div>
      </section>
    </main>
  );
}