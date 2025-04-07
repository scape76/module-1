// src/app/home/home.page.ts

import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { RecommendationService } from "../services/recommendation.service";
import { RecommendationInputComponent } from "./recommendation-input.component";
import { PrecisionResult, RecommendationData } from "./types";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  standalone: true,
  imports: [IonicModule, CommonModule, RecommendationInputComponent],
})
export class HomePage {
  result: PrecisionResult | null = null;
  hasCalculated = false;

  constructor(private recommendationService: RecommendationService) {}

  handleFormSubmit(data: RecommendationData) {
    const precision = this.recommendationService.calculatePrecision(
      data.recommendations,
      data.purchases,
    );

    const truePositives = data.recommendations.filter((item) =>
      data.purchases.includes(item),
    ).length;

    this.result = {
      precision,
      truePositives,
      falsePositives: data.recommendations.length - truePositives,
      totalRecommendations: data.recommendations.length,
    };

    this.hasCalculated = true;
  }
}
