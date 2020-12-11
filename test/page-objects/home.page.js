const PageBase = require("./base.page");

class Home extends PageBase {
  constructor(url = "./") {
    super(url);
  }

  get $email() {
    return $("#user_email");
  }

  // "button[class='btn-mktg signup-btn  js-octocaptcha-form-submit width-full'][type='submit']"
  get $createAccountButton() {
    return $("button[type='submit']");
  }

  register(email) {
    this.$email.setValue(email);
    this.$createAccountButton.click();
  }
}

module.exports = new Home(); //new
