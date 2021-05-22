import { Component, OnInit } from '@angular/core';
import { ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {

  ingredients :ingredients[];
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(): void {
    

    this.ingredients = this.shoppingListService.getIngredient();

    this.shoppingListService.itemChanged.subscribe((resp:ingredients[])=>{
      this.ingredients = resp;    
    });




  }


  onItemSelected(i:number){
    this.shoppingListService.startedEditing.next(i);
  }

}
