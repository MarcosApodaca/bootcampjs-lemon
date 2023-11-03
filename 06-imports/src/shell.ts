import "./style.css";
import { handleCompruebaClick, btnCarta, suceso, planto, plantarse } from "./ui";


btnCarta.addEventListener('click', handleCompruebaClick)

planto.addEventListener("click", plantarse)

suceso.addEventListener("click", handleCompruebaClick)