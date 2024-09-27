
//Se utilizara el nombre de la compañia, la cantidad de acciones y el precio de venta individual
//que se ofrece por ellas 
export class Sale_Order {
    private company: string;
    private quantity: number;
    private sale_price: number;

    constructor(company: string, quantity: number, sale_price: number) {
        this.company = company;
        this.quantity = quantity;
        this.sale_price = sale_price;
    }

    //Aignacion de getters
    public getCompany(): string {
        return this.company;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    //Con este get yo puedo comparar los precios y dependiendo del valor, ordenar las acciones
    public getSalePrice(): number {
        return this.sale_price;
    }

    //Este metodo me sirve para representar la orden como cadena
    public toString(): string {
        return `${this.company}=> ${this.quantity} acciones a $${this.sale_price} c/u`;
    }
}
