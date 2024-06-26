import "./style.css";



export const recuperarTag = (value:string): boolean => {
    const regexp = /<img\s[^>]*(?<url>src="([^"]*)")[^>]*>/g

    let coincidencia;
    const url = [];

    while ((coincidencia = regexp.exec(value)) !== null) {
        url.push(coincidencia[2]); 
    }

    if (url.length > 0) {
        render(url);
        return true;
    } else {
        console.log('No se encontraron URLs');
        return false;
    }
}



const render = (url:string[] ) :void => {
    
    const contenedorImg = document.getElementById('contenedorImg') as HTMLInputElement
    contenedorImg.innerHTML = ''
    url.forEach((url: string) => {
        const div = document.createElement('div');
        div.textContent = url;
        contenedorImg.appendChild(div);
    });
}

const extraerTextArea = () => {

const inputText = document.getElementById('inputText') as HTMLTextAreaElement
if (inputText) {
    const value = inputText.value;  
    recuperarTag(value);

} else {
    console.error('Input element not found');
}

}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById('button');
    if (button) {
        button.addEventListener('click', extraerTextArea)
    }
});

