import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { RecipeService } from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model"

@Injectable({providedIn:"root"})

export class DataStorage{

    constructor(private http:HttpClient,private recipeService:RecipeService){
       

    }

    storeData(){
        const recipe = this.recipeService.getRecipe();

        this.http.put("https://recipe-app-12f48-default-rtdb.firebaseio.com/recipe.json",recipe)
        .subscribe(resp => {
            // console.log(resp);
        });
    }

    fetchData(){
        this.http.get<Recipe[]>("https://recipe-app-12f48-default-rtdb.firebaseio.com/recipe.json")
        .subscribe(resp => {
            this.recipeService.setRecipe(resp);
            // console.log("data fetched "+resp)
        });
    }

}