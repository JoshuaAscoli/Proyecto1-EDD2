import { MaxHeap_shopping } from "./Shopping";
import { Purchase_Order } from "./Purchase_order";

let purchase_order: MaxHeap_shopping = new MaxHeap_shopping(10);

// Insertar órdenes de compra en el montículo
//Nombre de la compañia, cuantas acciones y el precio que se ofrece por C/U
purchase_order.insert(new Purchase_Order('Apple', 100, 1));
purchase_order.insert(new Purchase_Order('Google', 50, 2)); 
purchase_order.insert(new Purchase_Order('Microsoft', 150, 3)); 
purchase_order.insert(new Purchase_Order('Amazon', 500, 4)); 
purchase_order.insert(new Purchase_Order('Facebook', 140, 5));

//Este for ejecutara la accion .getMax y toString 5 veces
console.log('COMPRA DE ACCIONES:')
for (let i = 0; i < 5; i++){
    console.log(purchase_order.getMax().toString());
}

