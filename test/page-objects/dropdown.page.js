const PageBase = require("./base.page");

class DropdownMenu extends PageBase {
  constructor() {
    super("./");
  }

  // container
  get $container() {
    return $("[class='d-lg-flex list-style-none']");
  }

  get $$menu() {
    return $$(
      "[class='HeaderMenu-details details-overlay details-reset width-full']"
    );
  }

  checkMenuItem() {
    this.$$menu.forEach((item) => {
      item.waitForDisplayed();
      item.moveTo();
      item.click();
    });
  }
}

module.exports = new DropdownMenu();
