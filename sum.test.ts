import { describe, expect, test } from "@jest/globals";
const sum = require("./sum");

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

// Object Assignment
describe("Object Assignment", () => {
  test("Object Assignment", () => {
    const data = { one: 1 };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
  });
});

// .not matcher
describe(".not Matcher", () => {
  test("adding positive numbers is not zero", () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });
});

// Truthineess
describe("Truthiness", () => {
  test("null", () => {
    const n = null;

    expect(n).toBeNull();
    expect(n).not.toBeUndefined();
    expect(n).toBeDefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  test("zero", () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).not.toBeUndefined();
    expect(z).toBeDefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
});

// Numbers
describe("Numbers", () => {
  test("five plus two", () => {
    const val = sum(5, 2);
    expect(val).toBeGreaterThan(6);
    expect(val).toBeGreaterThanOrEqual(7);
    expect(val).toBeLessThan(8);
    expect(val).toBeLessThanOrEqual(10);

    // toBe and toEqual are equivalent for numbers
    expect(val).toBe(7);
    expect(val).toEqual(7);

    // For floats, use .toBeCloseTo instead of toEqual. toBeCloseTo wont fail because of a rounding error
    var float = 0.1 + 0.2;
    expect(float).toBeCloseTo(0.3);
  });
});

// Strings
describe("Strings", () => {
  test("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });

  test('but there is a "stop" in Christoph', () => {
    expect("Christoph").toMatch(/stop/);
  });
});

// Arrays and Iterables
describe("Arrays and Iterables", () => {
  const shoppingList = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
  ];

  test("teh shopping list has milk on it", () => {
    expect(shoppingList).toContain("milk");
    expect(new Set(shoppingList)).toContain("milk");
  });
});
