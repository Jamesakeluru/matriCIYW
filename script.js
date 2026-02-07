let currentPage = 1;
const totalPages = 5;
// increased to include signature page
const updatedTotalPages = 6;

function nextPage(){
  const pages = 6; // total pages now
  if(currentPage < pages){
    document.getElementById(`page${currentPage}`).classList.remove('active');
    currentPage++;
    const nextPageEl = document.getElementById(`page${currentPage}`);
    nextPageEl.classList.add('active');

    if(currentPage === pages){
      setTimeout(spawnHearts, 400);
    }
  }
}

function spawnHearts(){
  for(let i = 0; i < 40; i++){
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = (20 + Math.random() * 35) + "px";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }, i * 80);
  }
}

// Continuous floating hearts in background
setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️❦❦";
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (15 + Math.random() * 20) + "px";
  heart.style.opacity = "0.6";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 500);
