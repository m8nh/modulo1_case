document.addEventListener('DOMContentLoaded',() => {
    const arraydeCartas = [
        {
            name: '1',
            img: 'https://cloud-5ystxzer7.vercel.app/11.png'
        },
        {
            name: '2',
            img: 'https://cloud-5ystxzer7.vercel.app/22.png'
        },
        {
            name: '3',
            img: 'https://cloud-5ystxzer7.vercel.app/33.png'
        },
        {
            name: '4',
            img: 'https://cloud-5ystxzer7.vercel.app/44.png'
        },
        {
            name: '5',
            img: 'https://cloud-5ystxzer7.vercel.app/55.png'
        },
        {
            name: '6',
            img: 'https://cloud-5ystxzer7.vercel.app/06.png'
        },
        {
            name: '1',
            img: 'https://cloud-5ystxzer7.vercel.app/11.png'
        },
        {
            name: '2',
            img: 'https://cloud-5ystxzer7.vercel.app/22.png'
        },
        {
            name: '3',
            img: 'https://cloud-5ystxzer7.vercel.app/33.png'
        },
        {
            name: '4',
            img: 'https://cloud-5ystxzer7.vercel.app/44.png'
        },
        {
            name: '5',
            img: 'https://cloud-5ystxzer7.vercel.app/55.png'
        },
        {
            name: '6',
            img: 'https://cloud-5ystxzer7.vercel.app/06.png'
        }
    ]
    arraydeCartas.sort(() => 0.5 - Math.random())
    const tabuleiro = document.querySelector('.tabuleiro')
    const resultado = document.querySelector('#pontuacao')
        const placeholder = 'https://cloud-5ystxzer7.vercel.app/7placeholder.png'
        const branco = 'https://cloud-5ystxzer7.vercel.app/6blank.png'

    let cartasClicadas = []
    let cartasClicadasId = []
    let cartasCombinadas = []
    let td = 0;

    function criarTabuleiro() {
        for (let i = 0; i < arraydeCartas.length; i++){
            let carta = document.createElement('img')
            carta.setAttribute('src', placeholder)
            carta.setAttribute('data-id', i)
            carta.addEventListener('click', viraCarta)
            tabuleiro.appendChild(carta)
        }
    }

    function viraCarta() {
        let cartaID = this.getAttribute('data-id')
        cartasClicadas.push(arraydeCartas[cartaID].name)
        cartasClicadasId.push(cartaID)
        this.setAttribute('src', arraydeCartas[cartaID].img)
        if (cartasClicadas.length === 2){
            setTimeout(checarPorCambinacao,500);
        }
    }

    function checarPorCambinacao() {
        let cartas = document.querySelectorAll('img')
        const primeiraCarta = cartasClicadasId[0]
        const segundaCarta = cartasClicadasId[1]
        if (primeiraCarta === segundaCarta) {
            cartas[primeiraCarta].setAttribute('src', placeholder)
            cartas[segundaCarta].setAttribute('src', placeholder)
            alert('You clicked on the same letter!')
        } else if (cartasClicadas[0] === cartasClicadas[1]) {
            cartas[primeiraCarta].setAttribute('src', branco)
            cartas[segundaCarta].setAttribute('src', branco)
            cartasCombinadas.push(cartasClicadas)
            cartas[primeiraCarta].removeEventListener('click', viraCarta)
            cartas[segundaCarta].removeEventListener('click', viraCarta)
            td++;
            document.getElementById('ponto').innerHTML = td;

        } else {
            cartas[primeiraCarta].setAttribute('src', placeholder)
            cartas[segundaCarta].setAttribute('src', placeholder)
        }
        cartasClicadas = []
        cartasClicadasId = []
        console.log(cartasCombinadas)
        resultado.textContent = cartasCombinadas.length;
        console.log(resultado)
        if (cartasCombinadas.length === arraydeCartas.length / 2) {
            resultado.textContent = 'Congratulations! You found all the cards!'
        }
    }
    criarTabuleiro()

})
function j() {
    location.reload();
}
