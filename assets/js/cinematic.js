(() => {
  "use strict";
  const root = document.documentElement;
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  // Tema acessível: preferência local, com fallback caso o armazenamento seja bloqueado.
  const themeToggle = $("#themeToggle");
  const setTheme = (theme) => {
    const next = theme === "light" ? "light" : "dark";
    root.dataset.theme = next;
    if (themeToggle) {
      const label = next === "dark" ? "Ativar tema claro" : "Ativar tema escuro";
      themeToggle.setAttribute("aria-label", label);
      themeToggle.title = label;
      const icon = $(".theme-icon", themeToggle);
      const text = $(".theme-label", themeToggle);
      if (icon) icon.textContent = next === "dark" ? "☼" : "☾";
      if (text) text.textContent = next === "dark" ? "Tema claro" : "Tema escuro";
    }
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.content = next === "dark" ? "#090a0f" : "#f1eee8";
  };
  let preferredTheme = "dark";
  try { preferredTheme = localStorage.getItem("otn-theme") || "dark"; } catch (_) {}
  setTheme(preferredTheme);
  themeToggle?.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    setTheme(next);
    try { localStorage.setItem("otn-theme", next); } catch (_) {}
  });

  // Menu móvel: fecha por seleção, clique externo, Escape e retorno ao desktop.
  const menuToggle = $("#menuToggle");
  const siteNav = $("#siteNav");
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
    $("a", siteNav).forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
        closeMenu(); menuToggle.focus();
      }
    });
    document.addEventListener("pointerdown", event => {
      if (menuToggle.getAttribute("aria-expanded") !== "true") return;
      if (siteNav.contains(event.target) || menuToggle.contains(event.target)) return;
      closeMenu();
    });
    window.addEventListener("resize", () => { if (window.innerWidth > 820) closeMenu(); }, { passive: true });
  }

  // Indicador de navegação. A mudança de estado usa cor, não reposiciona a barra.
  const navLinks = $$('a[href^="#"]', siteNav || document).filter(link =>
    ["#inicio", "#sobre", "#projetos", "#stack", "#jornada", "#contato"].includes(link.getAttribute("href"))
  );
  const navSections = navLinks.map(link => $(link.getAttribute("href"))).filter(Boolean);
  const setActive = section => navLinks.forEach(link => {
    const active = link.hash === "#" + section.id;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  const initial = navLinks.find(link => link.hash === location.hash);
  if (initial) { const section = $(initial.hash); if (section) setActive(section); }
  if ("IntersectionObserver" in window && navSections.length) {
    const activeObserver = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
      if (visible) setActive(visible.target);
    }, { rootMargin: "-24% 0px -62% 0px", threshold: [0.08, 0.2, 0.4] });
    navSections.forEach(section => activeObserver.observe(section));
  }

  // Linha de progresso de leitura sem atualizar o layout a cada evento de scroll.
  const progress = $("#readingProgress");
  let ticking = false;
  const updateProgress = () => {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const percent = max > 0 ? Math.min(100, Math.max(0, window.scrollY / max * 100)) : 0;
    progress.style.width = percent.toFixed(2) + "%";
    ticking = false;
  };
  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; window.requestAnimationFrame(updateProgress); }
  }, { passive: true });
  updateProgress();

  // Filtros operam por data-category e informam seu estado pelo aria-pressed.
  const filterButtons = $$(".filter-chip[data-filter]");
  const projectItems = $$("#projectsGrid [data-category], .compact-project-grid [data-category]");
  filterButtons.forEach(button => button.addEventListener("click", () => {
    const filter = button.dataset.filter || "all";
    filterButtons.forEach(item => {
      const selected = item === button;
      item.classList.toggle("is-selected", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    projectItems.forEach(card => {
      const category = card.dataset.category || "";
      const visible = filter === "all" ||
        (filter === "web" && category === "web") ||
        (filter === "backend" && category === "backend") ||
        (filter === "academic" && category === "academic");
      card.hidden = !visible;
    });
  }));

  // Inclinação 3D apenas para mouse/trackpad; touch e movimento reduzido mantêm interface estável.
  if (!reduced && finePointer) {
    $$(".tilt-card").forEach(card => {
      card.addEventListener("pointermove", event => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        card.style.setProperty("--ry", ((x - .5) * 2.4).toFixed(2) + "deg");
        card.style.setProperty("--rx", ((.5 - y) * 2.4).toFixed(2) + "deg");
      }, { passive: true });
      card.addEventListener("pointerleave", () => {
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
      });
    });
    const stage = $("#visualStage");
    if (stage) stage.addEventListener("pointermove", event => {
      const rect = stage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      stage.style.setProperty("--pointer-rotate-x", (y * -5).toFixed(2) + "deg");
      stage.style.setProperty("--pointer-rotate-y", (x * 7).toFixed(2) + "deg");
    }, { passive: true });
  }

  // Revelação progressiva com fallback de conteúdo visível caso IO não exista.
  const revealItems = $$(".reveal-card");
  if (!reduced && "IntersectionObserver" in window && revealItems.length) {
    root.classList.add("js-reveal-ready");
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -7% 0px", threshold: .06 });
    revealItems.forEach(item => revealObserver.observe(item));
  }

  // O formulário prepara um mailto, sem backend e sem armazenamento da mensagem.
  const form = $("#contactForm");
  const formNote = $("#formNote");
  form?.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) return;
    const subject = encodeURIComponent("Contato pelo portfólio — " + name);
    const body = encodeURIComponent("Nome: " + name + "\nE-mail: " + email + "\n\nMensagem:\n" + message);
    if (formNote) formNote.textContent = "Seu aplicativo de e-mail será aberto para revisar e enviar a mensagem.";
    window.location.href = "mailto:otinieljonathan2804@gmail.com?subject=" + subject + "&body=" + body;
  });

  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());
})();