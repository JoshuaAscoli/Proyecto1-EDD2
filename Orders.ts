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

//Al impirmir accedo a getMax y de ahi accedo a toString para que me imprima compañia, cuantas
//acciones y el precio que se ofrece
console.log('COMPRA DE ACCIONES:')
console.log(purchase_order.getMax().toString());
console.log(purchase_order.getMax().toString());
console.log(purchase_order.getMax().toString());
console.log(purchase_order.getMax().toString());
console.log(purchase_order.getMax().toString());