import Link from "next/link";
import Image from "next/image";

import {
  LockKeyhole,
  Network,
  Bug,
  ShieldCheck,
} from "lucide-react";

export default function Categorias() {
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


      {/* CATEGORIAS */}
      <section className="categories">

        <p className="hero-tag">
          ORGANIZE SEU APRENDIZADO
        </p>

        <h1>
          Categorias
        </h1>

        <p className="hero-description">
          Encontre conceitos de cibersegurança organizados por área.
        </p>


        <div className="category-grid">

          {/* CRIPTOGRAFIA */}
          <div className="category-card">

            <LockKeyhole
              size={32}
              strokeWidth={1.8}
            />

            <h3>
              Criptografia
            </h3>

            <p>
              Algoritmos, chaves, hashes e proteção de dados.
            </p>

          </div>


          {/* REDES */}
          <div className="category-card">

            <Network
              size={32}
              strokeWidth={1.8}
            />

            <h3>
              Redes
            </h3>

            <p>
              Protocolos, comunicação e segurança de redes.
            </p>

          </div>


          {/* AMEAÇAS */}
          <div className="category-card">

            <Bug
              size={32}
              strokeWidth={1.8}
            />

            <h3>
              Ameaças
            </h3>

            <p>
              Malware, phishing e outras ameaças digitais.
            </p>

          </div>


          {/* DEFESA */}
          <div className="category-card">

            <ShieldCheck
              size={32}
              strokeWidth={1.8}
            />

            <h3>
              Defesa
            </h3>

            <p>
              Mecanismos e práticas de proteção.
            </p>

          </div>

        </div>

      </section>


      {/* VOLTAR AO TOPO */}
      <div className="back-to-top">

        <a href="#topo">
          ↑ Voltar ao topo
        </a>

      </div>

    </main>
  );
}