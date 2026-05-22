document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.querySelector("#eu h1");
    
    const textoOriginal = titulo.innerText.trim(); 
    titulo.innerText = "";
    
    let i = 0;
    function digitar() {
        if (i < textoOriginal.length) {
            titulo.innerHTML += textoOriginal.charAt(i);
            i++;
            setTimeout(digitar, 70); 
        }
    }
    
    setTimeout(digitar, 300); 
});