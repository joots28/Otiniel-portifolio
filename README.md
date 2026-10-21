# OTINIEL Portfolio V2

Portfólio pessoal de **Jonathan Otiniel**, desenvolvido como uma experiência web responsiva com direção visual cyber-gótica editorial, tipografia técnica e navegação inferior flutuante.

> **Status:** primeira fundação visual em desenvolvimento. As descrições de projetos são conceituais e seus estados devem ser atualizados conforme existirem entregas verificáveis.

## Objetivos

- Apresentar o desenvolvedor e sua trajetória técnica.
- Destacar um projeto principal e organizar os demais em uma grade editorial.
- Conectar competências a projetos e evidências reais.
- Manter a experiência pública aberta, sem login para visitantes.
- Priorizar acessibilidade, responsividade e carregamento leve.
- Evoluir futuramente com páginas de estudos de caso e diário técnico.

## Funcionalidades atuais

- Tema escuro padrão e alternância para tema claro.
- Navegação inferior flutuante com identificadores numerados.
- Layout responsivo para desktop e celular.
- Seções Início, Projetos, Sobre, Stack e Contato.
- Detalhes expansíveis para o projeto principal.
- Formulário de contato que prepara uma mensagem no aplicativo de e-mail. **Não existe backend de envio nesta versão.**
- Respeito à preferência do sistema por movimento reduzido.
- HTML, CSS e JavaScript separados, sem TypeScript, framework obrigatório ou dependências de build.

## Estrutura

```text
.
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    └── js/
        └── main.js
```

## Executar localmente

Basta abrir `index.html` em um navegador. Para uma experiência local mais fiel, também é possível iniciar um servidor estático na pasta do projeto:

```bash
python -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

## Publicação gratuita

A base é composta por arquivos estáticos e pode ser hospedada em um serviço de páginas estáticas. A opção inicial a validar é o **GitHub Pages**, sem custo para um repositório público. Outra alternativa é o Cloudflare Pages. Antes de ativar a publicação, conferir a visibilidade do repositório, a configuração do provedor e os limites atuais.

## Segurança e privacidade

- A versão atual não contém painel administrativo nem autenticação.
- Não inserir tokens, senhas ou segredos nos arquivos públicos.
- O formulário abre o cliente de e-mail; não envia dados diretamente para um servidor.
- Os visitantes não precisam fazer login para consultar o portfólio.
- A futura área administrativa, caso implementada, deverá ser separada da área pública e protegida no servidor.

## Próximas etapas

1. Revisar a primeira versão visual em desktop e celular.
2. Substituir os cartões conceituais por informações e links reais dos projetos.
3. Definir hospedagem estática gratuita e publicar o primeiro release.
4. Criar páginas dedicadas de estudos de caso.
5. Planejar diário técnico automatizado somente após validar requisitos, limites gratuitos e segurança.
6. Projetar painel administrativo separado, sem adicionar login à navegação pública.

## Créditos

Projeto pessoal de Jonathan Otiniel. A identidade visual, os textos e a implementação evoluirão junto com o portfólio.