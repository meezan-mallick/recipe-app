import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  Subscription:Subscription;
  editMode = false;
  editedIndex :number;
  editedItem:ingredients;

  @ViewChild('nameInput',{static:false}) nameInputRef : ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef : ElementRef;
  @ViewChild('f') slForm:NgForm;

  constructor(private shlservice: ShoppingListService ) {
    
   }

  ngOnInit(): void {
    this.Subscription = this.shlservice.startedEditing
    .subscribe((index:number)=>{
         this.editMode = true;
         this.editedIndex = index;
         this.editedItem = this.shlservice.getSelectedIngredient(index);
         this.slForm.setValue({
           name:this.editedItem.name,
           amount:this.editedItem.amount
         })

    });
  }

  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }

  
  onDelete()
  {
    this.shlservice.deleteIngredient(this.editedIndex);
    this.onClear();
  }

  onClear(){
    this.editMode = false;
    this.slForm.reset();
  }

  onSubmit(f)
  {
    const value = f.value;
    const newing = new ingredients(value.name,value.amount);

    if(this.editMode){
      this.shlservice.updateIngredient(this.editedIndex,newing);
     
    }
    else{

      this.shlservice.addIngredient(newing);
    }
    this.onClear();
  }

  
}
