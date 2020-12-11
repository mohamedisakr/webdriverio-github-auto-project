const PageBase = require("./base.page");

class PasswordReset extends PageBase {
  constructor() {
    super("./password_reset");
  }

  //
  get $email() {
    return $("#email_field");
  }

  //
  get $submit() {
    return $("input[name='commit'][type='submit']");
  }

  get $returnButton() {
    return $("a[class='btn btn-block']");
  }

  get $flash() {
    return $("#js-flash-container");
  }

  reset(email) {
    this.$email.setValue(email);
    this.$submit.click();

    // wait until either the reset email button is gone or an error appears
    browser.waitUntil(
      () => {
        const submitInExist = this.$submit.isExisting();
        const errorMessageExist = this.$flash.isExisting();
        return !submitInExist || errorMessageExist;
      },
      {
        timoutMsg:
          'The "Send password reset email" button still exists and an error never appeared',
      }
    );
  }
}

module.exports = new PasswordReset();
