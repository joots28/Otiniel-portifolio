(() => {
  "use strict";
  const root = document.documentElement;
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  // Identidade exclusivamente escura, conforme a direção visual da V2.
  root.dataset.theme = "dark";
  const themeColor = $('meta[name="theme-color"]');
  if (themeColor) themeColor.content = "#090a0f";

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
  const setActive = section => {
    if (!section) return;
    navLinks.forEach(link => {
      const active = link.hash === "#" + section.id;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };
  // A seleção acompanha o clique imediatamente; não mantém Início marcado junto.
  navLinks.forEach(link => link.addEventListener("click", () => {
    const section = $(link.getAttribute("href"));
    if (section) setActive(section);
  }));
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

  // Filtros exclusivos: apenas um botão fica selecionado, e aria-pressed é a fonte visual de verdade.
  const filterButtons = $(".filter-chip[data-filter]");
  const filterGroup = $(".project-filters");
  const projectItems = $("#projectsGrid [data-category], .compact-project-grid [data-category]");
  const applyProjectFilter = selectedButton => {
    const filter = selectedButton.dataset.filter || "all";
    filterButtons.forEach(button => {
      const active = button === selectedButton;
      button.classList.toggle("is-selected", active);
      button.setAttribute("aria-pressed", String(active));
    });
    projectItems.forEach(card => {
      const category = card.dataset.category || "";
      const visible = filter === "all" ||
        (filter === "frontend" && category === "frontend") ||
        (filter === "backend" && category === "backend") ||
        (filter === "academic" && category === "academic");
      card.hidden = !visible;
    });
  };
  filterGroup?.addEventListener("click", event => {
    const button = event.target.closest(".filter-chip[data-filter]");
    if (!button || !filterGroup.contains(button)) return;
    applyProjectFilter(button);
  });
  // Mantém o catálogo consistente também ao entrar por deep link ou restaurar a página.
  const activeFilter = filterButtons.find(button => button.getAttribute("aria-pressed") === "true") || filterButtons[0];
  if (activeFilter) applyProjectFilter(activeFilter);

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

  // Contact form: server-side mail forwarding through FormSubmit; mailto fallback on failure.
  // The provider requires the owner to confirm the activation email before first-time submissions are delivered.
  const form = $("#contactForm");
  const formNote = $("#formNote");
  const formButton = form?.querySelector('button[type="submit"]');

  const writeFormNote = (message, fallbackHref = "") => {
    if (!formNote) return;
    formNote.replaceChildren(document.createTextNode(message + " "));
    if (fallbackHref) {
      const link = document.createElement("a");
      link.href = fallbackHref;
      link.textContent = "Enviar diretamente pelo app de e-mail ↗";
      formNote.append(document.createElement("br"), link);
    }
  };

  form?.addEventListener("submit", async event => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const honey = String(data.get("_honey") || "");
    if (!name || !email || !message || honey) return;

    const subject = encodeURIComponent("Contato pelo portfólio — " + name);
    const body = encodeURIComponent("Nome: " + name + "\nE-mail: " + email + "\n\nMensagem:\n" + message);
    const mailto = "mailto:otinieljonathan2804@gmail.com?subject=" + subject + "&body=" + body;
    const originalButton = formButton?.innerHTML;
    if (formButton) {
      formButton.disabled = true;
      formButton.textContent = "Enviando…";
    }
    writeFormNote("Enviando sua mensagem…");

    try {
      const response = await fetch("https://formsubmit.co/ajax/otinieljonathan2804@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(data.entries()))
      });
      const result = await response.json().catch(() => ({}));
      const accepted = response.ok && (
        result.success === true ||
        result.success === "true" ||
        result.success === 1 ||
        result.success === "1"
      );
      if (!accepted) {
        throw new Error(typeof result.message === "string" ? result.message : "O serviço não confirmou o envio.");
      }

      form.reset();
      writeFormNote("Mensagem encaminhada ao serviço de contato. Obrigado! Na primeira utilização, o proprietário precisa confirmar o e-mail de ativação do FormSubmit para liberar a entrega.");
    } catch (error) {
      writeFormNote("Não foi possível confirmar o envio pelo formulário. Tente novamente ou use o e-mail direto abaixo.", mailto);
    } finally {
      if (formButton) {
        formButton.disabled = false;
        formButton.innerHTML = originalButton || 'Enviar mensagem <span aria-hidden="true">↗</span>';
      }
    }
  });

  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());
})();