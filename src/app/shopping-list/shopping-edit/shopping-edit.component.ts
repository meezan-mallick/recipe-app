import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput',{static:false}) nameInputRef : ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef : ElementRef;


  constructor(private shlservice: ShoppingListService ) { }

  ngOnInit(): void {
  }


  onAdd()
  {
    
    const ingName = this.nameInputRef.nativeElement.value;
    const ingamt = this.amountInputRef.nativeElement.value;
    const newing = new ingredients(ingName,ingamt);
    this.shlservice.addIngredient(newing);
  }
}
