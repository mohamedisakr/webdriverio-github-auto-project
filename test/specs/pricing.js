const pricingPage = require("../page-objects/pricing.page");
const { isSubstringFound } = require("../utils/functions");

// /*
describe("Task 6 plans -> Join for free", () => {
  //
  beforeEach(() => {
    pricingPage.load(); // browser.url("./login");
  });

  //
  it("should redirect to 'Create your account'", () => {
    //
    pricingPage.goToJoin();

    const join = "join";
    let url = "";
    browser.waitUntil(
      async () => {
        url = await browser.getUrl();
        return isSubstringFound(url, join);
      },
      {
        timoutMsg: `Can't redirect to Create your account page`,
      }
    );

    expect(url).toContain(join);
  });
});
// */
