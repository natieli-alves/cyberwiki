import "dotenv/config";
import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.conceito.createMany({
    data: [
      {
        nome: "Criptografia",
        slug: "criptografia",
        descricao: "Técnicas utilizadas para proteger informações por meio da transformação dos dados.",
        conteudo: "A criptografia protege informações contra acessos não autorizados.",
        destaque: true,
      },
      {
        nome: "Criptografia Simétrica",
        slug: "criptografia-simetrica",
        descricao: "Utiliza a mesma chave para criptografar e descriptografar informações.",
        conteudo: "Na criptografia simétrica, uma única chave é utilizada para proteger e recuperar os dados.",
        destaque: false,
      },
      {
        nome: "Criptografia Assimétrica",
        slug: "criptografia-assimetrica",
        descricao: "Utiliza um par de chaves: uma pública e uma privada.",
        conteudo: "A criptografia assimétrica utiliza duas chaves relacionadas matematicamente.",
        destaque: false,
      },
      {
        nome: "Hash",
        slug: "hash",
        descricao: "Função que transforma dados em uma sequência de tamanho geralmente fixo.",
        conteudo: "Funções hash são utilizadas em diversas aplicações de segurança da informação.",
        destaque: false,
      },
      {
        nome: "Chave Criptográfica",
        slug: "chave-criptografica",
        descricao: "Informação utilizada por algoritmos criptográficos para proteger dados.",
        conteudo: "As chaves criptográficas são fundamentais para operações de criptografia e descriptografia.",
        destaque: false,
      },
      {
        nome: "Malware",
        slug: "malware",
        descricao: "Software desenvolvido para causar danos ou realizar ações maliciosas.",
        conteudo: "Malware é um termo utilizado para diferentes tipos de softwares maliciosos.",
        destaque: true,
      },
      {
        nome: "Ransomware",
        slug: "ransomware",
        descricao: "Tipo de malware que pode bloquear ou criptografar dados e exigir pagamento.",
        conteudo: "O ransomware pode impedir o acesso aos dados da vítima e exigir um resgate.",
        destaque: false,
      },
      {
        nome: "Phishing",
        slug: "phishing",
        descricao: "Técnica utilizada para enganar usuários e obter informações sensíveis.",
        conteudo: "Ataques de phishing utilizam mensagens ou páginas falsas para tentar obter informações das vítimas.",
        destaque: true,
      },
      {
        nome: "Engenharia Social",
        slug: "engenharia-social",
        descricao: "Técnicas que exploram o comportamento humano para obter informações ou acesso.",
        conteudo: "A engenharia social explora fatores humanos para realizar ataques.",
        destaque: false,
      },
      {
        nome: "Firewall",
        slug: "firewall",
        descricao: "Mecanismo utilizado para controlar o tráfego de rede.",
        conteudo: "Firewalls ajudam a controlar conexões entre redes ou dispositivos com base em regras de segurança.",
        destaque: false,
      },
      {
        nome: "VPN",
        slug: "vpn",
        descricao: "Tecnologia que cria uma conexão protegida entre dispositivos através de uma rede.",
        conteudo: "Uma VPN pode proteger a comunicação entre o dispositivo e o servidor VPN.",
        destaque: false,
      },
      {
        nome: "Autenticação",
        slug: "autenticacao",
        descricao: "Processo de verificar a identidade de um usuário ou dispositivo.",
        conteudo: "A autenticação verifica se uma pessoa ou sistema é realmente quem afirma ser.",
        destaque: false,
      },
      {
        nome: "MFA",
        slug: "mfa",
        descricao: "Método que utiliza múltiplos fatores para verificar a identidade de um usuário.",
        conteudo: "A autenticação multifator adiciona camadas extras de proteção ao acesso.",
        destaque: false,
      },
      {
        nome: "RBAC",
        slug: "rbac",
        descricao: "Modelo de controle de acesso baseado em funções.",
        conteudo: "No RBAC, as permissões são associadas a funções e os usuários recebem essas funções.",
        destaque: false,
      },
      {
        nome: "Vulnerabilidade",
        slug: "vulnerabilidade",
        descricao: "Fraqueza que pode ser explorada para comprometer um sistema.",
        conteudo: "Vulnerabilidades podem existir em softwares, sistemas, redes ou processos.",
        destaque: false,
      },
      {
        nome: "Exploit",
        slug: "exploit",
        descricao: "Técnica ou código utilizado para explorar uma vulnerabilidade.",
        conteudo: "Um exploit pode ser utilizado para explorar uma vulnerabilidade existente em um sistema.",
        destaque: false,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });