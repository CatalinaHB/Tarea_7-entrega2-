//Array Vacío para poner los productos del carrito//
let carrito_compras=[]
//Constantes//
const contenedor_productos=document.getElementById("contenedor_productos")
//Constantes botón suma//
const producto_boton_mas=document.getElementById("producto_boton_mas")
const producto_boton=document.getElementById("producto_boton")
const producto_boton_menos=document.getElementById("producto_boton_menos")
const contador=document.getElementById("contador")
const precio_total=document.getElementById("precio_total")
//Carrito
const contenedor_carrito=document.getElementById("contenedor-carrito")
const pagar=document.getElementById("pagar")
//Buscador
const buscador=document.getElementById("buscador")
//Ordenar
let ArrayOrdenarProductosCaroBarato=[]
let ArrayOrdenarProductosBaratoCaro=[]
let ArrayNoOrdenar=[]
const ordenar=document.getElementById("ordenar_selector")


//Array de Productos//
let stockProductos = [
    {id:1, nombre:"Estante Metálico 1", dimensiones:"145x70x30", color:"Gris", terminación:"Galvanizado", precio:400, img:'./img/metalbrein_estante_145_70_30.jpg'},
    {id:2, nombre:"Estante Metálico 2", dimensiones:"145x70x30", color:"Gris", terminación:"Galvanizado", precio:600, img:'./img/metalbrein_estante_145_70_30.jpg'},
    {id:3, nombre:"Estante Metálico 3", dimensiones:"145x70x30", color:"Gris", terminación:"Galvanizado", precio:700, img:'./img/metalbrein_estante_145_70_30.jpg'},
    {id:4, nombre:"Estante Metálico 4", dimensiones:"145x70x30", color:"Gris", terminación:"Galvanizado", precio:900, img:'./img/metalbrein_estante_145_70_30.jpg'},
    {id:5, nombre:"Estante Metálico 5", dimensiones:"145x70x30", color:"Gris", terminación:"Galvanizado", precio:200, img:'./img/metalbrein_estante_145_70_30.jpg'},
    {id:6, nombre:"Estante Metálico 6", dimensiones:"145x70x30", color:"Gris", terminación:"Galvanizado", precio:100, img:'./img/metalbrein_estante_145_70_30.jpg'}
]

//Ordenar
ordenar.addEventListener('change',()=>{
    switch (ordenar.value){
        case "No ordenar":
            ArrayNoOrdenar=ArrayNoOrdenar.concat(stockProductos)//Hago una copia del array productos
            ArrayNoOrdenar.sort((a,b)=>(a.id-b.id))//Ordeno por id
            console.log(ArrayNoOrdenar)
            ArrayOrdenarProductosCaroBarato.splice(0,ArrayOrdenarProductosCaroBarato.length)
            ArrayOrdenarProductosBaratoCaro.splice(0,ArrayOrdenarProductosBaratoCaro.length)  
            console.log(ArrayOrdenarProductosBaratoCaro)
            console.log(ArrayOrdenarProductosCaroBarato)
            //
            stockProductos.splice(0,stockProductos.length)
            stockProductos=stockProductos.concat(ArrayNoOrdenar)
            console.log(stockProductos)
            mostrarProductos(stockProductos)
            break
        case "Ordenar del más barato al más caro":
            ArrayOrdenarProductosBaratoCaro=ArrayOrdenarProductosBaratoCaro.concat(stockProductos)//Hago una copia del array productos
            ArrayOrdenarProductosBaratoCaro.sort((a,b)=>(a.precio-b.precio))
            console.log(ArrayOrdenarProductosBaratoCaro)  
            ArrayOrdenarProductosCaroBarato.splice(0,ArrayOrdenarProductosCaroBarato.length)//Dejo en cero las otras opciones
            ArrayNoOrdenar.splice(0,ArrayNoOrdenar.length)                                         //Dejo en cero las otras opciones
            //
            stockProductos.splice(0,stockProductos.length)
            stockProductos=stockProductos.concat(ArrayOrdenarProductosBaratoCaro)
            console.log(stockProductos)
            mostrarProductos(stockProductos)
            break
        case "Ordenar del más caro al más barato":
            ArrayOrdenarProductosCaroBarato=ArrayOrdenarProductosCaroBarato.concat(stockProductos)//Hago una copia del array productos
            ArrayOrdenarProductosCaroBarato.sort((a,b)=>(b.precio-a.precio))                      //Ordena
            console.log(ArrayOrdenarProductosCaroBarato)                                          //Mira que esté ordenado bien
            ArrayOrdenarProductosBaratoCaro.splice(0,ArrayOrdenarProductosBaratoCaro.length)  
            ArrayNoOrdenar.splice(0,ArrayNoOrdenar.length)      
            console.log(ArrayOrdenarProductosCaroBarato)   
            //
            stockProductos.splice(0,stockProductos.length)
            stockProductos=stockProductos.concat(ArrayOrdenarProductosCaroBarato)
            console.log(stockProductos)//** */
            console.log(ArrayNoOrdenar)
            console.log(ArrayOrdenarProductosBaratoCaro)
            mostrarProductos(stockProductos)
            break
        
    }
})

