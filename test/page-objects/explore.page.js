const PageBase = require("./base.page");

class Explore extends PageBase {
  constructor() {
    super("./explore");
  }
  //
  get $topicsButton() {
    return $(
      "[class='d-flex flex-wrap flex-items-center flex-justify-center flex-md-justify-start text-center text-md-left'] [href='/topics']"
    );
  }
  //
  clickTopics() {
    this.$topicsButton.click();
  }
  //
  get $topicsBanner() {
    return $("[class='f4 text-gray col-md-6 mx-auto']");
  }
}

module.exports = new Explore();
