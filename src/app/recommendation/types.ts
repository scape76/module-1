export type RecommendationData = {
  recommendations: string[];
  purchases: string[];
};

export type PrecisionResult = {
  precision: number;
  truePositives: number;
  falsePositives: number;
  totalRecommendations: number;
};
