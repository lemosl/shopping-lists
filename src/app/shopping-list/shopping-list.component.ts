import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Itemlist } from './itemlist';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shopping-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})

export class ShoppingListComponent {
  item: string = "";
  list: Itemlist[] = [];
expression: any;

  addItem(){
     let itemlist = new Itemlist();

     itemlist.name =this.item;
     itemlist.id= this.list.length +1;

     this.list.push(itemlist);

     this.item = '';

     console.table(this.list)
  }

  ItemAcquired(itemlist:Itemlist){

    itemlist.purchased = !itemlist.purchased ;
  }

ItemClean(){
   this.list = []
}


}
