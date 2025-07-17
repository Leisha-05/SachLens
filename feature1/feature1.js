document.addEventListener("DOMContentLoaded", () => {
  // ===== Scroll-triggered navbar background toggle =====
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  });

  // ===== Analyzer Elements =====
  const analyzeBtn = document.getElementById("analyzeBtn");
  const resetBtn = document.getElementById("resetBtn");
  const input = document.getElementById("news-input");
  const resultBox = document.getElementById("result-box");
  const verdict = document.getElementById("verdict");
  const confidence = document.getElementById("confidence");
  const scoreBar = document.getElementById("score-bar");
  const analyzerSection = document.getElementById("analyzer");

  // ===== Analyze Button Functionality =====
  analyzeBtn.addEventListener("click", () => {
    const text = input.value.trim();

    if (text === "") {
      alert("Please enter some news text or a link to analyze.");
      return;
    }

    resultBox.style.display = "block";
    verdict.textContent = "Analyzing...";
    confidence.textContent = "Confidence Score: --%";
    scoreBar.style.width = "0%";
    scoreBar.style.backgroundColor = "#999";

    // Smooth scroll to result
    setTimeout(() => {
      const isFake = Math.random() > 0.5;
      const confidenceScore = Math.floor(Math.random() * 41) + 60;

      verdict.textContent = isFake ? "⚠️ Likely Fake News" : "✅ Likely Real News";
      confidence.textContent = `Confidence Score: ${confidenceScore}%`;
      scoreBar.style.width = `${confidenceScore}%`;
      scoreBar.style.backgroundColor = isFake ? "#e74c3c" : "#2ecc71";

      // ✅ Scroll to result
      resultBox.scrollIntoView({ behavior: "smooth" });
    }, 1500);
  });

  // ===== Reset Button =====
  resetBtn.addEventListener("click", () => {
    input.value = "";
    resultBox.style.display = "none";

    // ✅ Scroll back to top of analyzer section
   const yOffset = -100; // Adjust this based on your navbar height
const y = analyzerSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
window.scrollTo({ top: y, behavior: "smooth" });

  });
});
