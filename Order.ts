
//Se utilizara el nombre de la compañia, la cantidad de acciones y el precio individual
//que se ofrece por ellas 
export class Order {
    private company: string;
    private quantity: number;
    private purchase_price: number;

    constructor(company: string, quantity: number, purchase_price: number) {
        this.company = company;
        this.quantity = quantity;
        this.purchase_price = purchase_price;
    }

    //Aignacion de getters
    public getCompany(): string {
        return this.company;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    //Con este get yo puedo comparar los precios y dependiendo del valor, ordenar las acciones
    public getPurchasePrice(): number {
        return this.purchase_price;
    }

    //Este metodo me sirve para representar la orden como cadena
    public toString(): string {
        return `${this.company}=> ${this.quantity} acciones a $${this.purchase_price} c/u`;
    }
}
