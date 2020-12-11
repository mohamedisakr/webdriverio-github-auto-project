const passwordReset = require("../page-objects/reset.password.page");
const {
  valid,
  invalidEmpty,
  invalidFormat,
} = require("../fixtures/forgot.data");
/*
// 2. show 2 test cases
// 2.1 negative, invalid email (empty email, incorrect format)
// 2.2 positive, valid email
describe("Forgot password", () => {
  beforeEach(() => {
    passwordReset.load(); // browser.url("./password_reset");
  });

  it("Task 4: (positive) valid email", () => {
    const { email } = valid;
    passwordReset.reset(email);
    expect(passwordReset.$flash).not.toBeExisting();
  });

  it("Task 4: (negative) invalid email (empty)", () => {
    const { email } = invalidEmpty;
    passwordReset.reset(email);
    expect(passwordReset.$flash).toBeExisting();
  });

  it("Task 4: (negative) invalid email (format)", () => {
    const { email } = invalidFormat;
    passwordReset.reset(email);
    expect(passwordReset.$flash).toBeExisting();
  });
});
*/
