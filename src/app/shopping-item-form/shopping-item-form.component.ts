import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from '../Item';

@Component({
    selector: 'app-shopping-item-form',
    templateUrl: './shopping-item-form.component.html',
    styleUrls: ['./shopping-item-form.component.scss']
})
export class ShoppingItemFormComponent implements OnInit {
    item: any = {
        item_name: '',
        quantity: null,
        cost: null,
    }
    @Output('close') onClose: EventEmitter<Item | undefined> = new EventEmitter<Item | undefined>();

    constructor() { }

    ngOnInit(): void {
    }

    onSubmit(): void {
        this.close(this.item);
    }

    close(data?: any): void {
        this.onClose.emit(data);
    }
}
