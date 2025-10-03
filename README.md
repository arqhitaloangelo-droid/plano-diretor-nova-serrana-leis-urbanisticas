# Plano Diretor Nova Serrana - Chat AI

Sistema de IA para consulta de legislação urbanística, plano diretor e código de obras de Nova Serrana/MG.

## 🚀 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **OpenAI GPT-4o** - Inteligência Artificial
- **Supabase** - Banco de dados PostgreSQL
- **React Markdown** - Renderização de markdown

## 📋 Pré-requisitos

- Node.js 18+ 
- Conta OpenAI com API Key
- Projeto Supabase configurado

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/arqhitaloangelo-droid/plano-diretor-nova-serrana-leis-urbanisticas.git
cd plano-diretor-nova-serrana-leis-urbanisticas
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

Edite `.env.local` e adicione suas credenciais:
- `OPENAI_API_KEY` - Sua chave da OpenAI
- `OPENAI_ASSISTANT_ID` - ID do assistente criado (já configurado)
- `NEXT_PUBLIC_SUPABASE_URL` - URL do Supabase
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Chave pública do Supabase
- `SUPABASE_SERVICE_KEY` - Chave de serviço do Supabase

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📦 Deploy

### Vercel (Recomendado)

1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. Configure as variáveis de ambiente
5. Deploy automático!

### Outras plataformas

- **Railway**: `railway up`
- **Render**: Configure via dashboard
- **Docker**: Use o Dockerfile incluído

## 🏗️ Estrutura do Projeto

```
.
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # API de chat com OpenAI
│   ├── chat/
│   │   └── page.tsx               # Página principal do chat
│   ├── globals.css                # Estilos globais
│   ├── layout.tsx                 # Layout raiz
│   └── page.tsx                   # Página inicial
├── public/                        # Arquivos estáticos
├── .env.example                   # Exemplo de variáveis de ambiente
├── next.config.js                 # Configuração do Next.js
├── package.json                   # Dependências
├── tailwind.config.ts             # Configuração do Tailwind
└── tsconfig.json                  # Configuração do TypeScript
```

## 💡 Funcionalidades

- ✅ Chat interativo com IA especializada
- ✅ Respostas com citações da legislação
- ✅ Interface responsiva e moderna
- ✅ Histórico de conversas
- ✅ Markdown support nas respostas
- ✅ Indicador de digitação

## 🎯 Exemplos de Uso

**Perguntas que o sistema responde:**

1. "Qual o recuo mínimo obrigatório para edificações residenciais?"
2. "Qual a taxa de ocupação permitida na zona ZR2?"
3. "Quais são os requisitos para construção de muros?"
4. "Como funciona o zoneamento urbanístico de Nova Serrana?"

## 📝 Licença

Este projeto está sob a licença MIT.

## 👨‍💻 Autor

**Hitalo Angelo**  
Arquiteto  
📧 arq.hitaloangelo@gmail.com

---

**Nota**: Este assistente utiliza IA e pode cometer erros. Sempre consulte a legislação oficial para decisões importantes.
