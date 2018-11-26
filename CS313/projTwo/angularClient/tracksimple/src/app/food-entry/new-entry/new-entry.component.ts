import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FoodEntryService } from '../../shared/services/foodEntry.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {
  mealOptions: string[] = [];
  foodEntryForm: FormGroup;

  constructor(private foodEntryService: FoodEntryService, private authService: AuthService) { }

  ngOnInit() {
    this.mealOptions = this.foodEntryService.getMealOptions();
    this.initForm();
  }

  initForm() {
    this.foodEntryForm = new FormGroup({
      'meal': new FormControl(null, Validators.required),
      'foodName': new FormControl(null, Validators.required),
      'calories': new FormControl(null, Validators.compose([Validators.required, Validators.min(0)])),
      'protein': new FormControl(null, Validators.min(0)),
      'carbs': new FormControl(null, Validators.min(0)),
      'fats': new FormControl(null, Validators.min(0))
    });
  }

  onSubmit() {
    if (!this.foodEntryForm.invalid) {
      this.foodEntryService.addFoodEntry({
        FoodEntryID: null,
        user: this.authService.getUser().userId,
        meal: this.foodEntryForm.value.meal,
        name: this.foodEntryForm.value.foodName,
        calories: this.foodEntryForm.value.calories,
        protein: this.foodEntryForm.value.protein,
        carbs: this.foodEntryForm.value.carbs,
        fats: this.foodEntryForm.value.fats,
        dateAdded: new Date()
      });
      this.foodEntryForm.reset();
    }
  }

}
