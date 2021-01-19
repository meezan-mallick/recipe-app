import { EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';

export class RecipeService
{

    recipeSelected = new EventEmitter<Recipe>();

    
    recipes :Recipe[] = 
    [
      new Recipe("Cheese Burger",
      "A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty.",
      "A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty. The cheese is usually added to the cooking hamburger patty shortly before serving, which allows the cheese to melt. Cheeseburgers can include variations in structure, ingredients and composition.",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7pPS_vSd4wuEvjTwkVV0VPJEFMCvUaBPPw&usqp=CAU"),
      
      
      new Recipe("Choco Milkshake",
      "Vanilla Milkshake, world's favorite milkshake, is a smooth and creamy concoction of vanilla ice creame, milk, vallina extracts",
      "Vanilla Milkshake, world's favorite milkshake, is a smooth and creamy concoction of vanilla ice creame, milk, vallina extracts topped up with whipped cream and chocolate vermicelli for irresistible looks",
      "https://bromabakery.com/wp-content/uploads/2016/03/Caramel-Milkshake-3.jpg")
    ];

    getRecipe()
    {
        return this.recipes.slice();
    }

    getRecipeid(index:number)
    {
      return this.recipes[index];
    }
} 