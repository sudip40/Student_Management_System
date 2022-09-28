document.querySelector("form").addEventListener("submit", function (e) {
    add_student(e);
  });
  class student {
    constructor(name, id, batch, email) {
      this.name = name;
      this.id = id;
      this.batch = batch;
      this.email = email;
    }
  }
  let arr = JSON.parse(localStorage.getItem("student_data")) || [];
  function add_student(e) {
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let id = document.querySelector("#id").value;
    let batch = document.querySelector("#batch").value;
    let email = document.querySelector("#email").value;
    let res = false;
    let check = arr.filter(function (ele) {
      return ele.email === email;
    });
    if (check.length < 1) {
      let data = new student(name, id, batch, email);
      arr.push(data);
      localStorage.setItem("student_data", JSON.stringify(arr));
      console.log(arr);
    }
  }
  function list_students() {
    document.querySelector("#display").style.display = "block";
    document.querySelector("#add").style.display = "none";
    document.querySelector("tbody").innerHTML = null;
    arr.forEach(function (ele, index) {
      let tr = document.createElement("tr");
      let name = document.createElement("td");
      let id = document.createElement("td");
      let batch = document.createElement("td");
      let email = document.createElement("td");
      let remove = document.createElement("td");
      remove.setAttribute("class", "remove");
      remove.addEventListener("click", function () {
        removedata(index);
      });

      name.innerText = ele.name;
      id.innerText = ele.id;
      batch.innerText = ele.batch;
      email.innerText = ele.email;
      remove.innerText = "Remove";
      tr.append(name, id, batch, email, remove);
      document.querySelector("tbody").append(tr);
    });
  }
  function add() {
    document.querySelector("#display").style.display = "none";
    document.querySelector("#add").style.display = "block";
  }
  function removedata(index) {
    arr.splice(index, 1);
    list_students();
    localStorage.setItem("student_data", JSON.stringify(arr));
  }
  let pf = JSON.parse(localStorage.getItem("signupdata"));
  let profile = pf.filter((ele) => {
    return ele.status === "true";
  });

  if (profile.length > 0) {
    document.getElementById("profile").innerText = profile[0].username;
  }