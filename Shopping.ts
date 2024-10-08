
//Se importa la clase order 
import { Purchase_Order } from "./Purchase_order";
export class MaxHeap_shopping {
    public heap: Purchase_Order[];
    private n: number; // n = cantidad de elementos ingresados

    constructor(size: number) {
        this.heap = new Array(size + 1);
        this.n = 0;
    }

    //Estara vacio su la longitud es igual a 0 
    public isEmpty(): boolean {
        return this.n == 0;
    }

    public insert(order: Purchase_Order): void {
        if (this.n == (this.heap.length - 1))
            this.resize(2 * this.heap.length);
        this.n++;
        this.heap[this.n] = order;
        this.swap(this.n);
    }

    private swap(i: number): void {
        let father: number = Math.floor(i / 2);
        while (i > 1 && this.heap[father].getPurchasePrice() < this.heap[i].getPurchasePrice()) {
            let temp: Purchase_Order = this.heap[father];
            this.heap[father] = this.heap[i];
            this.heap[i] = temp;
            i = father;
            father = Math.floor(i / 2);
        }
    }

    //metodo para re ajustar el tamaño 
    private resize(newSize: number): void {
        let newHeap: Purchase_Order[] = new Array(newSize);
        for (let i = 1; i < this.heap.length; i++)
            newHeap[i] = this.heap[i];
        this.heap = newHeap;
    }

    //con este metodo obtenemos la accion con el ofrecimiento mayor 
    public getMax(): Purchase_Order {
        if (this.isEmpty()) {
            throw new Error("Heap is empty");
        }
    
        //Decimos que el maximo sera la raiz y se intercambia por el ultimo 
        let max: Purchase_Order = this.heap[1];
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
            let temp: Purchase_Order = this.heap[i];
            this.heap[i] = this.heap[j];
            this.heap[j] = temp;

            // verificamos si procede otro intercambio hacia abajo
            i = j;
        }
    }
}
