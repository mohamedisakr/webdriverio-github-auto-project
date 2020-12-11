// /*
describe.skip("Task 6", () => {
  it("price and plans", () => {
    // 1. go to github
    browser.url("https://github.com/");

    // 2. go to the top left menu items and click Pricing then Plans
    const $pricing = $("=Pricing");
    // expect($pricing).toBeDisplayed();
    $pricing.click();

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

    // 5. type Username, Email address, Password, and all other fields
    const $username = $("#id='user_login'");

    // $username.waitForDisplayed();
    $username.waitForExist();
    $username.scrollIntoView();
    expect($username).toBeDisplayed();
  });
});
// */

describe("Task 7", () => {
  it("Explore GitHut", () => {
    // 1. go to github
    browser.url("https://github.com/");

    // 2. click explore menu, then "Explore GitHut"
    const $explore = $("a[href='/explore']");
    $explore.click();

    // 3. go to Topics tab
    const $topics = $(
      "[class='d-flex flex-wrap flex-items-center flex-justify-center flex-md-justify-start text-center text-md-left'] [href='/topics']"
    );
    // 4. check if "Topics Browse popular topics on GitHub." banner exist
    const $banner = $("[class='h0-mktg']");
    $banner.waitForExist();
    $banner.scrollIntoView();
    expect($banner).toBeDisplayed();
  });
});
