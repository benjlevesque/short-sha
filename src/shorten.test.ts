import { shorten } from "./shorten.js";
import { test } from "node:test";
import assert from "node:assert";

test("normal case", () => {
  assert.strictEqual(shorten("6e8dcce3fd71cfe9aca3e18c82255dd1e4052aa1", 7), "6e8dcce");
});

test("already short", () => {
  assert.strictEqual(shorten("6e8dcce", 7), "6e8dcce");
});

test("too short", () => {
  assert.throws(() => shorten("6e8dcc", 7), { message: "input is too short" });
});

test("undefined", () => {
  assert.throws(() => shorten(undefined as any, 7), { message: "sha must be defined" });
});

test("null", () => {
  assert.throws(() => shorten(null as any, 7), { message: "sha must be defined" });
});

test("invalid length", () => {
  assert.throws(() => shorten("6e8dcce3fd71cfe9aca3e18c82255dd1e4052aa1", "x" as any), {
    message: "length is invalid",
  });
});

test("negative length", () => {
  assert.throws(() => shorten("6e8dcce3fd71cfe9aca3e18c82255dd1e4052aa1", -1), {
    message: "length is invalid",
  });
});

test("zero length", () => {
  assert.throws(() => shorten("6e8dcce3fd71cfe9aca3e18c82255dd1e4052aa1", 0), {
    message: "length is invalid",
  });
});
