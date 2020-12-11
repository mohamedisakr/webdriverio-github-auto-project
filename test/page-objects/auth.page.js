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
    return $("#js-flash-container");
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

  clearSession() {
    browser.execute(() => window.localStorage.clear());
  }

  loginViaApi(user) {
    const token = browser.call(() => {
      return api.getAuthToken(user);
    });

    // load the base page so we can set the token
    browser.url("./");

    // inject the auth token
    browser.execute((browserToken) => {
      window.localStorage.setItem("id_token", browserToken);
    }, token);
  }
}

module.exports = new Auth();
