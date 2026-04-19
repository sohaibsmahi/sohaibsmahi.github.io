const setup = () => {
  const nav = document.getElementById("site-nav");
  const menuButton = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const openIcon = document.getElementById("menu-open-icon");
  const closeIcon = document.getElementById("menu-close-icon");

  if (nav) {
    const updateShadow = () => {
      if (window.scrollY > 8) {
        nav.classList.add("is-scrolled");
      } else {
        nav.classList.remove("is-scrolled");
      }
    };
    updateShadow();
    window.addEventListener("scroll", updateShadow, { passive: true });
  }

  if (menuButton && mobileMenu) {
    const close = () => {
      mobileMenu.classList.add("hidden");
      menuButton.setAttribute("aria-expanded", "false");
      openIcon?.classList.remove("hidden");
      closeIcon?.classList.add("hidden");
    };
    const toggle = () => {
      const isOpen = !mobileMenu.classList.contains("hidden");
      if (isOpen) {
        close();
      } else {
        mobileMenu.classList.remove("hidden");
        menuButton.setAttribute("aria-expanded", "true");
        openIcon?.classList.add("hidden");
        closeIcon?.classList.remove("hidden");
      }
    };

    menuButton.addEventListener("click", toggle);
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", close);
    });
  }
};

if (document.readyState !== "loading") {
  setup();
} else {
  document.addEventListener("DOMContentLoaded", setup);
}
