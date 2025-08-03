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
});
