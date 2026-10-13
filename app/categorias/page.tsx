import Link from "next/link";
import Image from "next/image";

import {
  KeyRound,
  Fish,
  Smartphone,
  GlobeLock,
  ShieldPlus,
  RefreshCw,
  UserRound,
  HardDrive,
  TriangleAlert,
} from "lucide-react";

export default function Categorias() {
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
          <Link href="/categorias">Segurança na Internet</Link>
          <Link href="/sobre">Sobre</Link>
        </div>
      </nav>

      {/* INTRODUÇÃO */}
      <section className="categories">
        <p className="hero-tag">PROTEJA-SE NO MUNDO DIGITAL</p>

        <h1>Segurança na Internet</h1>

        <p className="hero-description">
          Pequenas atitudes podem fazer uma grande diferença na proteção dos
          seus dados, contas e dispositivos.
        </p>

        {/* DICAS */}
        <div className="category-grid">
          {/* SENHAS */}
          <div className="category-card">
            <KeyRound size={32} strokeWidth={1.8} />

            <h3>Proteja suas senhas</h3>

            <p>
              Use senhas fortes, longas e diferentes para cada conta. Evite
              compartilhar suas senhas com outras pessoas.
            </p>
          </div>

          {/* MFA */}
          <div className="category-card">
            <ShieldPlus size={32} strokeWidth={1.8} />

            <h3>Use autenticação em dois fatores</h3>

            <p>
              Ative a autenticação multifator sempre que estiver disponível
              para adicionar uma camada extra de proteção às suas contas.
            </p>
          </div>

          {/* PHISHING */}
          <div className="category-card">
            <Fish size={32} strokeWidth={1.8} />

            <h3>Cuidado com golpes e phishing</h3>

            <p>
              Desconfie de mensagens, e-mails e links suspeitos que solicitam
              dados pessoais, senhas ou informações financeiras.
            </p>
          </div>

          {/* DISPOSITIVOS */}
          <div className="category-card">
            <Smartphone size={32} strokeWidth={1.8} />

            <h3>Proteja seus dispositivos</h3>

            <p>
              Utilize bloqueio de tela e instale aplicativos somente de fontes
              confiáveis.
            </p>
          </div>

          {/* ATUALIZAÇÕES */}
          <div className="category-card">
            <RefreshCw size={32} strokeWidth={1.8} />

            <h3>Mantenha tudo atualizado</h3>

            <p>
              Atualize o sistema operacional, aplicativos e programas para
              corrigir falhas de segurança conhecidas.
            </p>
          </div>

          {/* NAVEGAÇÃO */}
          <div className="category-card">
            <GlobeLock size={32} strokeWidth={1.8} />

            <h3>Navegue com segurança</h3>

            <p>
              Tenha cuidado ao acessar sites, baixar arquivos e utilizar redes
              Wi-Fi públicas.
            </p>
          </div>

          {/* PRIVACIDADE */}
          <div className="category-card">
            <UserRound size={32} strokeWidth={1.8} />

            <h3>Cuide da sua privacidade</h3>

            <p>
              Evite compartilhar informações pessoais desnecessárias e revise
              as permissões dos aplicativos instalados.
            </p>
          </div>

          {/* BACKUP */}
          <div className="category-card">
            <HardDrive size={32} strokeWidth={1.8} />

            <h3>Faça backups</h3>

            <p>
              Mantenha cópias de segurança dos seus arquivos importantes para
              evitar a perda de dados.
            </p>
          </div>
        </div>
      </section>

      {/* ANTES DE CLICAR */}
      <section className="topics">
        <p className="section-tag">FIQUE ATENTO</p>

        <h2>Antes de clicar, pare e pense.</h2>

        <p className="section-description">
          Algumas perguntas simples podem ajudar você a identificar situações
          suspeitas antes de fornecer informações ou acessar um link.
        </p>

        <div className="topics-grid">
          <div className="topic-item">
            <TriangleAlert size={27} strokeWidth={1.8} />

            <h3>Você conhece o remetente?</h3>

            <p>
              Verifique quem enviou a mensagem antes de abrir links ou
              arquivos.
            </p>
          </div>

          <div className="topic-item">
            <TriangleAlert size={27} strokeWidth={1.8} />

            <h3>Estão pedindo seus dados?</h3>

            <p>
              Tenha cuidado com solicitações de senhas, códigos, documentos ou
              informações bancárias.
            </p>
          </div>

          <div className="topic-item">
            <TriangleAlert size={27} strokeWidth={1.8} />

            <h3>Existe urgência?</h3>

            <p>
              Mensagens que pressionam você a agir rapidamente podem ser uma
              tentativa de golpe.
            </p>
          </div>

          <div className="topic-item">
            <TriangleAlert size={27} strokeWidth={1.8} />

            <h3>O link parece estranho?</h3>

            <p>
              Confira o endereço do site antes de inserir qualquer informação.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <p className="section-tag">APRENDA MAIS</p>

        <h2>Quer entender melhor esses riscos?</h2>

        <p>
          Explore os conceitos de cibersegurança e conheça as tecnologias por
          trás da proteção digital.
        </p>

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