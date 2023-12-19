import { TextField } from "../../classes/fields";
import { kebabToSnake } from "../../composables/utils";

describe("GotProps Abstract Tests", () => {
  // pull from a concrete class that inherits the abstract class
  const field: TextField = new TextField();
  test("test field allowed props is populated", () => {
    expect(field.allowedProps().length).toBe(46);
  });
  test("test field props function returns only allowed props", () => {
    const failedValues = Object.keys(field.props()).filter(
      (name) => !field.allowedProps().includes(kebabToSnake(name)),
    );
    assert(failedValues.length === 0, `Values failed: ${failedValues.join(", ")}`);
  });
});
