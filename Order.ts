
export class Order {
    private company: string 
    private cuantity: number
    private purchase_price: number

    constructor(company: string, cuantity: number, purchase_price: number) {
        this.company = company
        this.cuantity = cuantity
        this.purchase_price = purchase_price
    }
}