# OTINIEL Portfolio V2

Portfólio público de **Jonathan Otiniel**, em HTML, CSS e JavaScript, com direção visual cyber-gótica editorial, navegação inferior flutuante e layout responsivo.

## Princípios
- O site público é aberto: **não exige login** para ver projetos ou documentação.
- Custo operacional previsto: **R$ 0**, com hospedagem estática e sem banco/backend no MVP.
- Tema escuro por padrão, alternância para tema claro.
- HTML, CSS e JavaScript separados; sem TypeScript ou framework obrigatório.
- Efeitos e animações devem respeitar `prefers-reduced-motion`, manter os controles acessíveis e não esconder informação essencial.
- E-mail público: **otinieljonathan2804@gmail.com**.
- O formulário atual prepara uma mensagem via `mailto:`. Não envia diretamente por servidor.

## Estrutura
```text
.
├── index.html
├── assets/
│   ├── css/style.css
│   └── js/main.js
├── projetos/
└── docs/PORTFOLIO-V2-MAPA.md
```

## Rodar localmente
Abra `index.html` ou execute na raiz:
```bash
python -m http.server 8000
```
Depois visite `http://localhost:8000`.

### Prévia mobile

Abra `preview-mobile.html` no GitHub Pages para conferir a versão responsiva dentro de uma moldura de dispositivo. Use **Abrir direto** para testar a página sem moldura. A prévia usa a aplicação real, não uma captura de tela.

## Publicação
O site é estático e pode ser hospedado gratuitamente em GitHub Pages para um repositório público. Antes de declarar o site publicado, confira a branch e a fonte configuradas em **Settings → Pages** e valide um workflow concluído com sucesso.

## Escopo do primeiro release
- Página inicial responsiva, tema claro/escuro e navegação com indicador líquido.
- Estudos de caso estáticos e projetos com status honesto.
- Seções Sobre, Stack e Contato.
- Sem painel administrativo, contas de colaboradores, banco de dados, webhooks ou autenticação de visitantes.
- Não apresentar funcionalidades, métricas, capturas ou resultados como reais sem evidência.

## Créditos
Projeto pessoal de Jonathan Otiniel. Para decisões e requisitos do conceito, consulte [o mapa da V2](docs/PORTFOLIO-V2-MAPA.md).
