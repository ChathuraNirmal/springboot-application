let btnSaveOnclick = document.getElementById("btn-save-onclick");
function btnSaveStudentDetailsOnClick() {
  console.log("done");

  let requestBody = {
    name: document.getElementById("input-name").value,
    address: document.getElementById("input-address").value,
    age: document.getElementById("input-age").value,
  };

  fetch("http://localhost:8080/create-student-details", {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log("Succesfull");
    });
}
btnSaveOnclick.addEventListener("click", btnSaveStudentDetailsOnClick);
