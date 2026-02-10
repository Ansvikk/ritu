function checkPass() {
  const pass = document.getElementById("pass").value;
  if (pass === "ritvik0205") {   // CHANGE PASSWORD HERE
    window.location.href = "photos1.html";
  } else {
    document.getElementById("error").innerText = "Wrong secret 😜";
  }
}

function togglePassword() {
  const passInput = document.getElementById("pass");
  passInput.type = passInput.type === "password" ? "text" : "password";
}

function moveNo() {
  const noBtn = document.getElementById("noBtn");
  noBtn.style.left = Math.random() * 200 + "px";
  noBtn.style.top = Math.random() * 100 + "px";
}

function yesClicked() {
  document.getElementById("response").innerText =
    "YAYYYY 🥹💖 You just made me the happiest person alive!";

  // ✅ Correct way: add class
  document.getElementById("yesPhotos").classList.add("show");

  // Start heart animation
  startHearts();
}


function startHearts() {
  for (let i = 0; i < 40; i++) {
    createHeart();
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 2 + 3) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}



