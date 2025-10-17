var inputname = document.getElementById("name")
var age = document.getElementById("age")
var email = document.getElementById("email")
var password = document.getElementById("password")
var gender = document.getElementById("gender")
var course = document.getElementById("course")


var tablebody = document.getElementById("tablebody")

var Savebtn = document.getElementById("savebtn")


Savebtn.addEventListener("click", function () {


  event.preventDefault()

  if (inputname.value === "" || email.value === "" || password.value === "") {
    alert("Some Field is Empty")
    return
  }


  var row = document.createElement("tr")
  row.innerHTML =
    "<td class='border border-gray-400'>" + inputname.value + "</td>" +
    "<td class='border border-gray-400'>" + age.value + "</td>" +
    "<td class='border border-gray-400'>" + email.value + "</td>" +
    "<td class='border border-gray-400'>" + password.value + "</td>" +
    "<td class='border border-gray-400'>" + (document.querySelector('input[name=\"gender\"]:checked')?.value || "") + "</td>" +
    "<td class='border border-gray-400'>" + course.value + "</td>" +
    "<td class='border border-gray-400 py-2'>" + "<button class='bg-red-500 py-1 px-2 rounded-md' onclick=" + "deleteitem(event)>Delete</button>" + "</td>"
  tablebody.append(row)

})


function deleteitem(event) {
  const button = event.target;
  const row = button.closest('tr');
  row.remove();
}




