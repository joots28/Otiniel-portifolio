(() => {
  "use strict";

  const root = document.documentElement;
  const year = document.getElementById("year");
  root.dataset.theme = "dark";
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

  // Navegação superior sólida e responsiva (sem glass/liquid indicator).
  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");
  const navLinks = siteNav ? Array.from(siteNav.querySelectorAll('a[href^="#"]')) : [];

  const closeMenu = () => {
    if (!menuToggle || !siteNav) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    siteNav.classList.remove("is-open");
  };

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const open = menuToggle.getAttribute("aria-expanded") !== "true";
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      siteNav.classList.toggle("is-open", open);
    });

    navLinks.forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape" || menuToggle.getAttribute("aria-expanded") !== "true") return;
      closeMenu();
      menuToggle.focus();
    });

    document.addEventListener("click", (event) => {
      if (menuToggle.getAttribute("aria-expanded") !== "true") return;
      if (siteNav.contains(event.target) || menuToggle.contains(event.target)) return;
      closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 820) closeMenu();
    }, { passive: true });
  }

  // Active state follows the visible section without moving/resizing the menu.
  const observedSections = navLinks
    .map((link) => document.getElementById((link.getAttribute("href") || "").slice(1)))
    .filter(Boolean);

  const setActiveLink = (activeLink) => {
    navLinks.forEach((link) => {
      const active = link === activeLink;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  const initialHashLink = navLinks.find((link) => link.hash && link.hash === window.location.hash);
  if (initialHashLink) setActiveLink(initialHashLink);

  if ("IntersectionObserver" in window && observedSections.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const link = navLinks.find((candidate) => candidate.hash === "#" + visible.target.id);
      if (link) setActiveLink(link);
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0.1, 0.25, 0.45] });

    observedSections.forEach((section) => sectionObserver.observe(section));
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