const arrayObj = [
    { cor1: '#FF5733', cor2: '#33FF57', cor3: '#3366FF' }, // Laranja, verde e azul
    { cor1: '#FFD700', cor2: '#C0C0C0', cor3: '#800080' }, // Dourado, prata e roxo
    { cor1: '#FF6347', cor2: '#4169E1', cor3: '#FFFF00' }, // Vermelho, azul royal e amarelo
    { cor1: '#2E8B57', cor2: '#8A2BE2', cor3: '#FF4500' }, // Verde marinho, roxo e laranja avermelhado
    { cor1: '#FFA07A', cor2: '#20B2AA', cor3: '#9370DB' }, // Salmão, verde mar, violeta médio
    { cor1: '#1E90FF', cor2: '#FF1493', cor3: '#00CED1' }, // Azul céu, rosa profundo, turquesa
    { cor1: '#7FFF00', cor2: '#FF69B4', cor3: '#FF7F50' }, // Verde chartreuse, rosa choque, coral
    { cor1: '#32CD32', cor2: '#BA55D3', cor3: '#6495ED' }, // Verde limão, orquídea média, azul ardósia claro
];

const titulo = document.querySelector('.titulo');
const btn = document.querySelector('.btn');
const header = document.querySelector('.cabecalho');
const body = document.querySelector('.body');

// function getColorRandon(){
//     const randomColor = arrayObj[Math.floor(Math.random() * arrayObj.length)];
//     const randomIndex = Math.floor(Math.random() * 3); // Escolhe uma cor aleatória entre as três disponíveis
//     console.log(randomIndex)
//     return randomColor[`cor${randomIndex}`]; // Retorna a cor selecionada
// }

function getColorRandon(){
    const randomColor = arrayObj[Math.floor(Math.random() * arrayObj.length)];
    console.log(randomColor)
    return randomColor;
}

function changeTitleColor(){
    btn.addEventListener('click', () => {
        let titleColor = getColorRandon()
        titulo.style.color = titleColor.cor1;
    })
}

function changeHeaderBackgroundColor(){
    btn.addEventListener('click', () => {
        header.style.backgroundColor = getColorRandon();
    })
}

function changeBodyBackgroundColor(){
    btn.addEventListener('click', () => {
        body.style.backgroundColor = getColorRandon();
    })
}

changeTitleColor();
changeHeaderBackgroundColor();
changeBodyBackgroundColor();
  
