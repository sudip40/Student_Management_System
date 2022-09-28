let details = JSON.parse(localStorage.getItem("signupdata")) || [];

  class signup {
    constructor(username, password, email, type) {
      this.username = username;
      this.password = password;
      this.email = email;
      this.status = "False";
      this.type = type;
    }
    validusername() {
      if (this.username.length < 5) {
        return false;
      }
      return true;
    }
    validepassword() {
      if (this.password.length < 8) {
        return false;
      }
      return true;
    }
    checkemail() {
      let res = true;
      if (details.length > 0) {
        for (let i = 0; i < details.length; i++) {
          if (this.email == details[i].email) {
            res = false;
          }
        }
      }
      return res;
    }
  }

  document.querySelector("form").addEventListener("submit", getdata);
  function getdata(e) {
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let type = document.querySelector("#type").value;

    let info = new signup(name, password, email, type);
    info.status = false;

    if (
      info.checkemail() == true &&
      info.validepassword() == true &&
      info.validusername() == true
    ) {
      details.push(info);

      localStorage.setItem("signupdata", JSON.stringify(details));
      alert("Signup successful!");

      window.location.href = "login.html";
    } else {
      alert("Signup failed! check your credentials!");
    }
  }