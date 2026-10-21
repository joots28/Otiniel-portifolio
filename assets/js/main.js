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

  // Marca a seção visível sem bloquear o funcionamento normal dos links.
  const navLinks = Array.from(document.querySelectorAll(".nav-item"));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === "#" + visible.target.id;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.15, 0.35, 0.6] });
    sections.forEach((section) => observer.observe(section));
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
})();