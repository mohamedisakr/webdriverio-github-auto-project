const PageBase = require("./base.page");

class Pricing extends PageBase {
  constructor() {
    super("./pricing");
  }

  get $joinForFree() {
    return $(
      "[class='text-center px-2 '] [class='btn-block btn-mktg h4-mktg']"
    );
  }

  goToJoin() {
    this.$joinForFree.scrollIntoView();
    this.$joinForFree.click();
  }
}

module.exports = new Pricing(); //new
