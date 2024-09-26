
//Se importa la clase order 
import { Order } from "./Order";
class MaxHeap_shopping {
    public heap: Order[];
    private n: number; // n = cantidad de elementos ingresados

    constructor(size: number) {
        this.heap = new Array(size + 1);
        this.n = 0;
    }

    //Estara vacio su la longitud es igual a 0 
    public isEmpty(): boolean {
        return this.n == 0;
    }

    public insert(order: Order): void {
        if (this.n == (this.heap.length - 1))
            this.resize(2 * this.heap.length);
        this.n++;
        this.heap[this.n] = order;
        this.swap(this.n);
    }

    private swap(i: number): void {
        let father: number = Math.floor(i / 2);
        while (i > 1 && this.heap[father].getPurchasePrice() < this.heap[i].getPurchasePrice()) {
            let temp: Order = this.heap[father];
            this.heap[father] = this.heap[i];
            this.heap[i] = temp;
            i = father;
            father = Math.floor(i / 2);
        }
    }

    //metodo para re ajustar el tamaño 
    private resize(newSize: number): void {
        let newHeap: Order[] = new Array(newSize);
        for (let i = 1; i < this.heap.length; i++)
            newHeap[i] = this.heap[i];
        this.heap = newHeap;
    }

    //con este metodo obtenemos la accion con el ofrecimiento mayor 
    public getMax(): Order {
        if (this.isEmpty()) {
            throw new Error("Heap is empty");
        }
    
        //Decimos que el maximo sera la raiz y se intercambia por el ultimo 
        let max: Order = this.heap[1];
        this.heap[1] = this.heap[this.n];
        this.n--;
        this.sink(1);
        return max;
    }

    //Se reordena
    private sink(i: number): void {
        while (2 * i <= this.n) {
            let j: number = 2 * i; // empezamos asumiendo que el hijo izquierdo es el mayor
            if (j < this.n && this.heap[j].getPurchasePrice() < this.heap[j + 1].getPurchasePrice())
                j++; // cambia a hijo derecho si este es el mayor
            if (this.heap[i].getPurchasePrice() >= this.heap[j].getPurchasePrice())
                break;

            // Hacemos intercambio burbuja entre los nodos para que el mayor quede en la raíz
            let temp: Order = this.heap[i];
            this.heap[i] = this.heap[j];
            this.heap[j] = temp;

            // verificamos si procede otro intercambio hacia abajo
            i = j;
        }
    }
}

// main
let purchase_order: MaxHeap_shopping = new MaxHeap_shopping(10);

// Insertar órdenes de compra en el montículo
//Nombre de la compañia, cuantas acciones y el precio que se ofrece por C/U
purchase_order.insert(new Order('Apple', 100, 5000));  
purchase_order.insert(new Order('Google', 50, 1000)); 
purchase_order.insert(new Order('Microsoft', 200, 300)); 
purchase_order.insert(new Order('Amazon', 500, 2000)); 
purchase_order.insert(new Order('Facebook', 140, 1300));

//Al impirmir accedo a getMax y de ahi accedo a toString para que me imprima compañia, cuantas
//acciones y el precio que se ofrece
console.log(purchase_order.getMax().toString());
console.log(purchase_order.getMax().toString());
console.log(purchase_order.getMax().toString());
console.log(purchase_order.getMax().toString());
console.log(purchase_order.getMax().toString());