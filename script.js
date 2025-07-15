// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".scroll", {
  yPercent: -100, 
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: ".hero",
  }
});

gsap.from(".feature-card", {
  scrollTrigger: {
    trigger: ".features-panel",
    start: "top 80%"
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out"
});

window.addEventListener("DOMContentLoaded", () => {
  const featuresBg = document.getElementById("features-bg");
  if (featuresBg) {
    featuresBg.addEventListener("canplay", () => {
      featuresBg.playbackRate = 0.5; // 0.5x = half speed
    });
  }
});
