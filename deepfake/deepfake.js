document.addEventListener("DOMContentLoaded", () => {
// NAVBAR SCROLL EFFECT
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});

  const analyzeBtn = document.getElementById("analyzeBtn");
  const resetBtn = document.getElementById("resetBtn");
  const mediaInput = document.getElementById("mediaInput");
  const resultBox = document.getElementById("result-box");
  const verdict = document.getElementById("verdict");
  const confidence = document.getElementById("confidence");
  const reason = document.getElementById("reason");
  const scoreBar = document.getElementById("score-bar");

  analyzeBtn.addEventListener("click", () => {
    if (!mediaInput.files.length) {
      alert("Please upload an image or video first.");
      return;
    }
    resultBox.classList.remove("hidden");
    setTimeout(() => {
      resultBox.scrollIntoView({ behavior: "smooth" });
    }, 100); 

    verdict.textContent = "Analyzing...";
    confidence.textContent = "Confidence Score: --%";
    reason.textContent = "Reason: --";
    scoreBar.style.width = "0%";
    scoreBar.style.backgroundColor = "#999";

    // Simulated AI analysis
    setTimeout(() => {
      const isFake = Math.random() > 0.5;
      const score = Math.floor(Math.random() * 41) + 60;

      verdict.textContent = isFake ? "⚠️ Deepfake Detected" : "✅ Authentic Media";
      confidence.textContent = `Confidence Score: ${score}%`;
      reason.textContent = isFake
        ? "Detected synthetic textures and facial inconsistencies."
        : "No visual or auditory anomalies found.";
      scoreBar.style.width = `${score}%`;
      scoreBar.style.backgroundColor = isFake ? "#e74c3c" : "#2ecc71";
    }, 1800);
  });

resetBtn.addEventListener("click", () => {
  mediaInput.value = "";
  resultBox.classList.add("hidden");

  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, 100);
});

});












