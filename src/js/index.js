// encontrar arquivo no html
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// identificar clique do botão 
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //desmarcar botão selecionado anterior
        const botaoselecionado = document.querySelector('.selecionado');
        botaoselecionado.classList.remove('selecionado');

        // marcar o novo botão selecionado 
        botao.classList.add('selecionado');

        //esconder immagem anterior
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');
        
        //aparecer imagem correspondente ao botão
        imagens[indice].classList.add('ativa')

     })
}) 