window.addEventListener("load", function () {
  var button = document.getElementsByClassName("submit")[0];
  var form = document.getElementById("AllForm");

  button.addEventListener("click", function () {
    form.style.display = "none"; // hide form

    alert("Succesfully Registered"); // show message
  });
});

var currentStep = 1;
var steps = document.querySelectorAll('.step');

function nextStep(stepNumber) {
  if (stepNumber == currentStep && validateForm()) {
    steps[currentStep - 1].classList.remove('active');
    currentStep++;
    steps[currentStep - 1].classList.add('active');

    // hide the previous step name
    stepNames[currentStep - 2].style.display = 'none';
    // show the current step name
    stepNames[currentStep - 1].style.display = 'block';
  }
}

function validateForm() {
  var isValid = true;
  var inputs = steps[currentStep - 1].querySelectorAll('input[type="text"]');

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() == "") {
      isValid = false;
      inputs[i].classList.add('error');
    } else {
      inputs[i].classList.remove('error');
    }
  }

  return isValid;
}

// hide all step names initially
var stepNames = document.querySelectorAll('h2');
for (var i = 0; i < stepNames.length; i++) {
  stepNames[i].style.display = 'none';
}

// show the first step name initially
stepNames[0].style.display = 'block';

// store user information in local storage
document.getElementById("step1-next").addEventListener("click", function(event) {
  event.preventDefault(); // prevent the form from submitting normally
  
  const userInfo = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value
  };
  
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  const storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
  
  if (storedUserInfo) {
    document.getElementById("name").value = storedUserInfo.name;
    document.getElementById("email").value = storedUserInfo.email;
    document.getElementById("phone").value = storedUserInfo.phone;
  }
});


//step2 to local storage


document.getElementById("step2-next").addEventListener("click", function(event) {
  event.preventDefault(); // prevent the form from submitting normally
  
  const pickupDetailes = {
    Address: document.getElementById("address").value,
    City: document.getElementById("city").value,
    State: document.getElementById("state").value,
    Zipcode: document.getElementById("zip").value

  };
  
  localStorage.setItem("picukupDetailes", JSON.stringify(pickupDetailes));
  const storedPickupInfo = JSON.parse(localStorage.getItem("pickupDetailes"));
  
  if (storedPickupInfo) {
    document.getElementById("address").value = storedPickupInfo.address;
    document.getElementById("city").value = storedPickupInfo.city;
    document.getElementById("state").value = storedPickupInfo.state;
    document.getElementById("zip").value = storedPickupInfo.zip;

  }
});


//radio buttons into local storage
// Get the radio buttons
var allCategoriesRadioButton = document.getElementById("all-categories");
var specificProductsRadioButton = document.getElementById("specific-products");

// Add event listeners to the radio buttons
allCategoriesRadioButton.addEventListener("change", saveRadioButtonValue);
specificProductsRadioButton.addEventListener("change", saveRadioButtonValue);

// Function to save the selected radio button value to local storage
function saveRadioButtonValue() {
  if (allCategoriesRadioButton.checked) {
    localStorage.setItem("selectedProduct", "allCategories");
  } else if (specificProductsRadioButton.checked) {
    localStorage.setItem("selectedProduct", "specificProducts");
  }
}

// Function to retrieve the selected radio button value from local storage
function getSelectedProduct() {
  return localStorage.getItem("selectedProduct");
}

// Set the selected radio button based on the value retrieved from local storage
var selectedProduct = getSelectedProduct();
if (selectedProduct === "allCategories") {
  allCategoriesRadioButton.checked = true;
} else if (selectedProduct === "specificProducts") {
  specificProductsRadioButton.checked = true;
}
