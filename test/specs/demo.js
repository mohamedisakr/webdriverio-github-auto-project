/*
describe.skip("Task 6", () => {
  it("price and plans", () => {
    // 1. go to github
    browser.url("https://github.com/pricing"); // https://github.com/pricing

    // 2. go to the top left menu items and click Pricing then Plans
    // const $pricing = $("=Pricing");
    // // expect($pricing).toBeDisplayed();
    // $pricing.click();

    // 3. scroll down and click on "Join for free"
    const $join = $("=Join for free");
    $join.scrollIntoView();
    $join.click();

    // 4. it will redirect to "Create your account"
    const url = "join?plan";
    browser.waitUntil(
      () => {
        browser.getUrl().includes(url);
      },
      { timeoutMessage: `Expected url must be ${url}` }
    );

    // // 5. type Username, Email address, Password, and all other fields
    // const $username = $("#id='user_login'");
    const $banner = $(
      "[class='d-none d-md-block mt-0 mb-3 text-center h00-mktg lh-condensed-ultra ']"
    );

    // // $username.waitForDisplayed();
    // $username.waitForExist();
    // $username.scrollIntoView();
    // expect($username).toBeDisplayed();
    $banner.waitForExist();
    $banner.scrollIntoView();
    expect($banner).toBeDisplayed();
  });
});


describe.skip("Task 7", () => {
  it("Explore GitHut", () => {
    // 1. go to github
    browser.url("https://github.com/explore"); // ("https://github.com/");

    // 2. click explore menu, then "Explore GitHut"
    // const $explore = $("a[href='/explore']");
    // $explore.click();

    // 3. go to Topics tab
    const $topics = $(
      "[class='d-flex flex-wrap flex-items-center flex-justify-center flex-md-justify-start text-center text-md-left'] [href='/topics']"
    );
    $topics.click();

    // 4. check if "Topics Browse popular topics on GitHub." banner exist
    const $banner = $("[class='h0-mktg']");
    $banner.waitForExist();
    $banner.scrollIntoView();
    expect($banner).toBeDisplayed();
  });
});

//
describe.skip("Task 8", () => {
  it("TypeScript language", () => {
    // 1. go to github
    browser.url("https://github.com/");

    // 2. go to search box and type webdriverio and press enter
    const $searchBox = $("[name='q']");
    $searchBox.setValue("webdriverio");
    $searchBox.click(); // \uE007	"Enter"
    $searchBox.keys("\uE007");

    // 3. go to the Language left side bar and click TypeScript
    const $language = $("a[href*='TypeScript']"); //$("=TypeScript");
    $language.waitForExist();

    // 4. click the first result "igniteram/appium-webdriverio-typescript"
    const $firstResult = $(".repo-list-item:nth-child(1) .v-align-middle");
    $firstResult.click();

    // 5. check the address of the page address link contains the word "webdriverio"
    expect(browser.getUrl()).toHaveTextContaining("webdriverio"); //.toHaveAttributeContaining("href", "webdriverio"); //toHaveTextContaining("webdriverio");
  });
});

describe.skip("Task 9", () => {
  it("Enterprise Cloud", () => {
    // 1. go to github
    browser.url("https://github.com/");

    // 2. go to "Get started with GitHub Enterprise" banner
    const $enterpriseButton = $(
      "[class='border-bottom border-lg-bottom-0 mr-0 mr-lg-3'] a[href='/enterprise']"
    );
    $enterpriseButton.click();

    // 3. click "Start a free trial" button, then you will be redirected to another page
    const $startTrial = $("=Start a free trial");
    $startTrial.click();

    // 4. click "Enterprise Cloud" banner, then you will be redirected to another page
    const $enterpriseCloud = $(".currency-container:nth-child(1) .h1");
    $enterpriseCloud.click();

    // 5. type Username, Email address, Password, and all other fields
  });
});

describe("Task 10", () => {
  it("Enterprise Server", () => {
    // 1. go to github
    browser.url("https://github.com/");

    // 2. go to "Get started with GitHub Enterprise" banner
    const $enterpriseButton = $(
      "[class='border-bottom border-lg-bottom-0 mr-0 mr-lg-3'] a[href='/enterprise']"
    );
    $enterpriseButton.click();

    // 3. click "Start a free trial" button, then you will be redirected to another page
    const $startTrial = $("=Start a free trial");
    $startTrial.click();

    // 4. click "Enterprise Cloud" banner, then you will be redirected to another page
    const $enterpriseCloud = $(".currency-container:nth-child(3) .py-4");
    $enterpriseCloud.click();

    // 5. type Username, Email address, Password, and all other fields
  });
});
*/
