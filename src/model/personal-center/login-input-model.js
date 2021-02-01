class LoginInputModel {

  Username
  Password
  RememberLogin
  ReturnUrl
  button

  constructor(
    Username,
    Password,
    RememberLogin,
    ReturnUrl,
    button,
  ) {
    this.Username = Username
    this.Password = Password
    this.RememberLogin = RememberLogin
    this.ReturnUrl = ReturnUrl
    this.button = button
  }
}

export default LoginInputModel
