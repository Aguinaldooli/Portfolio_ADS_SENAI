const images = document.querySelectorAll('.carousel img');

// Adiciona o evento de clique em cada imagem
images.forEach(image => {
    image.addEventListener('click', () => {
        // Cria um elemento de imagem para exibir a imagem ampliada
        const enlargedImage = document.createElement('img');
        enlargedImage.src = image.src;
        enlargedImage.classList.add('enlarged-image');

        // Cria o botão de fechar
        const closeButton = document.createElement('button');
        closeButton.innerHTML = 'Fechar';
        closeButton.classList.add('close-button');

        // Cria uma div para envolver a imagem ampliada e o botão de fechar
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.appendChild(closeButton);
        overlay.appendChild(enlargedImage);

        // Adiciona a div de sobreposição ao corpo do documento
        document.body.appendChild(overlay);

        // Remove a div de sobreposição ao clicar no botão de fechar
        closeButton.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    });
});

window.addEventListener('load', function() {
  var carouselImages = document.querySelectorAll('.subject#automacao .carousel img');
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  var inView = [];

  function isElementVisible(element) {
    var rect = element.getBoundingClientRect();
    return rect.top < windowHeight && rect.bottom >= 0;
  }

  function updateCarouselImages() {
    inView = [];
    carouselImages.forEach(function(image) {
      if (isElementVisible(image)) {
        inView.push(image);
      }
    });

    carouselImages.forEach(function(image) {
      image.classList.remove('active');
    });

    if (inView.length > 0) {
      inView[inView.length - 1].classList.add('active');
    }
  }

  function handleScroll() {
    var automacaoSection = document.querySelector('#automacao');
    if (isElementVisible(automacaoSection)) {
      document.body.classList.add('no-scroll');
      updateCarouselImages();
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);
});