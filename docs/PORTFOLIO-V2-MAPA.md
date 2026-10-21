# OTINIEL Portfolio V2 — mapa de continuidade

## Objetivo

Portfólio profissional público de Jonathan Otiniel, acessível por desktop, tablet e navegador mobile. A V2 evolui a base de HTML, CSS e JavaScript da V1 e cria estudos de caso individuais, sem exigir login para visitantes.

## Princípios de experiência

- Direção editorial cinematográfica com uma linguagem cyber-gótica contida.
- Tema exclusivamente escuro; não existe alternância para modo claro.
- Navegação superior sólida, centralizada e estável, sem indicadores que empurrem ou distorçam itens.
- Composição de átomo com três órbitas, inspirada no React, usando SVG/CSS; os efeitos não bloqueiam texto, foco, toque ou rolagem.
- Catálogo de projetos em coluna única, com cada cartão ocupando a largura da página e descrições ampliadas.
- A experiência funciona sem movimentos contínuos quando `prefers-reduced-motion` está ativo.
- Estrutura leve, com HTML semântico e arquivos de estilo e comportamento separados.
- Conteúdo público sem autenticação; a área administrativa só poderá ser anunciada quando existir autorização real no servidor.

## Mapa de navegação

1. **Início:** apresentação, monograma OTINIEL e composição 3D.
2. **Sobre:** abordagem de engenharia, princípios e formação.
3. **Projetos:** catálogo filtrável.
4. **Stack:** tecnologias estudadas e usadas, sem percentuais fictícios.
5. **Jornada:** evolução técnica e próximos focos.
6. **Contato:** canais públicos e formulário via FormSubmit AJAX, com honeypot anti-spam e link `mailto:` de contingência.
7. **Currículo:** página HTML para leitura no site, com download do PDF e opção de impressão/salvamento em PDF.
7. **Estudos de caso:** EleiNexus, ChurchManager, SeguroGestor, Portfolio V1, SPI API, Lanchonete e Estruturas condicionais.

## Estrutura técnica

- `index.html`: página inicial e catálogo.
- `assets/css/cinematic.css`: tokens do tema escuro, responsividade, cartões de projeto, filtros e animações.
- `assets/js/cinematic.js`: navegação, filtros exclusivos, progresso, revelação e formulário de contato.
- `assets/brand/atom.svg`: marca original usada na V1.
- `assets/brand/otn-share.svg`: cartão social.
- `projetos/`: páginas estáticas independentes por projeto.
- `preview-mobile.html`: moldura adaptável para revisar a página real.

## Estado honesto dos recursos

A UI não prova, por si só, que sistemas externos estão disponíveis ou que módulos descritos estejam concluídos. Cada página deve separar objetivo, tecnologia conhecida, recursos confirmados e pendências. Evitar métricas inventadas, títulos de proficiência sem evidência e promessas de produto pronto.

## Segurança e administração

Uma área de proprietário deve usar provedor de identidade, recuperação segura e segundo fator para contas privilegiadas. Toda operação sensível precisa validar a identidade e a permissão no servidor. Esconder botões no frontend não constitui autorização. Sem serviço backend devidamente integrado, a administração é considerada pendente.

## Checklist de aceite

- [ ] Páginas, links internos e links de retorno funcionam.
- [ ] Os sete estudos de caso carregam a identidade e os estilos comuns.
- [ ] O catálogo mostra um projeto por linha em desktop e mobile, com descrições legíveis.
- [ ] Navegação permanece alinhada e usável em mobile.
- [ ] Filtros selecionam somente uma categoria e o estado visual acompanha `aria-pressed`.
- [ ] Não existe alternância para modo claro.
- [ ] Currículo pode ser lido no site, baixado em PDF e impresso/salvo como PDF.
- [ ] Layout testado em 320, 360, 390, 430, 768, 1024 e 1440 px.
- [ ] Sem overflow horizontal, exceções JavaScript ou recursos locais ausentes.
- [ ] Movimento reduzido respeitado.
- [ ] Workflow de publicação verificado e URL de produção aberta antes de anunciar deploy.
