import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import {Recipe} from './recipe.model';

@Injectable({providedIn:"root"})
export class RecipeService
{

    constructor(private slService:ShoppingListService){

    }

    recipeSelected = new EventEmitter<Recipe>();

    recipes :Recipe[] = 
    [
      new Recipe(
      "Cheese Burger",

      "A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty.",

      "A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty. The cheese is usually added to the cooking hamburger patty shortly before serving, which allows the cheese to melt. Cheeseburgers can include variations in structure, ingredients and composition.",

      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7pPS_vSd4wuEvjTwkVV0VPJEFMCvUaBPPw&usqp=CAU",
      
      [
        new ingredients ("Meat",1), 
        new ingredients ("French Fries",20) 
      
      ]

      ),
      
      
      new Recipe("Choco Milkshake",
      "Vanilla Milkshake, world's favorite milkshake, is a smooth and creamy concoction of vanilla ice creame, milk, vallina extracts",
      "Vanilla Milkshake, world's favorite milkshake, is a smooth and creamy concoction of vanilla ice creame, milk, vallina extracts topped up with whipped cream and chocolate vermicelli for irresistible looks",
      "https://bromabakery.com/wp-content/uploads/2016/03/Caramel-Milkshake-3.jpg",
      [
        new ingredients ("Ice Cream",1) ,
        new ingredients ("choco Cream",1) ,
        new ingredients ("Sugar cubes",20) 
      ]
      
      )
    ];

    setRecipe(recipe:Recipe[]){
      this.recipes=recipe;
    }

    getRecipe()
    {
        return this.recipes.slice();
    }

 
    addIngredientToShoppingList(ingredients:ingredients[]){
      this.slService.addingredeintsArray(ingredients);
      // console.log("recipe service"+ingredients[0].name);

    }

    getRecipeid(index:number)
    {
      // console.log(this.recipes[index].ingredientsArray);
      return this.recipes[index];
    }
} 