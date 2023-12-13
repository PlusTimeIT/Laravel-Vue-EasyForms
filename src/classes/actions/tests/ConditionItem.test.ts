import { ConditionItem } from "../ConditionItem";
import { it, expect } from "vitest";
it("ConditionItem Instantiation", () => {
  // Arrange
  const initData = {
    against: "exampleAgainst",
    check: "exampleCheck",
    operator: "exampleOperator",
  };

  // Act
  const conditionItem = new ConditionItem(initData);

  // Assert
  expect(conditionItem).toBeDefined();
  expect(conditionItem.against).toBe(initData.against);
  expect(conditionItem.check).toBe(initData.check);
  expect(conditionItem.operator).toBe(initData.operator);
});

it("ConditionItem Instantiation Without Data", () => {
  // Act
  const conditionItem = new ConditionItem();

  // Assert
  expect(conditionItem).toBeDefined();
  // Add more assertions as needed for default values or behaviors
});
