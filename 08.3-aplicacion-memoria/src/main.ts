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

const contenedorCartas = (document.getElementById("contenedorCartas") as HTMLDivElement)
const cartaImg = (document.getElementById("cartaImg") as HTMLImageElement)
const cartaImg1 = (document.getElementById("cartaImg1") as HTMLImageElement)

cartaImg.addEventListener('click', function () {

  girarCarta(1)
})

let urlCarta = "";
function girarCarta(carta:number):void {
   
  switch(carta){
    case 1:
      urlCarta = "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/1.png?raw=true";
      break;
    case 2:
      urlCarta = "https://github.com/Lemoncode/fotos-ejemplos/blob/main/memo/2.png?raw=true";
      break;
    }
    
    cartaImg.src = urlCarta;
    cartaImg1.src = urlCarta
  }

  // const animalesCartas = ['🐝', '🦁','🐶','🦉','🐔','🐷','🐝', '🦁','🐶','🦉','🐔','🐷',]
  // const contenedorCartas: HTMLElement = (document.getElementById("contenedorCartas") as HTMLDivElement)

  // animalesCartas.forEach((carta:string, indice) => {

  //   const nuevoDiv = document.createElement("div");

  //   nuevoDiv.className = "carta";
  //   nuevoDiv.textContent = carta;
  //   nuevoDiv.setAttribute("data-indice", indice);
  //   nuevoDiv.addEventListener('click', function() {
  //     const indiceCarta = this.getAttribute('data-indice');
  //     alert(`Hiciste clic en la carta ${indiceCarta}`);
  //   });
  //   contenedorCartas.appendChild(nuevoDiv);
  // });

  // interface InfoCarta {
  //   idFoto: number;
  //   imagen: string;
  // }
  
  
