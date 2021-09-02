import { capitalize } from "./capitalize";

describe("capitalize util", () => {
  it("should capitalize string", () => {
    expect(capitalize("santa catarina")).toBe("Santa Catarina");
    expect(capitalize("")).toBe("");
  });
});
