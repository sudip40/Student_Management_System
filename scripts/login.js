let details = JSON.parse(localStorage.getItem("signupdata"));

  class login {
    constructor(password, email) {
      this.password = password;
      this.email = email;
    }
    validepassword() {
      let res = false;

      for (let i = 0; i < details.length; i++) {
        if (this.password == details[i].password) {
          res = true;
        }
      }
      return res;
    }
    checkemail() {
      let res = false;

      for (let i = 0; i < details.length; i++) {
        if (this.email == details[i].email) {
          res = true;
        }
      }
      return res;
    }
    setprofile() {
      for (let i = 0; i < details.length; i++) {
        if (this.email == details[i].email) {
          details[i].status = "true";
          console.log(details[i].status);
        } else {
          details[i].status = "False";
        }
      }

      localStorage.setItem("signupdata", JSON.stringify(details));
    }
    divert() {
      for (let i = 0; i < details.length; i++) {
        if (this.email == details[i].email && details[i].type == "admin") {
          window.location.href = "admin.html";
        } else if (
          this.email == details[i].email &&
          details[i].type == "student"
        ) {
          window.location.href = "student.html";
        }
      }
    }
  }

  document.querySelector("form").addEventListener("submit", getdata);
  function getdata(e) {
    e.preventDefault();

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let info = new login(password, email);

    if (info.validepassword() == true && info.checkemail() == true) {
      info.setprofile();

      alert("login successful!");
      info.divert();
      // window.location.href = "admin.html";
    } else {
      alert("Login failed! check your credentials!");
    }
    console.log(info);
  }