import { Sale_Order } from "./Sales_order";
export class MinHeap_selling {
    private heap: Sale_Order[];
    private n: number; // n = cantidad de elementos ingresados

    constructor(size: number) {
        this.heap = new Array(size + 1);
        this.n = 0;
    }

    public isEmpty(): boolean {
        return this.n == 0;
    }

    public insert(order: Sale_Order): void {
        if (this.n == (this.heap.length - 1))
            this.resize(2 * this.heap.length)
        this.n++;
        this.heap[this.n] = order;
        this.swap(this.n);
    }

    private swap(i: number): void {
        let father: number = Math.floor(i / 2);
        while (i > 1 && this.heap[father].getSalePrice() > this.heap[i].getSalePrice()) {
            let temp: Sale_Order = this.heap[father];
            this.heap[father] = this.heap[i];
            this.heap[i] = temp;
            i = father;
            father = Math.floor(i / 2);
        }
    }

    private resize(newSize: number): void {
        let newHeap: Sale_Order[] = new Array(newSize);
        for (let i = 1; i < this.heap.length; i++)
            newHeap[i] = this.heap[i];
        this.heap = newHeap;
    }

    public getMin(): Sale_Order {
        if (this.isEmpty()) {
            throw new Error("Heap is empty");
        }


        let min: Sale_Order = this.heap[1];
        this.heap[1] = this.heap[this.n];
        this.n--;
        this.sink(1); // Procedimiento que reestructura el árbol AVL*/
        return min;
    }

    private sink(i: number): void {
        while (2*i <= this.n) {
            let j: number = 2*i; // empezamos asumiendo que el hijo izquierdo es el menor
            if (j < this.n && this.heap[j].getSalePrice() > this.heap[j+1].getSalePrice())
                j++; // cambia a hijo derecho si este es el mayor
            if (this.heap[i].getSalePrice() <= this.heap[j].getSalePrice())
                break;
            // Hacemos intercambio burbuja entre los nodos para que el menor quede en la raíz
            let temp: Sale_Order = this.heap[i];
            this.heap[i] = this.heap[j];
            this.heap[j] = temp;
            // verificamos si procede otro intercambio hacia abajo
            i = j;
        }
    }
}



