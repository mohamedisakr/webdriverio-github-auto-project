const PageBase = require("./base.page");

class SignupPage extends PageBase {
  constructor() {
    // https://github.com/join
    super("./join");
  }

  //
  get $username() {
    return $("#user_login"); // $("[id='user_login']"); //
  }

  //
  get $email() {
    return $("#user_email");
  }

  //
  get $password() {
    return $("#user_password");
  }

  //
  get $emailPreferences() {
    return $("#all_emails");
  }

  //
  get $genericError() {
    return $("[class='flash flash-error my-3']");
  }

  //
  get $errorMessages() {
    return $$("[class='error']");
  }

  get $signupForGitHub() {
    return $(
      "button[class='btn-mktg-fluid btn-green-mktg-fluid width-full width-sm-auto'][type='submit']"
    );
  }
}

module.exports = new SignupPage();
