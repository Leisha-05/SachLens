document.addEventListener("DOMContentLoaded", () => {
  const analyzeBtn = document.getElementById("analyzeBtn");
  const resultSection = document.getElementById("resultSection");
  const detectAnotherBtn = document.getElementById("detectAnother");

  const emotionResult = document.getElementById("emotionResult");
  const biasResult = document.getElementById("biasResult");
  const credibilityResult = document.getElementById("credibilityResult");
  const manipulationResult = document.getElementById("manipulationResult");
  const textInput = document.getElementById("textInput");

  // Dummy response generator
  function generateAnalysis(text) {
    return {
      emotion: {
        label: "High Emotional Tone",
        icon: "🔥",
        color: "#ff4b2b"
      },
      bias: {
        label: "Cultural Bias Detected",
        icon: "🧠",
        color: "#ffa500"
      },
      credibility: {
        label: "Moderate Credibility Source",
        icon: "📉",
        color: "#f0c330"
      },
      manipulation: {
        label: "Loaded Language, Fear Appeals",
        icon: "⚠️",
        color: "#d9534f"
      }
    };
  }

  analyzeBtn.addEventListener("click", () => {
    const text = textInput.value.trim();
    if (!text) {
      alert("Please paste a headline or article to analyze.");
      return;
    }

    const result = generateAnalysis(text);

    emotionResult.innerHTML = `<span style="color:${result.emotion.color}; font-weight:bold;">${result.emotion.icon} ${result.emotion.label}</span>`;
    biasResult.innerHTML = `<span style="color:${result.bias.color}; font-weight:bold;">${result.bias.icon} ${result.bias.label}</span>`;
    credibilityResult.innerHTML = `<span style="color:${result.credibility.color}; font-weight:bold;">${result.credibility.icon} ${result.credibility.label}</span>`;
    manipulationResult.innerHTML = `<span style="color:${result.manipulation.color}; font-weight:bold;">${result.manipulation.icon} ${result.manipulation.label}</span>`;

    resultSection.style.display = "flex";
    resultSection.classList.add("fade-in");
    resultSection.scrollIntoView({ behavior: "smooth" });
  });

  detectAnotherBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    textInput.value = "";
    resultSection.style.display = "none";
  });
});

// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});









