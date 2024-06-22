import "./style.css";



const recuperarTag = (value:any) => {
    const regexp = /<img\s[^>]*(?<url>src="([^"]*)")[^>]*>/g

    const coincidencia = regexp.exec(value);

    if(coincidencia) {
        const {url} = coincidencia.groups as any
        render(url)
        return true
    }else{
        console.log('error');
        return false
    }
}

const crearDivElemento = () =>{
    
    const imgContainer = document.createElement('img');

}

const render = (url:any) => {
    const contenedorImg = document.getElementById('contenedorImg') as HTMLInputElement
    contenedorImg.innerHTML = ''
    contenedorImg.appendChild(url)
}

const extraerTextArea = () => {

const inputText = document.getElementById('inputText') as HTMLTextAreaElement
if (inputText) {
    const value = inputText.value;  
    recuperarTag(value)

} else {
    console.error('Input element not found');
}

}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById('button');
    if (button) {
        button.addEventListener('click', extraerTextArea);
    }
});