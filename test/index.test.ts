import { describe, expect, it } from "vitest";
import log from "../src/index";

describe("test", () => {
  it("should pass", () => {
    expect(log()).toBe("Hello world!");
  });
});
