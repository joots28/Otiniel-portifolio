# OTINIEL Portfolio V2

Portfólio público de **Jonathan Otiniel**, construído com HTML, CSS e JavaScript, direção visual **cyber-gótica editorial** e apresentação técnica full-stack.

## Princípios
- **Dark mode exclusivo**, sem alternância de tema.
- Site público sem login para visitantes.
- HTML, CSS e JavaScript separados; sem TypeScript nem build obrigatório.
- Hospedagem estática, com custo operacional previsto de R$ 0.
- Animações com respeito a `prefers-reduced-motion`, foco visível e navegação responsiva.
- Efeitos visuais não escondem conteúdo nem bloqueiam controles essenciais.
- E-mail público: **otinieljonathan2804@gmail.com**.
- Formulário prepara uma mensagem por `mailto:`; não envia para um servidor.

## Projetos
1. **EleiNex** — plataforma cívica de informação eleitoral pública.
2. **ChurchManager** — sistema web acadêmico em desenvolvimento.
3. **SPI — API de usuários** — estudo .NET/back-end.
4. **Lanchonete** — prática desktop com C# / Windows Forms.
5. **Estruturas condicionais** — exercícios de lógica de programação.

As descrições separam estudo, desenvolvimento em andamento e recursos comprovados. Não há promessas de métricas ou funcionalidades sem evidência.

## Currículo
O botão **Currículo PDF** oferece o arquivo estático `assets/cv/Jonathan-Otiniel-Curriculo.pdf`, pronto para baixar e anexar em candidaturas.

## Estrutura
```text
.
├── index.html
├── preview-mobile.html
├── assets/
│   ├── brand/             # monograma, versão invertida, social card
│   ├── cv/                # currículo PDF
│   ├── css/style.css
│   └── js/main.js
├── projetos/              # estudos de caso estáticos
└── docs/
    ├── BRAND-QA.md
    └── PORTFOLIO-V2-MAPA.md
```

## Prévia mobile
Abra `preview-mobile.html` no GitHub Pages para abrir a aplicação real dentro de uma moldura adaptável. Use **ABRIR DIRETO** para visualizar sem moldura.

## Rodar localmente
Abra `index.html` ou rode:
```bash
python -m http.server 8000
```
Depois visite `http://localhost:8000`.

## Publicação
O site é estático e pode ser publicado gratuitamente com GitHub Pages. A branch de publicação atual é `v2-foundation`; confira o workflow Pages depois de cada release antes de afirmar que o deploy está concluído.

## Créditos
Conceito e projeto: Jonathan Otiniel. Para escopo e continuidade, consulte [o mapa da V2](docs/PORTFOLIO-V2-MAPA.md) e o [QA visual](docs/BRAND-QA.md).
