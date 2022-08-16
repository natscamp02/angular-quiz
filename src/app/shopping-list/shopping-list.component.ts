import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
    products: Item[] = [];
    get sortedProds(): Item[] {
        return this.products.sort((a: any, b: any) => {
            if (a.item_name < b.item_name)
                return -1;

            if (a.item_name > b.item_name)
                return 1;

            return 0;
        });
    }
    get totalCost(): number {
        return this.products.reduce((acc: number, item: Item) => acc + item.cost!, 0);
    }

    showForm: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    addNewItem(item?: any): void {
        if (item) this.products.push(item);
        this.toggleForm();
    }

    toggleForm(): void {
        this.showForm = !this.showForm;
    }
}
