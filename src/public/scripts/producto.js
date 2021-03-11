 let arregloCarrito=[]; 
 var usar={};
 function addRow( id, nombre, precio)
             {
               var indexProducto = arregloCarrito.findIndex(i => i.id === id);
           
               if (indexProducto === -1) {
                 arregloCarrito.push({id: id, nombre:nombre ,cantidad: 1, precio:precio});
                  
     } else if (indexProducto> -1) {
         arregloCarrito[indexProducto].cantidad=arregloCarrito[indexProducto].cantidad+1;
     }
 
 
 
           // arregloCarrito.push({id: id, nombre:nombre ,cantidad: 1, precio:precio});
           
 
             pintarTabla();
              }
 
              function   pintarTabla(){
               $("table tbody").empty();
               var cantidadTotalCarrito=0;
               var costoTotal=0.00;
               for (let i = 0; i < arregloCarrito.length; i++) {
                 var num = arregloCarrito[i].precio*arregloCarrito[i].cantidad;
                   num = (Math.round(num * 100) / 100).toFixed(2);
                
                  
                 $("table tbody").append("<tr><td>"+arregloCarrito[i].id+"</td> <td>"+arregloCarrito[i].nombre+"</td><td>"+arregloCarrito[i].cantidad+"</td> <td><button class='btn btn-info btn-sm' onclick='sumarCantidad("+i+");'> + </button><button class='btn btn-danger btn-sm' onclick='restarCantidad("+i+");'>-</button> </td>     <td>Q."+num+"</td> </tr>");
                 cantidadTotalCarrito=cantidadTotalCarrito+arregloCarrito[i].cantidad;
                 costoTotal=costoTotal+(arregloCarrito[i].precio*arregloCarrito[i].cantidad);
               
                
                 }
                 if(arregloCarrito.length!=0){
                 costoTotal=(Math.round(costoTotal * 100) / 100).toFixed(2);
                 $("table tfoot").empty();
                 $("table tfoot").append("<td>Total</td><td></td><td> "+cantidadTotalCarrito+"</td><td> <button class='btn btn-info' onclick='comprar();'>Comprar todo</button>    <button type='button' class='btn btn-warning' onclick='borrarTodo();'>Borrar Todo</button> </td> <td> Q."+costoTotal+"</td>");
                  
              } else if(arregloCarrito.length==0){
                $("table tfoot").empty();
              

                $("table tfoot").append("<th scope='row' colspan='5'>Carrito vacío</th>");
              }
            
              addToLocalStorage('carrito', arregloCarrito);
            }
   
 function sumarCantidad(id){
  
 
 
   arregloCarrito[id].cantidad=arregloCarrito[id].cantidad+1;
   
   pintarTabla();
 
 
 }

 
 function restarCantidad(id){
 if(arregloCarrito[id].cantidad>1){
   arregloCarrito[id].cantidad=arregloCarrito[id].cantidad-1;
 
 }else if(arregloCarrito[id].cantidad==1){
 arregloCarrito.splice(id,1);
 
 }
   
   pintarTabla();
  
 }
 function borrarTodo(){

  arregloCarrito.length=0;
  pintarTabla();
 }
 function addToLocalStorage(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}
function comprar(){

  const carr=localStorage.getItem("carrito");
  

var req =$.ajax({
  type: "POST",
  url:"/carrito",
  data:{ carrito: JSON.stringify(arregloCarrito)}, 
  
});




 }