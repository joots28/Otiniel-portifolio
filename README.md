<div align="center">

# Jonathan Otiniel — OTINIEL Portfolio V2

**Desenvolvimento de sistemas · Web · APIs · Dados · Experiências digitais**

Um portfólio público, responsivo e cinematográfico para apresentar projetos, decisões técnicas e evolução prática com honestidade sobre o estágio de cada trabalho.

[![GitHub](https://img.shields.io/badge/GitHub-joots28-10110f?style=for-the-badge&logo=github&logoColor=64B5FF)](https://github.com/joots28)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Jonathan-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jonathan-otiniel-053a12290)

</div>

---

## Propósito

A V2 evolui a primeira versão do portfólio sem abandonar sua base simples: HTML semântico, CSS e JavaScript separados. A interface combina uma direção editorial cyber-gótica, animações tridimensionais em CSS e uma navegação pensada para desktop, tablet e celular Android.

O projeto busca explicar não apenas o resultado visual, mas o problema, o contexto, a arquitetura, as limitações e os próximos passos de cada trabalho. Os projetos são pessoais ou acadêmicos e aparecem com estados conservadores; não são apresentados como produtos de produção sem evidência.

## O que há nesta versão

- Conteúdo público sem cadastro ou login obrigatório.
- Navegação superior sólida, fixa e estável, sem efeito de vidro sobre o texto.
- Temas escuro e claro com preferência lembrada no navegador.
- Abertura cinematográfica com composição 3D em CSS, órbitas e cartões visuais.
- Efeitos de movimento reduzidos em dispositivos sensíveis ou com `prefers-reduced-motion`.
- Catálogo de projetos com filtros por categoria e estudos de caso independentes.
- Logo vetorial original herdada do Portfolio V1.
- Layout adaptado para telas pequenas, áreas de toque e navegação por teclado.
- Formulário que prepara um e-mail via `mailto:`; a página não envia nem armazena mensagens.
- Currículo PDF disponível no caminho `assets/cv/Jonathan-Otiniel-Curriculo.pdf`.
- Metadados de compartilhamento e README documentado.

## Projetos e estudos de caso

| Página | Contexto |
| --- | --- |
| [EleiNexus](projetos/eleinex.html) | Informação eleitoral, propostas e consulta a fontes públicas. |
| [ChurchManager](projetos/churchmanager.html) | Sistema acadêmico de gestão comunitária, ainda em desenvolvimento. |
| [SeguroGestor](projetos/segurogestor.html) | Requisitos, modelagem e organização de dados de um projeto acadêmico. |
| [Portfolio V1](projetos/portfolio-v1.html) | Base inicial, identidade visual e evolução técnica da V2. |
| [SPI — API de usuários](projetos/spi-api.html) | Estudo de estruturação de API e back-end .NET. |
| [Lanchonete](projetos/lanchonete.html) | Prática desktop com C# e Windows Forms. |
| [Estruturas condicionais](projetos/estruturas-condicionais.html) | Exercícios de lógica de programação. |

Os estudos distinguem o contexto conhecido do que ainda precisa ser confirmado. Links, dados e recursos externos podem mudar; consulte os repositórios e as fontes originais.

## Tecnologias

| Camada | Tecnologias |
| --- | --- |
| Marcação | HTML5 semântico |
| Estilo | CSS3, Grid, Flexbox, custom properties, media queries, perspectiva e transformações 3D |
| Interatividade | JavaScript moderno, sem framework obrigatório |
| Acessibilidade | Foco visível, semântica, alvos de toque e movimento reduzido |
| Publicação planejada | GitHub Pages / hospedagem estática |

Não é necessário instalar dependências para visualizar o site. Os efeitos 3D são construídos em CSS; não é exigida uma biblioteca WebGL para a experiência principal.

## Estrutura

```text
.
├── index.html
├── preview-mobile.html
├── assets/
│   ├── brand/
│   │   ├── atom.svg
│   │   └── otn-share.svg
│   ├── css/cinematic.css
│   ├── js/cinematic.js
│   └── cv/Jonathan-Otiniel-Curriculo.pdf
├── projetos/
│   ├── eleinex.html
│   ├── churchmanager.html
│   ├── segurogestor.html
│   ├── portfolio-v1.html
│   ├── spi-api.html
│   ├── lanchonete.html
│   └── estruturas-condicionais.html
└── docs/
    ├── PORTFOLIO-V2-MAPA.md
    └── BRAND-QA.md
```

## Executar localmente

1. Clone o repositório e entre na pasta:

   ```bash
   git clone --branch v2-foundation https://github.com/joots28/Otiniel-portifolio.git
   cd Otiniel-portifolio
   ```

2. Abra `index.html` no navegador ou inicie um servidor HTTP:

   ```bash
   python -m http.server 8000
   ```

3. Acesse `http://localhost:8000`. Para a moldura mobile, abra `preview-mobile.html`.

## Publicação

O repositório utiliza a branch `v2-foundation` como branch de trabalho/publicação documentada. Após integrar alterações, confira o status do workflow de Pages e abra a URL publicada em um navegador real antes de declarar o deploy concluído.

Prévia mobile hospedada, quando a publicação do Pages estiver atualizada: [abrir preview-mobile.html](https://joots28.github.io/Otiniel-portifolio/preview-mobile.html).

## Administração e segurança

O conteúdo público permanece aberto. Uma área administrativa real precisa de autenticação, autorização verificada no servidor, recuperação segura e segundo fator para os perfis privilegiados. **Esses controles não são declarados como concluídos por esta interface estática.** Não coloque chaves privadas, tokens ou credenciais no JavaScript público. Até haver um backend e uma integração de identidade devidamente validados, as alterações do site são feitas pelo proprietário através do repositório.

## Contato

- GitHub: [github.com/joots28](https://github.com/joots28)
- LinkedIn: [Jonathan Otiniel](https://www.linkedin.com/in/jonathan-otiniel-053a12290)
- E-mail: [otinieljonathan2804@gmail.com](mailto:otinieljonathan2804@gmail.com)

---

**Conceito e projeto:** Jonathan Otiniel.  
Feito com intenção, revisão técnica e evolução contínua.
