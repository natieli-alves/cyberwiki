import Link from "next/link";
import Image from "next/image";

import {
  LockKeyhole,
  KeyRound,
  LockOpen,
  Hash,
  Key,
  Bug,
  CircleDollarSign,
  Fish,
  Brain,
  ShieldCheck,
  GlobeLock,
  UserCheck,
  ShieldPlus,
  UsersRound,
  TriangleAlert,
  Terminal,
} from "lucide-react";

import prisma from "../lib/prisma";

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

export default async function Conceitos() {
  const conceitos = await prisma.conceito.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <main className="home" id="topo">
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
        </div>
      </nav>

      <section className="categories">
        <p className="hero-tag">BASE DE CONHECIMENTO</p>

        <h1>Conceitos de Cibersegurança</h1>

        <p className="hero-description">
          Explore conceitos fundamentais relacionados à segurança da informação.
        </p>

        <div className="category-grid">
          {conceitos.map((conceito) => {
            const Icone = icones[conceito.slug as keyof typeof icones];

            return (
              <Link
                href={`/conceitos/${conceito.slug}`}
                key={conceito.id}
                className="category-card"
              >
                {Icone && <Icone size={32} strokeWidth={1.8} />}

                <h3>{conceito.nome}</h3>

                <p>{conceito.descricao}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <div className="back-to-top">
        <a href="#topo">↑ Voltar ao topo</a>
      </div>
    </main>
  );
}