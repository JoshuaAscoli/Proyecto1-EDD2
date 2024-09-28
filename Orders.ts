import { MaxHeap_shopping } from "./Shopping";
import { Purchase_Order } from "./Purchase_order";
import { MinHeap_selling } from "./Selling";
import { Sale_Order } from "./Sales_order";

// Inicializar el montículo de compras y ventas
let purchase_order: MaxHeap_shopping = new MaxHeap_shopping(10);
let sale_order: MinHeap_selling = new MinHeap_selling(10);

// Insertar órdenes de compra en el montículo
purchase_order.insert(new Purchase_Order('Apple', 100, 1));
purchase_order.insert(new Purchase_Order('Google', 50, 2));
purchase_order.insert(new Purchase_Order('Microsoft', 150, 3));
purchase_order.insert(new Purchase_Order('Amazon', 500, 4));
purchase_order.insert(new Purchase_Order('Facebook', 100, 5));

// Mostrar órdenes de compra
let purchaseArray: Purchase_Order [] = []
console.log('COMPRA DE ACCIONES:');
for (let i = 0; i < 5; i++) {
    purchaseArray.push(purchase_order.getMax());
}
console.log(purchaseArray)

// Insertar órdenes de venta en el montículo
sale_order.insert(new Sale_Order('Apple', 100, 1));
sale_order.insert(new Sale_Order('Google', 50, 2));
sale_order.insert(new Sale_Order('Microsoft', 150, 3));
sale_order.insert(new Sale_Order('Amazon', 500, 4));
sale_order.insert(new Sale_Order('Facebook', 140, 5));

// Mostrar órdenes de venta
let saleArray: Sale_Order[] = []
console.log('VENTA DE ACCIONES:');
for (let i = 0; i < 5; i++) {
    saleArray.push(sale_order.getMin());
}
console.log(saleArray)

