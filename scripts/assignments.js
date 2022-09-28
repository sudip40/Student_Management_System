let arr = JSON.parse(localStorage.getItem("Assignments")) || [];
function create_ass() {
  let batch = document.querySelector("#batch").value;
  let topics = document.querySelector("#topic").value;
  let disc = document.querySelector("#disc").value;
  let times = document.querySelector("#time").value;
  let date = document.querySelector("#date").value;
  let assignments = new ass_detail(batch, topics, disc, date,times);
  arr.push(assignments);
  localStorage.setItem("Assignments", JSON.stringify(arr));
  alert("Assignment created successfully");
}

class ass_detail {
  constructor(batch, topic, disc, date,time) {
    this.batch = batch;
    this.topic = topic;
    this.disc = disc;
    this.date = date;
    this.time = time;
  }
}
function create() {
  document.querySelector("#create").style.display = "block";
  document.querySelector("#display").style.display = "none";
}
function display() {
  document.querySelector("#create").style.display = "none";
  document.querySelector("#display").style.display = "block";

  document.querySelector("tbody").innerHTML = null;
  arr.forEach(function (ele, index) {
    let tr = document.createElement("tr");
    let topic = document.createElement("td");
    let date = document.createElement("td");
    let batch = document.createElement("td");
    let time = document.createElement("td");
    let remove = document.createElement("td");
    remove.setAttribute("class", "remove");
    remove.addEventListener("click", function () {
      removedata(index);
    });

    topic.innerText = ele.topic;
    date.innerText = ele.date;
    batch.innerText = ele.batch;
    time.innerText = ele.time;
    remove.innerText = "Remove";
    tr.append(topic, batch, date,time, remove);
    document.querySelector("tbody").append(tr);
  });
}

function removedata(index) {
  arr.splice(index, 1);
  display();
  localStorage.setItem("Assignments", JSON.stringify(arr));
}
let pf = JSON.parse(localStorage.getItem("signupdata"));
let profile = pf.filter((ele) => {
  return ele.status === "true";
});

if (profile.length > 0) {
  document.getElementById("profile").innerText =
    profile[profile.length - 1].username;
}
function sortdata(){
  let val= document.querySelector("#sort").value;
  console.log(val);
}
console.log(arr);