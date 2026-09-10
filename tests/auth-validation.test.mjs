import assert from "node:assert/strict";
import test from "node:test";
import { validateAuth } from "../src/lib/auth-validation.ts";

const valid = {
  fullName: "Sophea Chan",
  email: "sophea@example.com",
  password: "FreshNoodles42!",
  confirmPassword: "FreshNoodles42!",
};

test("registration accepts valid data, Khmer names, and names with punctuation", () => {
  for (const fullName of [valid.fullName, "សុខ សុភា", "Anne-Marie O’Neill", "Sophea"]) {
    assert.deepEqual(validateAuth({ ...valid, fullName }, "register"), {});
  }
});

test("registration reports all missing required fields", () => {
  assert.deepEqual(Object.keys(validateAuth({ fullName: "", email: "", password: "", confirmPassword: "" }, "register")), ["fullName", "email", "password", "confirmPassword"]);
});

test("rejects invalid names without requiring a Western first/last name structure", () => {
  for (const fullName of [" ", "A", "12345", "---", "<script>alert(1)</script>", "A".repeat(101)]) {
    assert.ok(validateAuth({ ...valid, fullName }, "register").fullName);
  }
});

test("both forms reject malformed and overlong email addresses", () => {
  for (const mode of ["login", "register"]) {
    for (const email of ["", "hello", "a@@example.com", "a b@example.com", "a@example", "a".repeat(255) + "@example.com"]) {
      assert.ok(validateAuth({ ...valid, email }, mode).email);
    }
    assert.equal(validateAuth({ ...valid, email: "  sophea+food@example.com  " }, mode).email, undefined);
  }
});

test("registration enforces every password requirement", () => {
  for (const password of ["Ab1!", "freshnoodles42!", "FRESHNOODLES42!", "FreshNoodles!!", "FreshNoodles42", "Aa1!" + "a".repeat(125)]) {
    assert.ok(validateAuth({ ...valid, password, confirmPassword: password }, "register").password);
  }
  for (const password of ["Aa1!" + "a".repeat(8), "Aa1!" + "a".repeat(124)]) {
    assert.deepEqual(validateAuth({ ...valid, password, confirmPassword: password }, "register"), {});
  }
});

test("confirmation must match exactly, including spaces and case", () => {
  for (const confirmPassword of ["", "freshNoodles42!", "FreshNoodles42! "]) {
    assert.ok(validateAuth({ ...valid, confirmPassword }, "register").confirmPassword);
  }
  const password = " FreshNoodles42! ";
  assert.deepEqual(validateAuth({ ...valid, password, confirmPassword: password }, "register"), {});
});

test("login validates credentials without imposing registration password rules", () => {
  assert.deepEqual(validateAuth({ ...valid, fullName: "", password: "older-password", confirmPassword: "" }, "login"), {});
  for (const password of ["", "   ", "a".repeat(129)]) {
    assert.ok(validateAuth({ ...valid, password }, "login").password);
  }
});

test("validation never changes the supplied credentials", () => {
  const values = { ...valid, email: "  sophea@example.com  ", password: " FreshNoodles42! " };
  const original = { ...values };
  validateAuth(values, "register");
  assert.deepEqual(values, original);
});
