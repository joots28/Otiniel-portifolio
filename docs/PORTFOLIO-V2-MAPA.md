# OTINIEL Portfolio V2 — mapa de continuidade

## Objetivo
Portfólio pessoal, estático e responsivo de Jonathan Otiniel. Visitantes têm acesso livre aos projetos; não existe login obrigatório. A edição continua sob controle do proprietário. O MVP deve operar sem backend, banco de dados ou serviços pagos.

## Publicação
- Repositório: `joots28/Otiniel-portifolio`.
- Hospedagem: GitHub Pages, com publicação verificada anteriormente pela branch `v2-foundation`.
- Após cada atualização, verificar o workflow Pages antes de afirmar que o deploy está concluído.
- Contato público: `otinieljonathan2804@gmail.com`.
- O formulário abre o cliente de e-mail com `mailto:`; não envia dados para servidor.

## Direção visual aprovada
- **Dark mode exclusivo**: sem alternância para tema claro, sem estado de tema em JS.
- Cyber-gótico editorial: construção angular, grades técnicas, sombras e brilhos sutis, títulos com caráter, conteúdo legível e técnico.
- Paleta de marca: preto `#09090B`, superfície `#121018`, marfim `#F3EFE7`, violeta metálico `#B9A0DF`, azul frio `#8DB7D8`.
- Marca vetorial O/N/T: `assets/brand/otn-monogram.svg`; variação invertida para superfícies claras e impressão: `assets/brand/otn-monogram-inverse.svg`; cartão social: `assets/brand/otn-share.svg`.
- Navegação inferior fixa, centralizada, liquid-glass e responsiva. Deve continuar visível durante a rolagem.
- Animações expressivas, mas controladas; respeitar `prefers-reduced-motion`. Efeitos de luz não podem bloquear toque ou cliques.
- Sem áudio automático. Qualquer recurso sonoro futuro exige controle explícito e fontes licenciadas.

## Seções
1. Início cinematográfico com marca e acesso rápido aos projetos.
2. Projetos, com EleiNex em destaque e quatro projetos adicionais.
3. Sobre: manifesto técnico, trajetória e princípios de engenharia.
4. Stack organizado por função; não inventar percentuais de proficiência.
5. Jornada/diário técnico estático, sem métricas inventadas.
6. Contato via `mailto:`.
7. Rodapé de encerramento visual.
8. Currículo para baixar em PDF.

## Vitrine de cinco projetos
1. **EleiNex** — plataforma cívica com informações eleitorais públicas; o conteúdo deve manter fontes consultáveis e status honesto.
2. **ChurchManager** — sistema web acadêmico em desenvolvimento.
3. **SPI — API de usuários** — estudo de estruturação de API/back-end .NET.
4. **Lanchonete** — estudo desktop com C# / Windows Forms.
5. **Estruturas condicionais** — exercícios de lógica.
Nenhum outro projeto aparece como card principal. Cada estudo de caso diferencia escopo, implementação confirmada, limitações e próximos passos. Não inventar entregas, dados ou métricas.

## Arquitetura estática
- `index.html`: página inicial.
- `assets/css/style.css`: visual, responsividade, animações e navegação.
- `assets/js/main.js`: navegação, observadores e formulário, sem alternância de tema.
- `assets/brand/`: marca e imagem de compartilhamento.
- `assets/cv/Jonathan-Otiniel-Curriculo.pdf`: currículo para download.
- `projetos/`: estudos de caso estáticos.
- `docs/BRAND-QA.md`: identidade e validação cromática.
- `preview-mobile.html`: moldura adaptativa da aplicação real.

## Segurança e simplicidade
Não acrescentar painel administrativo, login para visitantes, bancos, webhooks ou automações pagas sem pedido explícito. Evitar dados privados e credenciais. O site público pode conter links para repositórios; funcionalidades ainda não confirmadas devem ser identificadas como estudo ou em desenvolvimento.

## Checklist de lançamento
- [ ] Verificar workflow Pages em sucesso e abrir a URL publicada em navegador real.
- [ ] Conferir links relativos, logos, download do PDF e estudos de caso.
- [ ] Testar larguras 320, 360, 390, 430, 768, 1024 e 1440 px.
- [ ] Testar navegação fixa/liquid-glass, âncoras, foco de teclado e espaço inferior do rodapé.
- [ ] Testar legibilidade de textos, botões, hover/focus e estado sem efeitos.
- [ ] Confirmar a ausência de tema claro e respeito a `prefers-reduced-motion`.
- [ ] Não declarar deploy ou QA real sem evidência correspondente.

## Registro V2.5 — 21/10/2026
- Aplicada direção cyber-gótica editorial e paleta exclusiva dark.
- Adicionada marca vetorial com inversão para material claro/impresso e cartão de compartilhamento.
- Vitrine ajustada para os cinco projetos originais, com EleiNex como nome apresentado.
- Criado download estático de currículo em PDF.
- Adicionada seção de jornada técnica; o conteúdo é editorial e não afirma que logs ou métricas sejam automáticos.
- Adicionados estudos de caso estáticos para os cinco projetos.
