const PageBase = require("./base.page");

class SearchPage extends PageBase {
  constructor() {
    super("./");
  }

  // 2. go to search box and type webdriverio and press enter
  get $searchBox() {
    return $("[name='q']");
  }

  search(keyword) {
    this.$searchBox.clearValue();
    this.$searchBox.setValue(keyword);
    this.$searchBox.keys("\uE007");
  }

  //   // 3. go to the Language left side bar and click TypeScript
  get $language() {
    return $("a[href*='TypeScript'][class='filter-item']");
  }

  get $firstResult() {
    return $(".repo-list-item:nth-child(1) .v-align-middle");
  }

  selectFirstResult() {
    this.$language.waitForExist();
    this.$language.click();

    this.$firstResult.waitForExist();
    this.$firstResult.click();
  }
}

module.exports = new SearchPage();
