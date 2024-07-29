// Seleciona o primeiro elemento com a classe 'manual-btn'
// Embora não esteja sendo usado neste código, pode ser útil para outras funcionalidades.
var radio = document.querySelector('.manual-btn')

// Inicializa a variável 'cont' com 1, indicando a primeira imagem (ou slide).
var cont = 1

// Define o botão de rádio com o ID 'radio1' como selecionado.
// Isso marca a primeira imagem (ou slide) como visível inicialmente.
document.getElementById('radio1').checked = true

// Configura um intervalo para a troca automática de imagens.
// A função 'proximaImg' será chamada a cada 5000 milissegundos (5 segundos).
setInterval(() => {
    proximaImg() // Chama a função para avançar para a próxima imagem.
}, 5000)

// Função que avança para a próxima imagem (ou slide) no carrossel.
function proximaImg() {
    cont++ // Incrementa o contador para avançar para a próxima imagem.

    // Verifica se o contador excede o número de imagens (supondo 2 imagens).
    if (cont > 2) {
        cont = 1 // Se o contador exceder 2, reinicia para a primeira imagem.
    }

    // Atualiza o botão de rádio correspondente à imagem atual como selecionado.
    // Isso faz com que a imagem (ou slide) correspondente ao valor de 'cont' se torne visível.
    document.getElementById('radio' + cont).checked = true
}
