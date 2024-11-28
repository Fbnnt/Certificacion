const Item = document.querySelectorAll(".Item2")
const titulo = document.getElementById("section-titulo")
const botonTargeta = document.querySelectorAll(".TargetaLibro-btn") 
const botonInicio = document.getElementById("barra-btn-1")

botonInicio.addEventListener("click", () => {
    alert("Inicio de Sesión Exitoso")
})

Item.forEach(li => {
    li.addEventListener("click", () => {
        const TextLi = li.textContent
        titulo.textContent = TextLi
    })
});

botonTargeta.forEach(button => {
    button.addEventListener("click", () => {
        button.style.background = "#990000" 
        button.style.color = "#f2f2f2"
        button.textContent = "No Disponible"
    })
}); 

