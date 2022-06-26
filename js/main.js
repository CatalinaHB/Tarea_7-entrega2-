
//Constantes//
const contenedor_productos=document.getElementById("contenedor_productos")
//Constantes botón suma//
const producto_boton_mas=document.getElementById("producto_boton_mas")
const producto_boton=document.getElementById("producto_boton")
const producto_boton_menos=document.getElementById("producto_boton_menos")
const contador=document.getElementById("contador")
//Carrito
// const abrir_carrito=document.getElementById("boton_carrito")
// const contenedor=document.getElementById("contenedor")
// const modal_contenedor=document.getElementById("modal_contenedor")[0]
//Buscador
const buscador=document.getElementById("buscador")

//Array de Productos//
let stockProductos = [
    {id:1, nombre:"Estante Metálico 1", dimensiones:"145x70x30", color:"Gris", terminación:"Galvanizado", precio:400, img:'./img/metalbrein_estante_145_70_30.jpg'},
    {id:2, nombre:"Estante Metálico 2", dimensiones:"145x70x30", color:"Gris", terminación:"Galvanizado", precio:600, img:'./img/metalbrein_estante_145_70_30.jpg'},
    {id:3, nombre:"Estante Metálico 3", dimensiones:"145x70x30", color:"Gris", terminación:"Galvanizado", precio:700, img:'./img/metalbrein_estante_145_70_30.jpg'},
    {id:4, nombre:"Estante Metálico 4", dimensiones:"145x70x30", color:"Gris", terminación:"Galvanizado", precio:900, img:'./img/metalbrein_estante_145_70_30.jpg'},
    {id:5, nombre:"Estante Metálico 5", dimensiones:"145x70x30", color:"Gris", terminación:"Galvanizado", precio:200, img:'./img/metalbrein_estante_145_70_30.jpg'},
    {id:6, nombre:"Estante Metálico 6", dimensiones:"145x70x30", color:"Gris", terminación:"Galvanizado", precio:100, img:'./img/metalbrein_estante_145_70_30.jpg'}
]
//Agregar productos automáticamente//
function mostrarProductos(){
    stockProductos.forEach(recorre=>{
        let div =document.createElement('div')
        div.className='producto'
        console.log(div)
        div.innerHTML= //**Importante: Si en vez de inner.HTML se pone inner.TEXT. Aparece puro */
        `<div class="producto_descripción">
            <div class="parte_1">
                  <img class=producto_imagen src="${recorre.img}" alt="estante_1" ><br>
                  <h3 class="producto_titulo">${recorre.nombre}</h3><br>
                  <button class="producto_boton_mas" id="producto_boton_mas${recorre.id}">  +  </button>
                  <span class="producto_contador" id="producto_boton${recorre.id}">0</span>
                  <button class="producto_boton_menos" id="producto_boton_menos${recorre.id}">  -  </button>
            </div>    
            <div class="parte_2">
                  <p>Dimensiones: ${recorre.dimensiones}</p>
                  <p>Color: ${recorre.color}</p>
                  <p>Terminación: ${recorre.terminación}</p>
                  <h4 class="producto_precio">Precio:$ ${recorre.precio}</h4>
            </div>
        </div>`
        contenedor_productos.appendChild(div)
        //* Mostrar cantidad por producto
        let agregar =document.getElementById(`producto_boton_mas${recorre.id}`)
        let mostrar =document.getElementById(`producto_boton${recorre.id}`)
        let sacar =document.getElementById(`producto_boton_menos${recorre.id}`)
        let cuenta=document.getElementById('contador')

        agregar.addEventListener("click",()=>{
            mostrar.textContent=parseInt(mostrar.textContent)+1
            contador.textContent=mostrar.textContent
            
        })
        sacar.addEventListener("click",()=>{
            mostrar.textContent=mostrar.textContent-1
            if (mostrar.textContent<0)
            mostrar.textContent=0
            contador.textContent=mostrar.textContent
        })
    })
}

//Buscador
buscador.addEventListener("input",(e)=>{
    console.log(e.target.value)//*Valor Ingresado
    let buscando=stockProductos.filter(item=>item.nombre.toLowerCase().includes(e.target.value.toLowerCase()))
    

})
//Funciones//
mostrarProductos(stockProductos)

// Ir al Carrito-NO SE COMO SE HACE!
// abrir_carrito.addEventListener('click',()=>{
//     if($("#contenedor").is(":visible")){
//         $("#contenedor").hide()
//     }
// })
