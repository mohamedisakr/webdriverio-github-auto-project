const auth = require("../page-objects/auth.page");
const { user1 } = require("../fixtures/users");
// /*
//
describe("Task 3: Login Page", () => {
  //   no need for beforeEach as we call load function from login function in auth page object
  const flashText = "Incorrect username or password.";
  //
  before(() => {});

  //
  beforeEach(() => {
    auth.load(); // browser.url("./login");
  });

  it("should error with a missing username", () => {
    auth.login({ email: "", password: "wdiodemo" });
    // assert that error message is showing
    //`email can't be blank`
    expect(auth.$errorMessage).toHaveText(flashText);
  });

  it("should error with a missing password", () => {
    auth.login({ email: "demo@learnwebdriverio.com", password: "" });
    // assert that error message is showing
    //`password can't be blank`
    expect(auth.$errorMessage).toHaveText(flashText);
  });

  it("should let you log in", () => {
    auth.login(user1); // auth.login({email, password});
    expect(auth.$errorMessage).not.toBeExisting();
  });
});
// */
