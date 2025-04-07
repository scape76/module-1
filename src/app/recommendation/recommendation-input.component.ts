// src/app/components/recommendation-input/recommendation-input.component.ts

import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { RecommendationData } from "./types";

@Component({
  selector: "app-recommendation-input",
  templateUrl: "./recommendation-input.component.html",
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
})
export class RecommendationInputComponent implements OnInit {
  recommendationForm: FormGroup;

  @Output() formSubmit = new EventEmitter<RecommendationData>();

  constructor(private fb: FormBuilder) {
    this.recommendationForm = this.fb.group({
      recommendations: ["", Validators.required],
      purchases: ["", Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.recommendationForm.valid) {
      const formValue = this.recommendationForm.value;

      const data: RecommendationData = {
        recommendations: formValue.recommendations
          .split(",")
          .map((item: string) => item.trim()),
        purchases: formValue.purchases
          .split(",")
          .map((item: string) => item.trim()),
      };

      this.formSubmit.emit(data);
    }
  }

  resetForm() {
    this.recommendationForm.reset();
  }
}
