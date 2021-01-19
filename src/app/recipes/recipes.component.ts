import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers : [RecipeService]
})
export class RecipesComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }
  currentRecipe:Recipe;

  ngOnInit(): void {
    this.recipeService.recipeSelected
    .subscribe(
      (recipe : Recipe) =>
      {
        this.currentRecipe = recipe;
      }
    );
  }

  myEvent(currrent_item)
  {
    this.currentRecipe = currrent_item;
  }
}
