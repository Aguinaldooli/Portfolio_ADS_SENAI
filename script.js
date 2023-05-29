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