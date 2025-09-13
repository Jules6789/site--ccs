document.addEventListener("DOMContentLoaded", function () {
  // BURGER MENU
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-links");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  // OBJECTIFS : Afficher texte au clic (mobile) ou survol (desktop)
  const objectifs = document.querySelectorAll(".objectif");

  objectifs.forEach((item) => {
    const texte = item.querySelector(".texte-objectif");
    if (!texte) return;

    // Survol pour PC
    item.addEventListener("mouseenter", () => {
      if (window.innerWidth > 768) texte.classList.add("visible");
    });

    item.addEventListener("mouseleave", () => {
      if (window.innerWidth > 768) texte.classList.remove("visible");
    });

    // Clic pour mobile
    item.addEventListener("click", () => {
      texte.classList.toggle("visible");
    });
  });

  // FAQ : Menu déroulant au clic
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    if (!question || !answer) return;

    question.addEventListener("click", () => {
      const isOpen = answer.classList.contains("active");

      // Fermer toutes les réponses
      document.querySelectorAll(".faq-answer").forEach((ans) => {
        ans.classList.remove("active");
      });

      // Ouvrir celle-ci si elle était fermée
      if (!isOpen) {
        answer.classList.add("active");
      }
    });
  });

  // AUTHENTIFICATION : formulaire de connexion
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const validUsers = ["Automne", "Oberin", "Océane", "Toki", "Vittata", "Simon"];
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;

      if (validUsers.includes(username) && password === "Quetzalcoatl#378") {
        localStorage.setItem("ccsUser", username);

        const now = new Date();
        console.log(`[CONNEXION] ${username} s'est connecté à ${now.toLocaleTimeString()} (${now.toLocaleDateString()})`);

        window.location.href = "auth.html";
      } else {
        document.getElementById("error").innerText = "Identifiant ou mot de passe incorrect.";
      }
    });
  }
});
