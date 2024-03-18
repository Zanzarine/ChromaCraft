const btn = document.querySelector('.btn');
const header = document.querySelector('.fake__header');
const body = document.querySelector('.content');
const container = document.querySelector('.container');
const footer = document.querySelector('.fake__footer');
const p = document.querySelector('.coresEscolhidas');
const fakeTitle = document.querySelector('.fake__title');
const fakeLink = document.querySelectorAll('.link__f');


async function buscarCores(){
    try {
        const buscarCores = await fetch('http://localhost:3000/cores');
        const cores = await buscarCores.json();
        return cores;
        
    } catch (error) {
        console.log(`Erro ao acessar as cores ${error}`);
    }
}

async function getRandomColor(){
   try {
    const color = await buscarCores();
    const randomColor =  color[Math.floor(Math.random() * color.length)];
    console.log(randomColor)
    return randomColor;
    
   } catch (error) {
    console.log(`Erro ao acessar as cores ${error}`)
   }
}

async function changeColors(){
    try {
        const arrayColors = await getRandomColor();
        header.style.backgroundColor = arrayColors.cor1;
        body.style.backgroundColor = arrayColors.cor2;
        container.style.backgroundColor = arrayColors.cor2;
        footer.style.backgroundColor =  arrayColors.cor3;
        fakeTitle.style.color = arrayColors.cor4;
        fakeLink.forEach(link => {
            link.style.color = arrayColors.cor4;
        })

        p.innerHTML = `
        Cores da paleta: 
        <span style="background-color: ${arrayColors.cor1}; color: white;">${arrayColors.cor1}</span>
        <span style="background-color: ${arrayColors.cor2}; color: white;">${arrayColors.cor2}</span>
        <span style="background-color: ${arrayColors.cor3}; color: white;">${arrayColors.cor3}</span>
        <span style="background-color: ${arrayColors.cor4}; color: white;">${arrayColors.cor4}</span> `;
   
    } catch (error) {
        console.log(`Erro ao alterar as cores do seu site ${error}`);    
    }
}

btn.addEventListener("click", changeColors);
