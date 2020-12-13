const auth = require("../page-objects/auth.page");
const { user1 } = require("../fixtures/users");

// /*
//
describe("Task 3: Login Page", () => {
  //
  before(() => {});

  //
  beforeEach(() => {
    auth.load(); // browser.url("./login");
  });

  it("should error with a missing email", () => {
    auth.login({ email: "", password: "wdiodemo" });
    // assert that error message is showing
    expect(auth.$errorMessage).toHaveText(auth.flashText);
  });

  it("should error with a missing password", () => {
    auth.login({ email: "demo@learnwebdriverio.com", password: "" });
    // assert that error message is showing
    expect(auth.$errorMessage).toHaveText(auth.flashText);
  });

  it("should let you log in", () => {
    auth.login(user1);
    expect(auth.$errorMessage).not.toBeExisting();
  });
});
// */
