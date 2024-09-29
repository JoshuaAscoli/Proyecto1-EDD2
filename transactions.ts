import { purchaseArray, saleArray } from "./Orders";


// Aquí puedes realizar tus comparaciones de precios
console.log('COINCIDENCIAS ENTRE COMPRAS Y VENTAS:');
for (let purchase of purchaseArray) {
    for (let sale of saleArray) {
        if (purchase.getCompany() == sale.getCompany()) {
            if (purchase.getPurchasePrice() >= sale.getSalePrice() && sale.getQuantity() >= purchase.getQuantity()) {
                console.log(`Coincidencia encontrada: 
Compañía: ${purchase.getCompany()}
Cantidad ofrecida: ${purchase.getPurchasePrice()} 
Precio de venta: ${sale.getSalePrice()}
Acciones de compra: ${purchase.getQuantity()}
Acciones de venta: ${sale.getQuantity()}
Acciones restantes de ${sale.getCompany()}:`, sale.getQuantity() - purchase.getQuantity() );


console.log('-------------------------------------------------')
            } else {
                console.log(`La compañía ${purchase.getCompany()} tiene más compras (${purchase.getQuantity()}) que ventas (${sale.getQuantity()}).`);
            }
        }
    }
}
