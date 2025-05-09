document.addEventListener("DOMContentLoaded", () => {
  // Seleciona os elementos necessários
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".overlay");
  const closeButton = document.querySelector(".close-button");

  // Verifica se os elementos existem antes de adicionar os event listeners
  if (hamburger && mobileMenu && overlay) {
    // Função para alternar o menu
    function toggleMenu() {
      hamburger.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      overlay.classList.toggle("active");

      // Impede o scroll quando o menu está aberto
      if (mobileMenu.classList.contains("active")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }

    // Adiciona evento de clique ao hambúrguer
    hamburger.addEventListener("click", (e) => {
      e.preventDefault();
      toggleMenu();
    });

    // Adiciona evento de clique ao botão de fechar (X)
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        toggleMenu();
      });
    }

    // Fecha o menu ao clicar no overlay
    overlay.addEventListener("click", () => {
      toggleMenu();
    });

    // Fecha o menu ao clicar em um link
    const mobileLinks = document.querySelectorAll(".mobile-menu a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        toggleMenu();
      });
    });
  } else {
    console.error("Um ou mais elementos do menu não foram encontrados");
  }
});
