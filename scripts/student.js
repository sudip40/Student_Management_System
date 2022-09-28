let login = JSON.parse(localStorage.getItem("signupdata"));
  let pf = JSON.parse(localStorage.getItem("signupdata"));
  let profile = pf.filter((ele) => {
    return ele.status === "true";
  });

  if (profile.length > 0) {
    document.getElementById("profile").innerText = profile[0].username;
  }
  let lectures = JSON.parse(localStorage.getItem("lectures"));

  let assignments = JSON.parse(localStorage.getItem("Assignments"));

  let students = JSON.parse(localStorage.getItem("student_data"));

  let email = profile[0].email;
  let batch = students.filter((ele) => {
    return ele.email == email;
  });
  let s_batch = batch[0].batch;
  let s_lec = lectures.filter((ele) => {
    return ele.batch == s_batch;
  });
  let s_ass = assignments.filter((ele) => {
    return ele.batch == s_batch;
  });

  s_lec.forEach((ele) => {
    let div = document.createElement("div");
    let topic = document.createElement("h2");
    topic.innerText = ele.topic;
    let att = document.createElement("button");
    att.innerText = "Attend";
    let ins = document.createElement("h3");
    ins.innerText = `lecture created by ${ele.instructor} on ${ele.date} starting at ${ele.time}`;
    div.append(topic, att, ins);
    document.querySelector("#lectures").append(div);
  });


  s_ass.forEach((ele) => {
    let div = document.createElement("div");
    let topic = document.createElement("h2");
    topic.innerText = ele.topic;
    let ins = document.createElement("h3");
    ins.innerText = `lecture created by ${ele.instructor}  on  ${ele.date} open on at ${ele.time}`;
    let disc = document.createElement("p");
    disc.innerText = ele.disc;
    let att = document.createElement("button");
    att.innerText = "submit";
    div.append(topic, att, ins, disc);
    document.querySelector("#assignments").append(div);
  });

  function lec() {
    document.querySelector("#assignments").style.display = "none";
    document.querySelector("#lectures").style.display = "block";
    lectures.forEach((el)=>{
      let box=document.createElement("div");
      let batch=document.createElement("h3");
      batch.innerText=el.batch;
      let topic=document.createElement("h3");
      topic.innerText=el.topic;
      let instructor=document.createElement("h3");
      instructor.innerText=el.instructor;
      let date=document.createElement("h3");
      date.innerText=el.date;
      let time=document.createElement("h3");
      time.innerText=el.time;
      box.append(batch,topic,instructor,date,time);
      document.querySelector("#lectures").append(box);
    })
  }

  function ass() {
    document.querySelector("#assignments").style.display = "block";
    document.querySelector("#lectures").style.display = "none";
    assignments.forEach((el)=>{
      let box=document.createElement("div");
      let batch=document.createElement("h3");
      batch.innerText=el.batch;
      let topic=document.createElement("h3");
      topic.innerText=el.topic;
      let disc=document.createElement("h3");
      disc.innerText=el.disc;
      let date=document.createElement("h3");
      date.innerText=el.date;
      let time=document.createElement("h3");
      time.innerText=el.time;
      box.append(batch,topic,disc,date,time);
      document.querySelector("#assignments").append(box);
    })
  }

  function display_profile() {
    document.querySelector("#user_prof").style.display = "block";
  }
  function closebox() {
    document.querySelector("#user_prof").style.display = "none";
  }

  function changedata() {
    let name = document.querySelector("#changename").value;
    let pass = document.querySelector("#changepass").value;
    let re = document.querySelector("#retyped").value;

    if (pass == re) {
      login.forEach((ele) => {
        if (ele.email == email) {
          ele.username = name;
          ele.password = re;
        }
      });
      localStorage.setItem("signupdata", JSON.stringify(login));
    } else {
      alert("difference in password and retyped password !");
    }

  }