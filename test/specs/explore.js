const explorePage = require("../page-objects/explore.page");
const { isSubstringFound } = require("../utils/functions");
/*
describe("Task 7 explore -> topics", () => {
  //
  beforeEach(() => {
    explorePage.load();
  });

  //
  it("should redirect to 'Browse popular topics on GitHub.'", () => {
    //
    explorePage.clickTopics();

    const topics = "topics";
    let url = "";
    browser.waitUntil(
      async () => {
        url = await browser.getUrl();
        return isSubstringFound(url, topics);
      },
      {
        timoutMsg: `Can't redirect to Browse popular topics on GitHub. page`,
      }
    );
    console.log(
      `banner is existing: ${explorePage.$topicsBanner.isExisting()}`
    );
    expect(explorePage.$topicsBanner).toBeExisting();
  });
});
*/
