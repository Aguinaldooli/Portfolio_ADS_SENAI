// Obtém todas as imagens com a classe 'expandable-image'
const images = document.querySelectorAll(".expandable-image");

// Obtém o modal, a imagem expandida e a legenda
const modal = document.getElementById("imageModal");
const expandedImage = document.getElementById("expandedImage");
const caption = document.getElementById("caption");

// Percorre todas as imagens e adiciona um ouvinte de evento de clique
images.forEach((image) => {
  image.addEventListener("click", () => {
    // Define a imagem expandida e a legenda
    expandedImage.src = image.src;
    caption.innerHTML = image.alt;

    // Abre o modal
    modal.style.display = "block";
  });
});

// Obtém o botão de fechar o modal
const closeButton = document.querySelector(".close-button");

// Adiciona um ouvinte de evento de clique no botão de fechar
closeButton.addEventListener("click", () => {
  // Fecha o modal
  modal.style.display = "none";
});
