# OTINIEL Portfolio V2 — mapa de continuidade

Este documento é a referência principal para continuar o projeto em novas sessões. Manter atualizado ao alterar escopo ou decisões.

## Objetivo e publicação
- Portfólio pessoal de Jonathan Otiniel, como site estático responsivo.
- Visitantes acessam livremente todos os conteúdos públicos; **não há login para visualizar projetos**.
- Requisito de custo: R$ 0. Evitar banco de dados, backend, serviços pagos, painel administrativo e contas de colaboradores no escopo atual.
- O proprietário edita o repositório; mudanças futuras devem ser feitas por meio do fluxo de trabalho combinado com o assistente. Não adicionar colaboradores nem criar contas administrativas para visitantes.
- Hospedagem: GitHub Pages para arquivos estáticos, sem build obrigatório. Em 21/10/2026, o deploy verificado com sucesso está publicado a partir da branch `v2-foundation` (workflow `pages build and deployment`, commit `55eabaaa3394765d30cbe02b8603e8e2fe717406`). A `main` também contém a versão atualizada. Até alterar **Settings → Pages** para publicar `main` na raiz, sincronizar as alterações para `v2-foundation` em um único commit. O workflow personalizado redundante em `.github/workflows/deploy-pages.yml` foi removido porque falhava antes dos passos de deploy; não reintroduzi-lo.
- E-mail público de contato: **otinieljonathan2804@gmail.com**. Não usar endereço anterior em links ou texto do site.
- O formulário da versão atual abre o cliente de e-mail do visitante via `mailto:`; não prometer envio por servidor.

## Identidade visual aprovada
- Direção: cyber-gótica editorial refinada; evitar aparência de template genérico.
- Ritmo: abertura cinematográfica; conteúdo subsequente fluido e tecnicamente claro.
- Tema escuro por padrão, alternância manual para tema claro. Paleta base: preto `#09090B`, marfim `#F3EFE7`, violeta acinzentado `#8D75B7`, azul suave `#7CA6C9`.
- Tipografia técnico-editorial: títulos expressivos, corpo legível e rótulos monoespaçados.
- Monograma dominante com O/N e elemento T como conceito provisório. Se existir arquivo de marca original, priorizar o original em vez de substituir o desenho por letras tipográficas genéricas.
- Revelação expressiva do monograma: máscara, movimento e luz discreta.
- Animações expressivas, mas controladas; movimento reduzido respeitado.
- Efeitos de cursor com alternativa para toque; luz sutil, sem bloquear cliques.
- Navegação inferior fixa/flutuante, centralizada, visual liquid-glass, identificadores numerados e adaptação/rolagem horizontal em telas muito estreitas. Deve permanecer visível durante a rolagem.
- O rodapé encerra cinematicamente com o monograma e créditos discretos.
- Ambientação sonora foi conceituada como opcional, mas não bloquear o lançamento para implementar áudio; incluir só com controles explícitos e arquivos licenciados/originais.

## Estrutura de conteúdo aprovada
1. Início: monograma, Jonathan Otiniel, especialidade e acesso rápido aos projetos.
2. Projetos: um destaque principal — EleiNexus — seguido de grade técnica com todos os projetos relevantes por categoria.
3. Sobre: manifesto técnico-editorial, biografia curta, princípios de desenvolvimento.
4. Stack: organização por função; níveis declarados acompanhados de evidência real, sem percentuais arbitrários.
5. Diário técnico: visão editorial planejada; no MVP, manter simples e manual/estático ou ligar aos repositórios públicos, sem banco nem webhooks até que haja necessidade real.
6. Contato: nome, e-mail, mensagem; sem login para visitantes.
7. Rodapé cinematográfico com links públicos.

## Projetos e honestidade editorial
- EleiNexus: projeto principal; informação eleitoral brasileira, propostas presidenciais e informações comparativas com fontes verificáveis. Mostrar status real do desenvolvimento. Não apresentar funcionalidades planejadas como concluídas.
- ChurchManager: sistema de gestão de igreja; descrever somente escopo e funcionalidades confirmados.
- SeguroGestor: projeto acadêmico de gestão de seguros/sinistros; status e entregas devem ser verificados.
- Portfolio V1: versão anterior, com ligação ao repositório anterior se pertinente.
- Outros projetos podem ser adicionados por categoria, com links reais e status confirmado.
- Cada estudo de caso idealmente tem página estática própria: problema, objetivo, funcionalidades implementadas, arquitetura, tecnologias, desafios, limitações, aprendizados e evidências (capturas, repositório, demonstração). Sem métricas ou resultados inventados.

## Escopo removido do MVP para preservar simplicidade e R$ 0
As ideias anteriores de painel administrativo com colaboradores, OAuth, MFA, banco de dados, trilha de auditoria, webhooks, publicação editorial automática, sincronização diária, relatórios mensais automáticos e sistema de revisão **não são requisitos de lançamento**. Não reinstalar essas funções sem pedido explícito. Para este portfólio, edição do conteúdo pelo dono do repositório e conteúdo público estático são suficientes.

## Arquitetura atual
- `index.html`: página inicial.
- `assets/css/style.css`: layout, temas, responsividade, animações e navegação.
- `assets/js/main.js`: tema, navegação ativa, animações leves e formulário de contato.
- `projetos/`: estudos de caso estáticos, sem backend.
- `docs/PORTFOLIO-V2-MAPA.md`: este mapa.
- Sem TypeScript e sem dependências obrigatórias de build.

## Checklist de lançamento
- [x] Confirmar a branch de publicação atual: `v2-foundation`, com o workflow padrão do GitHub Pages concluído com sucesso em 21/10/2026.
- [ ] Opcionalmente migrar Settings → Pages para `main` / root para eliminar a necessidade de manter ambas as branches sincronizadas.
- [ ] Remover ou desativar workflows de Pages redundantes; manter apenas um método de publicação.
- [ ] Conferir a execução do deploy e validar a URL realmente publicada antes de declarar sucesso.
- [ ] Verificar links de CSS/JS e páginas de estudo de caso.
- [ ] Testar navegação fixa no celular, scroll horizontal quando necessário, indicador líquido ativo e links de âncora.
- [ ] Testar tema claro/escuro e preferência `prefers-reduced-motion`.
- [ ] Testar formulário; explicar que ele abre o app de e-mail até existir um backend explicitamente aprovado.
- [ ] Verificar contraste, foco por teclado, áreas de toque e espaço inferior para que a navegação não cubra conteúdo.
- [ ] Remover placeholders que pareçam funcionalidades concluídas.
- [ ] Confirmar que nenhuma autenticação é solicitada para acessar o portfólio público.

## Procedimento para continuar
1. Ler este mapa antes de novas alterações.
2. Verificar o estado atual dos arquivos e da URL do GitHub Pages.
3. Fazer uma mudança por vez, buscar o SHA atual do arquivo no GitHub antes de atualizar.
4. Após cada mudança, inspecionar o workflow; não afirmar publicação até verificar sucesso.
5. Manter links públicos e e-mail corretos, sem publicar credenciais ou dados sensíveis.
