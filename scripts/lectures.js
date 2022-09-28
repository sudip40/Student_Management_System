let arr = JSON.parse(localStorage.getItem("lectures")) || [];
  class ass_detail {
    constructor(batch, topic, proff, date, time) {
      this.batch = batch;
      this.topic = topic;
      this.instructor = proff;
      this.date = date;
      this.time = time;
    }
  }
  function create_lec() {
    let batch = document.querySelector("#batch").value;
    let topics = document.querySelector("#topic").value;
    let proff = document.querySelector("#teacher").value;
    let time = document.getElementById("time").value;
    let date = document.querySelector("#date").value;
    let lectures = new ass_detail(batch, topics, proff, date, time);
    arr.push(lectures);
    localStorage.setItem("lectures", JSON.stringify(arr));
    alert("Assignment created successfully");
  }

  function create() {
    document.querySelector("#add").style.display = "block";
    document.querySelector("#display").style.display = "none";
  }
  function display() {
    document.querySelector("#add").style.display = "none";
    document.querySelector("#display").style.display = "block";

    document.querySelector("tbody").innerHTML = null;
    arr.forEach(function (ele, index) {
      let tr = document.createElement("tr");
      let topic = document.createElement("td");
      let date = document.createElement("td");
      let batch = document.createElement("td");
      let proff = document.createElement("td");
      let time = document.createElement("td");
      let remove = document.createElement("td");
      remove.setAttribute("class", "remove");
      remove.addEventListener("click", function () {
        removedata(index);
      });
      time.innerText = ele.time;
      topic.innerText = ele.topic;
      date.innerText = ele.date;
      batch.innerText = ele.batch;
      proff.innerText = ele.instructor;

      remove.innerText = "Remove";
      tr.append(topic, batch, proff, date,time, remove);
      document.querySelector("tbody").append(tr);
    });
  }

  function removedata(index) {
    arr.splice(index, 1);
    display();
    localStorage.setItem("lectures", JSON.stringify(arr));
  }

  let pf = JSON.parse(localStorage.getItem("signupdata"));
  let profile = pf.filter((ele) => {
    return ele.status === "true";
  });

  if (profile.length > 0) {
    document.getElementById("profile").innerText = profile[0].username;
  }


  console.log(arr);