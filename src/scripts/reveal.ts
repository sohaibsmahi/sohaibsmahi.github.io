const setup = () => {
  const elements = document.querySelectorAll<HTMLElement>(".reveal")
  if (!elements.length) return

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches

  if (prefersReducedMotion) {
    elements.forEach((el) => el.classList.add("is-visible"))
    return
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")
          obs.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  )

  elements.forEach((el) => observer.observe(el))
}

if (document.readyState !== "loading") {
  setup()
} else {
  document.addEventListener("DOMContentLoaded", setup)
}
