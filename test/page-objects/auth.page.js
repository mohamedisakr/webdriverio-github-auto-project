const PageBase = require("./base.page");

class Auth extends PageBase {
  constructor() {
    super("./login");
  }
  get $email() {
    return $("#login_field");
  }
  get $password() {
    return $("#password");
  }
  get $signIn() {
    return $("input[type='submit'][name='commit']");
  }

  get $errorMessage() {
    return $("div[class='container-lg px-2']"); //$("#js-flash-container");
  }

  get flashText() {
    //  "Incorrect username or password.";
    return this.$errorMessage.getText();
  }

  login(user) {
    // super.load();
    const { email, password } = user;
    this.$email.setValue(email);
    this.$password.setValue(password);
    this.$signIn.click();

    // wait until either the sign in button is gone or an error appears
    browser.waitUntil(
      () => {
        const signInExist = this.$signIn.isExisting();
        const errorMessageExist = this.$errorMessage.isExisting();
        return !signInExist || errorMessageExist;
      },
      {
        timoutMsg:
          'The "Sign in" button still exists and an error never appeared',
      }
    );
  }
}

module.exports = new Auth();