//Buscador
buscador.addEventListener('input',(e)=>{
    let buscado = stockProductos.filter(element=>element.nombre.toLowerCase().includes(e.target.value))
    mostrarProductos(buscado)
})
//Agregar productos automáticamente//
function mostrarProductos(stockProductos){
        contenedor_productos.innerHTML=""
        stockProductos.forEach(recorre=>{
        let div =document.createElement('div')
        div.className='producto'
        div.innerHTML= //**Importante: Si en vez de inner.HTML se pone inner.TEXT. Aparece puro texto    */
        `<div class="producto_descripción">
            <div class="parte_1">
                  <img class=producto_imagen src="${recorre.img}" alt="estante_1" ><br>
                  <h3 class="producto_titulo">${recorre.nombre}</h3><br>
                  <button class="producto_boton_menos" id="producto_boton_menos${recorre.id}">  -    </button>
                  <span class="producto_contador" id="producto_boton${recorre.id}">0</span>
                  <button class="producto_boton_mas" id="producto_boton_mas${recorre.id}">  +  </button>
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
            // contador.textContent=mostrar.textContent***
            agregar_carrito(recorre.id)// Agregar productos
        })
        sacar.addEventListener("click",()=>{
            mostrar.textContent=mostrar.textContent-1
            if (mostrar.textContent<0)
            mostrar.textContent=0
            // contador.textContent=mostrar.textContent***
        })
    })
}

function agregar_carrito(id){
    let adicionar_productos=stockProductos.find(item=>item.id===id)
    console.log(adicionar_productos)
    carrito_compras.push(adicionar_productos)
    mostrar_carrito(adicionar_productos)
    actualizar_carrito()
    localStorage.setItem('carrito',JSON.stringify(carrito_compras)) //Paso1: Queda la info guardada, pero igual al refrescar se pierde  
    Swal.fire({
        title: 'Genial',
        text: "Producto agregado exitosamente",
        icon: 'success',
        timer: 3000,
    })
    }
function mostrar_carrito(adicionar_productos){
    let div=document.createElement('div')
    div.classList.add('producto_en_carrito')
    div.innerHTML=`<p>${adicionar_productos.nombre}</p>
                   <p>Precio: $ ${adicionar_productos.precio}</p>
                   <button id=eliminar${adicionar_productos.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`

    contenedor_carrito.appendChild(div)
    //eliminar del carrito
    let btnEliminar=document.getElementById(`eliminar${adicionar_productos.id}`)
    btnEliminar.addEventListener('click',()=>{
        btnEliminar.parentElement.remove()
        carrito_compras = carrito_compras.filter(ele => ele.id !== adicionar_productos.id)
        actualizar_carrito()
        localStorage.setItem('carrito', JSON.stringify(carrito_compras))
        Swal.fire({
            title: 'Eliminado',
            text: "Producto eliminado exitosamente",
            icon: 'warning',
            timer: 3000,
        })
    })}


function actualizar_carrito(){
    contador.textContent=carrito_compras.length
    precio_total.textContent=carrito_compras.reduce((acc,el)=> acc + el.precio, 0)

}
    
function recuperar(){
    let recuperarLS=JSON.parse(localStorage.getItem('carrito'))//Paso2: Puedo ver la info  que estaba guardada  
    if(recuperarLS){
        for(const elemento of recuperarLS){
            mostrar_carrito(elemento)
            carrito_compras.push(elemento)
            actualizar_carrito()
        }
    }
    
}
//Funciones//
mostrarProductos(stockProductos)
recuperar()

pagar.addEventListener('click',()=>{
    Swal.fire({
        title: 'Genial',
        text: "Finalizar compra",
        icon: 'success',
        timer: 99999999,
    })
})


// Para eliminar el local storage se debe eliminar en la aplicacion//
// Ir a la consola y poner LocalStorage.clear() y se borra el local storage
// Voy en 1:09