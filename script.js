// =======================
// ISTHATBAYEZID SCRIPT
// =======================

// Search Links
const searchInput = document.getElementById("search");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    const links = document.querySelectorAll(".link-card");

    links.forEach(link => {
      const text = link.innerText.toLowerCase();

      if (text.includes(value)) {
        link.style.display = "flex";
      } else {
        link.style.display = "none";
      }
    });
  });
}

// Theme
const themeBtn = document.getElementById("theme-btn");

function loadTheme() {
  const theme = localStorage.getItem("theme");

  if (theme === "light") {
    document.body.classList.add("light");
    if (themeBtn) themeBtn.innerHTML = "🌙 Dark Mode";
  }
}

loadTheme();

if (themeBtn) {

  themeBtn.onclick = function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

      localStorage.setItem("theme", "light");

      themeBtn.innerHTML = "🌙 Dark Mode";

    } else {

      localStorage.setItem("theme", "dark");

      themeBtn.innerHTML = "☀️ Light Mode";

    }

  };

}

// Copy Link

function copyWebsite(){

navigator.clipboard.writeText(window.location.href);

alert("Website Link Copied");

}

// Share

function shareWebsite(){

if(navigator.share){

navigator.share({

title:document.title,

text:"Visit My Website",

url:window.location.href

});

}else{

copyWebsite();

}

}

// Button Animation

document.querySelectorAll(".link-card").forEach(btn=>{

btn.addEventListener("click",()=>{

btn.style.transform="scale(.95)";

setTimeout(()=>{

btn.style.transform="scale(1)";

},150);

});

});
