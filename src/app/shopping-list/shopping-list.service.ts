import { EventEmitter } from "@angular/core";
import { ingredients } from "../shared/ingredients.model";

export class ShoppingListService
{
    ingredientChanged = new EventEmitter<ingredients[]>();
    private ingredients: ingredients[] =[
        new ingredients("apples",23),
        new ingredients("mango",10)
    ]; 

    getIngredient()
    {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: ingredients)
    {
        // alert("added");
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
    
}