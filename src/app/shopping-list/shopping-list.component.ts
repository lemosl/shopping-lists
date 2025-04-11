import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Itemlist } from './itemlist';

@Component({
  selector: 'app-shopping-list',
  imports: [FormsModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})

export class ShoppingListComponent {
  item: string = "";
  list: Itemlist[] = [];

  addItem(){
     let itemlist = new Itemlist();
     itemlist.name =this.item;
     


     this.item = '';
  }


}
