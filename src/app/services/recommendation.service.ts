import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RecommendationService {
  constructor() {}

  calculatePrecision(recommendations: string[], purchases: string[]): number {
    if (!recommendations || !recommendations.length) {
      return 0;
    }

    const truePositives = recommendations.filter((item) =>
      purchases.includes(item),
    ).length;

    const falsePositives = recommendations.length - truePositives;

    return truePositives / (truePositives + falsePositives);
  }
}
