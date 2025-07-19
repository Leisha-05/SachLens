const languageMap = {
  hi: "हिंदी",
  bn: "বাংলা",
  ta: "தமிழ்",
  te: "తెలుగు",
  kn: "ಕನ್ನಡ",
  ml: "മലയാളം",
  or: "ଓଡ଼ିଆ",
  pa: "ਪੰਜਾਬੀ",
  gu: "ગુજરાતી",
  mr: "मराठी",
  as: "অসমীয়া",
  ur: "اردو"
};

async function translateText() {
  const input = document.getElementById('inputText').value.trim();
  const langCode = document.getElementById('languageSelect').value;
  const langName = languageMap[langCode];
  const output = document.getElementById('translatedOutput');
  const textarea = document.getElementById('inputText');

  if (!input) {
    output.innerText = "कृपया कुछ टेक्स्ट दर्ज करें।";
    return;
  }

  output.innerText = `🔄 ${langName} में अनुवाद हो रहा है...\n\n"${input}"`;

  try {
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(input)}&langpair=en|${langCode}`);
    const data = await res.json();
    const translated = data.responseData.translatedText;

    output.innerText = `🌍 ${langName} में अनुवादित पाठ:\n\n"${translated}"`;
    textarea.value = translated;
  } catch (error) {
    output.innerText = "❌ अनुवाद करते समय त्रुटि हुई। कृपया बाद में पुनः प्रयास करें।";
    console.error(error);
  }
}


// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});












