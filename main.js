const comentario= 
document.getElementById("comentario")
comentario.addEventListener("input", (evento)=> {
    console.log( evento.target.value)
})
