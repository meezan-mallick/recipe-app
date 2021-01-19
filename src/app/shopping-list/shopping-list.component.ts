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
    

    // const ingName = "banana";
    // const ingamt = 10;
    // const newing = new ingredients(ingName,ingamt);
    // this.shoppingListService.addIngredient(newing);

    this.ingredients = this.shoppingListService.getIngredient();
    this.shoppingListService.ingredientChanged.subscribe
    (
      (ingredient:ingredients[])=>
      {
        this.ingredients=ingredient;
      }
    );
  }

}
