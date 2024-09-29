import { MaxHeap_shopping } from "./Shopping";
import { Purchase_Order } from "./Purchase_order";
import { MinHeap_selling } from "./Selling";
import { Sale_Order } from "./Sales_order";

// Inicializar el montículo de compras y ventas
let purchase_order: MaxHeap_shopping = new MaxHeap_shopping(10);
let sale_order: MinHeap_selling = new MinHeap_selling(10);

// Insertar órdenes de compra en el montículo
purchase_order.insert(new Purchase_Order('Google', 50, 100));
purchase_order.insert(new Purchase_Order('Microsoft', 150, 200));
purchase_order.insert(new Purchase_Order('Amazon', 500, 4));
purchase_order.insert(new Purchase_Order('Apple', 2, 100));
purchase_order.insert(new Purchase_Order('Facebook', 100, 5));

// Mostrar órdenes de compra
let purchaseArray: Purchase_Order [] = []
console.log('---ORDENES DE COMPRAS---');
for (let i = 0; i < 5; i++) {
    purchaseArray.push(purchase_order.getMax());
}


// Insertar órdenes de venta en el montículo
sale_order.insert(new Sale_Order('Apple', 10, 80));
sale_order.insert(new Sale_Order('Google', 30, 10));
sale_order.insert(new Sale_Order('Microsoft', 150, 150));
sale_order.insert(new Sale_Order('Amazon', 500, 50));
sale_order.insert(new Sale_Order('Facebook', 140, 70));

// Mostrar órdenes de venta
let saleArray: Sale_Order[] = []
console.log('---ORDENES DE VENTAS---');
for (let i = 0; i < 5; i++) {
    saleArray.push(sale_order.getMin());
}

export {purchaseArray, saleArray}
