(() => {
  "use strict";

  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle?.querySelector(".theme-icon");
  const year = document.getElementById("year");

  // O tema fica nesta sessão; nenhuma informação pessoal é armazenada.
  let theme = "dark";
  try {
    const savedTheme = sessionStorage.getItem("otiniel-theme");
    if (savedTheme === "light" || savedTheme === "dark") theme = savedTheme;
  } catch {
    // O site continua funcional mesmo quando o armazenamento está bloqueado.
  }

  function applyTheme(nextTheme) {
    theme = nextTheme;
    root.dataset.theme = theme;
    if (themeIcon) themeIcon.textContent = theme === "dark" ? "◐" : "◑";
    themeToggle?.setAttribute("aria-label", theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro");
    try {
      sessionStorage.setItem("otiniel-theme", theme);
    } catch {
      // Preferência temporária, sem impedir a navegação.
    }
  }

  applyTheme(theme);
  themeToggle?.addEventListener("click", () => applyTheme(theme === "dark" ? "light" : "dark"));
  if (year) year.textContent = String(new Date().getFullYear());

  // Expansão acessível dos detalhes do projeto.
  document.querySelectorAll(".project-details-trigger").forEach((button) => {
    button.addEventListener("click", () => {
      const panelId = button.getAttribute("aria-controls");
      const panel = panelId ? document.getElementById(panelId) : null;
      if (!panel) return;
      const willOpen = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(willOpen));
      panel.hidden = !willOpen;
      const symbol = button.querySelector("span");
      if (symbol) symbol.textContent = willOpen ? "−" : "＋";
    });
  });

  // Barra inferior persistente com indicador líquido.
  const nav = document.querySelector(".bottom-nav");
  const navLinks = Array.from(document.querySelectorAll(".nav-item"));
  const sections = navLinks
    .map((link) => {
      const href = link.getAttribute("href") || "";
      return href.startsWith("#") ? document.getElementById(href.slice(1)) : null;
    })
    .filter(Boolean);

  function updateLiquidIndicator(activeLink) {
    if (!nav || !activeLink) return;

    // Recalcula após a mudança de layout para manter o indicador alinhado.
    window.requestAnimationFrame(() => {
      const navRect = nav.getBoundingClientRect();
      const itemRect = activeLink.getBoundingClientRect();
      const left = itemRect.left - navRect.left - nav.clientLeft;
      nav.style.setProperty("--liquid-left", Math.max(4, left) + "px");
      nav.style.setProperty("--liquid-width", Math.max(24, itemRect.width) + "px");
      nav.style.setProperty("--liquid-height", Math.max(36, itemRect.height) + "px");
      nav.style.setProperty("--liquid-top", Math.max(3, itemRect.top - navRect.top - nav.clientTop) + "px");
    });
  }

  function setActiveNav(activeLink) {
    if (!activeLink) return;
    navLinks.forEach((link) => {
      const active = link === activeLink;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    window.requestAnimationFrame(() => updateLiquidIndicator(activeLink));
  }

  const initialActive = navLinks.find((link) => link.classList.contains("is-active")) || navLinks[0];
  setActiveNav(initialActive);
  navLinks.forEach((link) => link.addEventListener("click", () => setActiveNav(link)));
  const refreshLiquidIndicator = () => {
    const active = navLinks.find((link) => link.classList.contains("is-active"));
    if (active) window.requestAnimationFrame(() => updateLiquidIndicator(active));
  };
  window.addEventListener("resize", refreshLiquidIndicator, { passive: true });
  window.addEventListener("orientationchange", refreshLiquidIndicator, { passive: true });
  window.addEventListener("pageshow", refreshLiquidIndicator);
  window.addEventListener("load", refreshLiquidIndicator, { once: true });

  // Recalcula quando fontes, orientação ou largura dos itens mudarem após o primeiro layout.
  if ("ResizeObserver" in window && nav) {
    try {
      const navResizeObserver = new ResizeObserver(refreshLiquidIndicator);
      navResizeObserver.observe(nav);
      navLinks.forEach((link) => navResizeObserver.observe(link));
    } catch {
      // O resize listener permanece como fallback em navegadores antigos.
    }
  }

  if ("IntersectionObserver" in window && sections.length) {
    try {
      const sectionObserver = new IntersectionObserver((entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const link = navLinks.find((candidate) => candidate.getAttribute("href") === "#" + visible.target.id);
        if (link) setActiveNav(link);
      }, { rootMargin: "-20% 0px -58% 0px", threshold: [0, 0.12, 0.3, 0.55] });
      sections.forEach((section) => sectionObserver.observe(section));
    } catch {
      // A navegação por âncoras continua funcional sem o observador.
    }
  }

  // Efeito de luz acompanha o mouse; desligado em telas touch e movimento reduzido.
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!reduceMotion && finePointer) {
    let pointerFrame = 0;
    document.addEventListener("pointermove", (event) => {
      if (pointerFrame) return;
      pointerFrame = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--pointer-x", event.clientX + "px");
        document.documentElement.style.setProperty("--pointer-y", event.clientY + "px");
        pointerFrame = 0;
      });
    }, { passive: true });
  }

  // Formulário sem backend: valida e abre o cliente de e-mail do visitante.
  // Não envia dados a um servidor nem armazena a mensagem.
  const form = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) return;

    const subject = encodeURIComponent("Contato pelo portfólio — " + name);
    const body = encodeURIComponent("Nome: " + name + "\nE-mail: " + email + "\n\nMensagem:\n" + message);
    if (formNote) formNote.textContent = "Seu aplicativo de e-mail será aberto para você revisar e enviar a mensagem.";
    window.location.href = "mailto:otinieljonathan2804@gmail.com?subject=" + subject + "&body=" + body;
  });

  // Animações de entrada progressiva: leves, acessíveis e sem dependências.
  const motionReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const revealTargets = document.querySelectorAll(
    ".section-heading, .featured-project, .compact-card, .about-lead, .principles > div, .stack-board, .contact-layout"
  );
  if (!motionReduced && "IntersectionObserver" in window) {
    document.documentElement.classList.add("reveal-ready");
    revealTargets.forEach((element) => element.classList.add("reveal-on-scroll"));
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    revealTargets.forEach((element) => revealObserver.observe(element));
  }


})();