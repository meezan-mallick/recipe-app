import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { ingredients } from "../shared/ingredients.model";

export class ShoppingListService
{
    ingredientChanged = new EventEmitter<ingredients[]>();
    startedEditing = new Subject<number>();
    itemChanged = new Subject<ingredients[]>();


    private ingredientsArray: ingredients[] =[
        new ingredients("apples",23),
        new ingredients("mango",10)
    ]; 

    getIngredient()
    {
        return this.ingredientsArray.slice();
    }

    getSelectedIngredient(index:number)
    {
       return this.ingredientsArray[index];
    }

    addIngredient(ingredient: ingredients)
    {
        // alert("added");
        this.ingredientsArray.push(ingredient);
        // this.ingredientChanged.emit(this.ingredientsArray.slice());
        this.itemChanged.next(this.ingredientsArray.slice());
    }

    updateIngredient(index:number,newingredient:ingredients){
        
        this.ingredientsArray[index] = newingredient;
        this.itemChanged.next(this.ingredientsArray.slice());
        
    }

    deleteIngredient(number){
        this.ingredientsArray.splice(number,1);
        this.itemChanged.next(this.ingredientsArray.slice());
    }

    addingredeintsArray(newingredientArray:ingredients[]){
        // for(let i of newingredientArray){
        //     this.addIngredient(i);
        // }
        // console.log(newingredientArray[0].name);
        this.ingredientsArray.push(...newingredientArray);
        this.itemChanged.next(this.ingredientsArray.slice());
    }
    
}