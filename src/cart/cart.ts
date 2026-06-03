import Product from '../products/product';

export default class Cart {
    private readonly _items: Product[] = [];
    addItem(item: Product): void {
        this._items.push(item);
    } 

    removeItem(item: Product): void {
        const index = this._items.indexOf(item);
        if (index > -1) {
            this._items.splice(index, 1);
        }
    }

    get items(): Product[] {
        return this._items;
    }

    get total(): number {
        return this._items.reduce((total, item) => total + item.price, 0);
    }

    isEmpty(): boolean {
        return this._items.length === 0;
    }

    clear(): void {
        this._items.length = 0;
    }
}
