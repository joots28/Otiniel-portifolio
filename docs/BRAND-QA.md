# OTINIEL Portfolio V2 — identidade visual e QA

## Direção de arte

Editorial cinematográfica com detalhes técnicos, geometria, contraste e profundidade 3D. O site utiliza somente o tema escuro. A abertura traz um átomo animado de três órbitas inspirado no React; o monograma ONT original permanece como logo da marca.

## Logo

- `assets/brand/atom.svg` preserva o monograma vetorial original do Portfolio V1.
- `assets/brand/otn-share.svg` apresenta uma arte de compartilhamento com a mesma linguagem visual.
- A logo não é recriada por texto nem substituída por um ícone genérico.

## Paleta

| Aplicação | Cor |
| --- | --- |
| Fundo escuro | `#090A0F` |
| Superfície | `#11121A` |
| Texto marfim | `#F1EEE8` |
| Violeta de destaque | `#756DFF` |
| Azul frio | `#64B5FF` |

## Navegação e movimento

- Barra superior sólida e estável; sem vidro líquido ou animações que alterem o alinhamento.
- O menu mobile abre abaixo do cabeçalho, aceita toque e pode ser fechado por Escape.
- Transformações 3D são decorativas e aplicadas de forma controlada.
- Inclinação por ponteiro é reservada a dispositivos com mouse/trackpad.
- A preferência `prefers-reduced-motion` desativa animações e mantém conteúdo visível.
- O catálogo de projetos usa cartões de largura total, um por linha, com texto e links ampliados.
- Os filtros usam `aria-pressed`; somente a categoria ativa deve receber o preenchimento de destaque e `:hover` não pode aparentar um segundo filtro selecionado.
- O currículo tem página HTML, opção de baixar PDF e opção de imprimir/salvar como PDF.
- Foco de teclado é visível, alvos de toque têm dimensões confortáveis e o layout não depende de hover.

## Checklist visual

- [ ] 320, 360, 390, 430, 768, 1024 e 1440 px.
- [ ] Sem rolagem horizontal.
- [ ] Título e controles não colidem nas telas estreitas.
- [ ] Tema escuro consistente em links, formulários, cartões e bordas.
- [ ] Um único cartão de projeto por linha, inclusive os estudos compactos.
- [ ] Somente um filtro de categoria destacado por vez.
- [ ] Currículo abre no site e oferece download direto do PDF.
- [ ] Navegação não desaparece ou se desloca durante a rolagem.
- [ ] Movimento reduzido mantém todos os textos e controles acessíveis.
- [ ] Conferência no navegador depois de o Pages terminar a publicação.
