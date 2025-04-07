import { TestBed } from "@angular/core/testing";
import { RecommendationService } from "../services/recommendation.service";

describe("RecommendationService", () => {
  let service: RecommendationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecommendationService);
  });

  it("повинен бути створений", () => {
    expect(service).toBeTruthy();
  });

  describe("calculatePrecision", () => {
    it("повинен повертати 0, коли масив рекомендацій порожній", () => {
      expect(service.calculatePrecision([], ["товар1", "товар2"])).toBe(0);
    });

    it("повинен повертати 0, коли рекомендації мають значення null або undefined", () => {
      expect(service.calculatePrecision(null as any, ["товар1"])).toBe(0);
      expect(service.calculatePrecision(undefined as any, ["товар1"])).toBe(0);
    });

    it("повинен правильно обчислювати точність, коли масив покупок порожній", () => {
      expect(service.calculatePrecision(["товар1", "товар2"], [])).toBe(0);
    });

    it("повинен правильно обчислювати точність при частковій кількості спільних елементів", () => {
      expect(
        service.calculatePrecision(["товар1", "товар2"], ["товар1", "товар3"]),
      ).toBe(0.5);
    });

    it("повинен правильно обчислювати точність без спільних елементів", () => {
      expect(
        service.calculatePrecision(
          ["товар1", "товар2", "товар3"],
          ["товар4", "товар5"],
        ),
      ).toBe(0);
    });

    it("повинен правильно обчислювати точність при повній кількості спільних елементів", () => {
      expect(
        service.calculatePrecision(
          ["товар1", "товар2"],
          ["товар1", "товар2", "товар3"],
        ),
      ).toBe(1);
    });

    it("повинен правильно обробляти порівняння з урахуванням регістру", () => {
      expect(
        service.calculatePrecision(["товар1", "товар2"], ["Товар1", "товар2"]),
      ).toBe(0.5);
    });
  });
});
