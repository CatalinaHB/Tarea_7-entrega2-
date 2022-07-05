var abrir_carrito = document.getElementById('boton_carrito')
var overlay = document.getElementById('overlay')
var popup = document.getElementById('popup')
var cerrar_carrito = document.getElementById('btn-cerrar-popup')

abrir_carrito.addEventListener('click',function(){
    overlay.classList.add('active')
    popup.classList.add('active')
})

cerrar_carrito.addEventListener('click',function(e){
    e.preventDefault()
    overlay.classList.remove('active')
    popup.classList.remove('active')
})