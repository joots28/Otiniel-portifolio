# OTINIEL V2.5 — identidade visual e QA cromático

## Direção de arte
Cyber-gótico editorial: precisão geométrica de interfaces de desenvolvimento, construção escura, halos violeta, linhas frias e tipografia expressiva. A influência cyberpunk aparece nas grades e nos traços técnicos; a influência Opium aparece nas formas angulares e no contraste editorial. O resultado precisa continuar apropriado a um portfólio profissional.

## Marca O/N/T
- O: contorno octogonal, estrutura e assinatura.
- N: monograma central construído por linhas geométricas.
- T: eixo vertical central e marca de precisão.
- Principal em fundo dark: `assets/brand/otn-monogram.svg`.
- Variação invertida para fundo claro/uso impresso: `assets/brand/otn-monogram-inverse.svg`; esta variação não implica um tema claro no site.
- Imagem de compartilhamento 1200×630: `assets/brand/otn-share.svg`.

## Paleta
| Aplicação | Cor |
|---|---|
| Fundo principal | `#09090B` |
| Superfície | `#121018` |
| Superfície elevada | `#1B1722` |
| Texto principal | `#F3EFE7` |
| Texto secundário | `#B6ADBF` |
| Violeta metálico | `#B9A0DF` |
| Azul frio | `#8DB7D8` |
| Texto escuro em botão violeta | `#17121E` |

## Matriz de contraste
Valores calculados pela fórmula de luminância relativa WCAG. Os pares de texto abaixo excedem 4,5:1 (AA para texto normal).

| Primeiro plano | Fundo | Ratio |
|---|---|---:|
| `#F3EFE7` | `#09090B` | 17,35:1 |
| `#B6ADBF` | `#121018` | 8,73:1 |
| `#B9A0DF` | `#09090B` | 8,68:1 |
| `#8DB7D8` | `#09090B` | 9,38:1 |
| `#17121E` | `#B9A0DF` | 8,02:1 |
| `#F3EFE7` | `#1B1722` | 15,36:1 |
| `#B6ADBF` | `#1B1722` | 8,15:1 |

## Regras e testes
- Não adicionar seletor de tema; `data-theme` permanece `dark`.
- Violeta para título, contorno, seleção e foco. Azul para rótulos e pequenos realces.
- Efeitos de brilho são decorativos e não carregam informação essencial.
- Ícones e marca devem ter contorno perceptível contra o fundo.
- Animações respeitam `prefers-reduced-motion`; efeito de cursor é limitado a mouse/trackpad.
- A marca invertida é para artefatos que precisam de fundo claro; o website permanece dark.
- Testes automatizáveis nesta etapa: verificação de contraste dos tokens, ausência de theme toggle, ausência de projeto removido/nome antigo na homepage, links e referências relativas.
- QA final no navegador deve incluir 320, 360, 390, 430, 768, 1024 e 1440 px; a prévia em HTML não substitui a validação da URL servida pelo Pages.
