const home = require("../page-objects/home.page");
const { user2 } = require("../fixtures/users");
/*
describe.only("Home page", () => {
  before(() => {
    home.load();
  });

  //
  it("Task 1: should redircted to github.com/join after signup", () => {
    const expectedUrl = "https://github.com/join";

    // register process
    const { email } = user2;
    home.register(email);
    // check redircted to github.com/join OR label with text "Verify your account" Exist
    // wait until redirect
    browser.waitUntil(
      () => {
        return browser.getUrl() === expectedUrl;
      },
      {
        timoutMsg: `Can't redirect to ${expectedUrl}`,
      }
    );
  });
});
// */
