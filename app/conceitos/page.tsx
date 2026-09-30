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

const conceitos = [
  {
    nome: "Criptografia",
    descricao:
      "Técnicas utilizadas para proteger informações por meio de métodos matemáticos.",
    icone: LockKeyhole,
    link: "/conceitos/criptografia",
  },
  {
    nome: "Criptografia Simétrica",
    descricao:
      "Utiliza a mesma chave para cifrar e decifrar informações.",
    icone: KeyRound,
    link: "/conceitos/criptografia-simetrica",
  },
  {
    nome: "Criptografia Assimétrica",
    descricao:
      "Utiliza um par de chaves: uma pública e uma privada.",
    icone: LockOpen,
    link: "/conceitos/criptografia-assimetrica",
  },
  {
    nome: "Hash",
    descricao:
      "Função que transforma dados em uma representação de tamanho fixo.",
    icone: Hash,
    link: "/conceitos/hash",
  },
  {
    nome: "Chave Criptográfica",
    descricao:
      "Informação utilizada por algoritmos criptográficos para proteger dados.",
    icone: Key,
    link: "/conceitos/chave-criptografica",
  },
  {
    nome: "Malware",
    descricao:
      "Software desenvolvido para realizar ações maliciosas em sistemas ou dispositivos.",
    icone: Bug,
    link: "/conceitos/malware",
  },
  {
    nome: "Ransomware",
    descricao:
      "Tipo de malware que pode bloquear ou criptografar dados para exigir pagamento.",
    icone: CircleDollarSign,
    link: "/conceitos/ransomware",
  },
  {
    nome: "Phishing",
    descricao:
      "Técnica de engenharia social utilizada para tentar obter informações de forma fraudulenta.",
    icone: Fish,
    link: "/conceitos/phishing",
  },
  {
    nome: "Engenharia Social",
    descricao:
      "Técnicas que exploram o comportamento humano para obter informações ou acesso.",
    icone: Brain,
    link: "/conceitos/engenharia-social",
  },
  {
    nome: "Firewall",
    descricao:
      "Mecanismo utilizado para controlar o tráfego de rede com base em regras de segurança.",
    icone: ShieldCheck,
    link: "/conceitos/firewall",
  },
  {
    nome: "VPN",
    descricao:
      "Tecnologia que cria uma conexão protegida entre um dispositivo e uma rede.",
    icone: GlobeLock,
    link: "/conceitos/vpn",
  },
  {
    nome: "Autenticação",
    descricao:
      "Processo utilizado para verificar a identidade de um usuário ou sistema.",
    icone: UserCheck,
    link: "/conceitos/autenticacao",
  },
  {
    nome: "MFA",
    descricao:
      "Mecanismo que utiliza mais de um fator para verificar a identidade de um usuário.",
    icone: ShieldPlus,
    link: "/conceitos/mfa",
  },
  {
    nome: "RBAC",
    descricao:
      "Modelo de controle de acesso baseado em funções atribuídas aos usuários.",
    icone: UsersRound,
    link: "/conceitos/rbac",
  },
  {
    nome: "Vulnerabilidade",
    descricao:
      "Fraqueza que pode ser explorada para comprometer a segurança de um sistema.",
    icone: TriangleAlert,
    link: "/conceitos/vulnerabilidade",
  },
  {
    nome: "Exploit",
    descricao:
      "Técnica ou código utilizado para explorar uma vulnerabilidade.",
    icone: Terminal,
    link: "/conceitos/exploit",
  },
];

export default function Conceitos() {
  return (
    <main className="home" id="topo">

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

        <p className="hero-tag">
          BASE DE CONHECIMENTO
        </p>

        <h1>
          Conceitos de Cibersegurança
        </h1>

        <p className="hero-description">
          Explore conceitos fundamentais relacionados à
          segurança da informação.
        </p>


        <div className="category-grid">

          {conceitos.map((conceito) => {
            const Icone = conceito.icone;

            return (
              <Link
                href={conceito.link}
                key={conceito.nome}
                className="category-card"
              >

                <Icone
                  size={32}
                  strokeWidth={1.8}
                />

                <h3>
                  {conceito.nome}
                </h3>

                <p>
                  {conceito.descricao}
                </p>

              </Link>
            );
          })}

        </div>

      </section>


      <div className="back-to-top">
        <a href="#topo">
          ↑ Voltar ao topo
        </a>
      </div>

    </main>
  );
}