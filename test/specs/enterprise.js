const enterprisePage = require("../page-objects/enterprise.page");
//
describe("Task 9 Enterprise Cloud", () => {
  //
  beforeEach(() => {
    enterprisePage.load();
  });

  //
  it("should search for webdriverio", () => {
    enterprisePage.StartFreeTrial();
    enterprisePage.goCloud();
    expect(enterprisePage.$username).toBeExisting();
  });
});

//
describe("Task 10 Enterprise Server", () => {
  //
  beforeEach(() => {
    enterprisePage.load();
  });

  //
  it("should search for webdriverio", () => {
    enterprisePage.StartFreeTrial();
    enterprisePage.goServer();
    expect(enterprisePage.$contactName).toBeExisting();
  });
});
