const TriangleCalculator = require("./triangle");

// Equilateral
test("TC1 : 100,100,100", () => {
  expect(TriangleCalculator(100, 100, 100)).toBe("Equilateral");
});

// Isosceles
test("TC2 : 100,100,50", () => {
  expect(TriangleCalculator(100, 100, 50)).toBe("Isosceles");
});

// Scalene
test("TC3 : 70,60,50", () => {
  expect(TriangleCalculator(70, 60, 50)).toBe("Scalene");
});

// Invalid triangle
test("TC4 : 1,2,3", () => {
  expect(TriangleCalculator(1, 2, 3)).toBe("Not a triangle");
});




