const expect = require("chai").expect;
const fetch = require("node-fetch");

describe("broken link test", () => {
  it("should check the page for broken links", () => {
    // const url = "https://www.hugoboss.com/us/";
    // browser.url(url);

    const links = $$("a");

    // get all the links on the page
    const urls = links.map((link) => link.getAttribute("href"));
    const requests = urls.map((url) => browser.call(() => fetch(url)));
    const statusCodes = requests.map((response) => response.status);
    console.log(statusCodes);
    statusCodes.forEach(async (statusCode) => {
      expect(statusCode).not.toBe(404);
    });
  });
});
