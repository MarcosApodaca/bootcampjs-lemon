import "./style.css";


// CONCEPTO 1

function shuffleArray(array:any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Intercambiar elementos array[i] y array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  console.log(shuffleArray(Array));
  
  


// CONCEPTO 2

const div1 = (document.getElementById("div1") as HTMLDivElement)
const div2 = (document.getElementById("div2") as HTMLDivElement)
const div3 = (document.getElementById("div3") as HTMLDivElement)
const div4 = (document.getElementById("div4") as HTMLDivElement)
const div5 = (document.getElementById("div5") as HTMLDivElement)
const div6 = (document.getElementById("div6") as HTMLDivElement)
const div7 = (document.getElementById("div7") as HTMLDivElement)
const div8 = (document.getElementById("div8") as HTMLDivElement)
const div9 = (document.getElementById("div9") as HTMLDivElement)
const div10 = (document.getElementById("div10") as HTMLDivElement)
const div11 = (document.getElementById("div11") as HTMLDivElement)
const div12 = (document.getElementById("div12") as HTMLDivElement)

const cartaImg1 = (document.getElementById("cartaImg1") as HTMLImageElement)
const cartaImg2 = (document.getElementById("cartaImg2") as HTMLImageElement)
const cartaImg3 = (document.getElementById("cartaImg3") as HTMLImageElement)
const cartaImg4 = (document.getElementById("cartaImg4") as HTMLImageElement)
const cartaImg5 = (document.getElementById("cartaImg5") as HTMLImageElement)
const cartaImg6 = (document.getElementById("cartaImg6") as HTMLImageElement)
const cartaImg7 = (document.getElementById("cartaImg7") as HTMLImageElement)
const cartaImg8 = (document.getElementById("cartaImg8") as HTMLImageElement)
const cartaImg9 = (document.getElementById("cartaImg9") as HTMLImageElement)
const cartaImg10 = (document.getElementById("cartaImg10") as HTMLImageElement)
const cartaImg11 = (document.getElementById("cartaImg11") as HTMLImageElement)
const cartaImg12 = (document.getElementById("cartaImg12") as HTMLImageElement)

div1.addEventListener('click', function () {
  girarCarta(1, cartaImg1)
})
div2.addEventListener('click', function () {
  girarCarta(2, cartaImg2)
})
div3.addEventListener('click', function () {
  girarCarta(1, cartaImg3)
})
div4.addEventListener('click', function () {
  girarCarta(2, cartaImg4)
})
div5.addEventListener('click', function () {
  girarCarta(2, cartaImg5)
})
div6.addEventListener('click', function () {
  girarCarta(1, cartaImg6)
})
div7.addEventListener('click', function () {
  girarCarta(2, cartaImg7)
})
div8.addEventListener('click', function () {
  girarCarta(1, cartaImg8)
})
div9.addEventListener('click', function () {
  girarCarta(2, cartaImg9)
})
div10.addEventListener('click', function () {
  girarCarta(1, cartaImg10)
})
div11.addEventListener('click', function () {
  girarCarta(2, cartaImg11)
})
div12.addEventListener('click', function () {
  girarCarta(1, cartaImg12)
})

let urlCarta = "";
function girarCarta(carta:number, imagen: HTMLImageElement):void {
   
  switch(carta){
    case 1:
      urlCarta = "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/1.png?raw=true";
      break;
    case 2:
      urlCarta = "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/2.png?raw=true";
      break;
    }
    
    imagen.src = urlCarta;
  
  }

  // CONCEPTO 5

  // const animalesCartas = ['🐝', '🦁','🐶','🦉','🐔','🐷','🐝', '🦁','🐶','🦉','🐔','🐷',]
  // const contenedorCartas: HTMLElement = (document.getElementById("contenedorCartas") as HTMLDivElement)


 
