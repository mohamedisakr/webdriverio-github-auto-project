const searchPage = require("../page-objects/search.page");
// /*
describe("Task 8 search", () => {
  //
  beforeEach(() => {
    searchPage.load();
  });

  //
  it("should search for webdriverio", () => {
    searchPage.search("webdriverio");
    searchPage.selectFirstResult();
    expect(browser).toHaveUrl("webdriverio", { containing: true });
  });
});
// */
