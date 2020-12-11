const home = require("../page-objects/home.page");
const { user2 } = require("../fixtures/users");
/*
describe.skip("Home page", () => {
  before(() => {
    home.load();
  });

  //
  it("Task 1: should redircted to github.com/join after signup", () => {
    const currentUrl = browser.getUrl();
    const expectedUrl = "https://github.com/join";
    // see the current url
    console.log(`The URL is: ${currentUrl}`);
    // register process
    home.register(user2.email);
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
*/
