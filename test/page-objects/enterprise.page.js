const PageBase = require("./base.page");

class EnterprisePage extends PageBase {
  constructor() {
    super("./enterprise");
  }

  //   "[class='border-bottom border-lg-bottom-0 mr-0 mr-lg-3'] a[href='/enterprise']"
  get $enterpriseButton() {
    return $(".btn-mktg-fluid.btn-white-outline-mktg-fluid");
  }

  StartFreeTrial() {
    this.$enterpriseButton.click();
  }

  get $cloud() {
    return $(".currency-container:nth-child(1) .h1");
  }

  goCloud() {
    this.$cloud.click();
  }

  get $server() {
    return $(".currency-container:nth-child(3) .py-4");
  }

  goServer() {
    this.$server.click();
  }

  get $username() {
    return $("#user_login");
  }

  get $contactName() {
    return $("#contact_request_name");
  }
}

module.exports = new EnterprisePage();
