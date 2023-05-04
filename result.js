// Get the form data from local storage
var formData = localStorage.getItem("formData");

// If there is no form data, display an error message
if (formData === null) {
  document.getElementById("tableData").innerHTML = "<tr><td colspan='4'>No data found.</td></tr>";
} else {
  // Parse the form data into an array
  formData = JSON.parse(formData);

  // Generate the table rows for each form entry
  var tableRows = "";
  for (var i = 0; i < formData.length; i++) {
    tableRows += "<tr><td>" + formData[i].date 
                // + "</td><td>" + formData[i].gender 
                // + "</td><td>" + formData[i].weight  
                // + "</td><td>" + formData[i].gender
                + "</td><td>" + formData[i].heartrate
                + "</td><td>" + formData[i].systolic 
                + "</td><td>" + formData[i].diastolic  
                + "</td><td>" + formData[i].diagnosis
                // + "</td><td>" + formData[i].cholesterol 
                // + "</td><td>" + formData[i].glucose
                // + "</td><td>" + formData[i].cardio
                // + "</td><td>" + formData[i].smoke 
                // + "</td><td>" + formData[i].alcohol  
                // + "</td><td>" + formData[i].activity 
                + "</td><td><button onclick='deleteData(" + i + ")'>Delete</button></td></tr>";
  }

  // Display the table rows in the results page
  document.getElementById("tableData").innerHTML = tableRows;
}

// Function to edit form data
function editData(index) {
  // Get the form data from local storage
  var formData = localStorage.getItem("formData");

  // Parse the form data into an array
  formData = JSON.parse(formData);
// document.getElementById("age").value = formData[index].age;
// document.getElementById("gender").value = formData[index].gender;
// document.getElementById("weight").value = formData[index].weight;
// document.getElementById("height").value = formData[index].height;
document.getElementById("date").value = formData[index].date;
document.getElementById("heartrate").value = formData[index].heartrate;
document.getElementById("systolic").value = formData[index].systolic;
document.getElementById("diastolic").value = formData[index].diastolic;
document.getElementById("diagnosis").value = formData[index].diagnosis;
// document.getElementById("cholesterol").value = formData[index].cholesterol;
// document.getElementById("glucose").value = formData[index].glucose;
// document.getElementById("cardio").value = formData[index].cardio;
// document.getElementById("smoke").value = formData[index].smoke;
// document.getElementById("alcohol").value = formData[index].alcohol;
// document.getElementById("activity").value = formData[index].activity;


  // Remove the form data from the array
  formData.splice(index, 1);

  // Save the updated form data to local storage
  localStorage.setItem("formData", JSON.stringify(formData));

  // Redirect to the registration form page to edit the data
  window.location.href = "registration.html";
}
//Function to edict

// Function to delete form data
function deleteData(index) {
  // Get the form data from local storage
  var formData = localStorage.getItem("formData");

  // Parse the form data into an array
  formData = JSON.parse(formData);

  // Remove the form data from the array
  formData.splice(index, 1);

  // Save the updated form data to local storage
  localStorage.setItem("formData", JSON.stringify(formData));

  // Reload the results page to display the updated data
  window.location.reload();
}
function changeLanguage(language) {
  var element = document.getElementById("url");
  element.value = language;
  element.innerHTML = language;
}

function showDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}