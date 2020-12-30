import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // recipes:Recipe = new Recipe("Milkshake","tasty milkshake","https://imge.jpg")
  recipes:Recipe[] = 
  [
    new Recipe("Cheese Burger","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, deserunt!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw7pPS_vSd4wuEvjTwkVV0VPJEFMCvUaBPPw&usqp=CAU"),
    new Recipe("Choco Milkshake","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, deserunt!","https://bromabakery.com/wp-content/uploads/2016/03/Caramel-Milkshake-3.jpg")
  ];
   
  constructor() { }

  ngOnInit(): void {
  }

}
