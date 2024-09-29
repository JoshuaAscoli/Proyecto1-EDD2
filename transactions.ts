//se importa purchase y sale Arrays para utilizar las ordenes y acceder a los atributos
import { purchaseArray, saleArray } from "./Orders";
// se importa fs para crear el history_details.txt
import * as fs from 'fs';
const fileName = 'History_details.txt';

//se hace un for que recorra las compras y compare con otro for que recorra las ventas
//asi poder realizar las comprobaciones
for (let purchase of purchaseArray) {
    for (let sale of saleArray) {
        if (purchase.getCompany() == sale.getCompany()) {
            if (purchase.getPurchasePrice() >= sale.getSalePrice() && sale.getQuantity() >= purchase.getQuantity()) {
                const transaccion = `----------Transacción realizada----------:
Compañía: ${purchase.getCompany()}
Cantidad ofrecida: ${purchase.getPurchasePrice()}
Precio de venta: ${sale.getSalePrice()}
Acciones de compra: ${purchase.getQuantity()}
Acciones de venta: ${sale.getQuantity()}
Acciones restantes de ${sale.getCompany()}: ${sale.getQuantity() - purchase.getQuantity()}\n`;

//Si no existiera, se crea el archivo y se agrega las demas coincidencias
fs.appendFile(fileName, transaccion, (err) => {
    if (err) {
        console.error('Error al crear el archivo:', err);
    } else {
        console.log(`Archivo ${fileName} creado con éxito.`);
    }});

            }
        }
    }
}


