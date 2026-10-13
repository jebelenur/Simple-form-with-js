const submitBtn = document.querySelector(".submitBtn");

// Input elements
const fullName = document.querySelector(".fullName");
const userEmail = document.querySelector(".userEmail");
const userPass = document.querySelector(".userPass");
const confirmPass = document.querySelector(".confirmPass");
const profilePic = document.querySelector(".profilePic");
const feedback = document.querySelector(".feedback");

// Error span elements
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passError = document.querySelector("#passError");
const cpassError = document.querySelector("#cpassError");
const fileError = document.querySelector("#fileError");
const feedbackError = document.querySelector("#feedbackError");

// Regex for email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submitBtn.addEventListener("click", () => {
  // 1. Full Name Validation
  if (!fullName.value) {
    nameError.innerHTML = "Name is Required";
    fullName.style.border = "1px solid red";
  } else {
    nameError.innerHTML = "";
    fullName.style.border = "1px solid gray";
  }

  // 2. Email Validation
  if (!userEmail.value) {
    emailError.innerHTML = "Email is Required";
    userEmail.style.border = "1px solid red";
  } else if (!emailRegex.test(userEmail.value)) {
    emailError.innerHTML = "Invalid email format";
    userEmail.style.border = "1px solid red";
  } else {
    emailError.innerHTML = "";
    userEmail.style.border = "1px solid gray";
  }

  // 3. Password Validation
  if (!userPass.value) {
    passError.innerHTML = "Password is Required";
    userPass.style.border = "1px solid red";
  } else if (userPass.value.length < 6) {
    passError.innerHTML = "Password must be at least 6 characters";
    userPass.style.border = "1px solid red";
  } else {
    passError.innerHTML = "";
    userPass.style.border = "1px solid gray";
  }

  // 4. Confirm Password Validation
  if (!confirmPass.value) {
    cpassError.innerHTML = "Please confirm your password";
    confirmPass.style.border = "1px solid red";
  } else if (confirmPass.value !== userPass.value) {
    cpassError.innerHTML = "Passwords do not match";
    confirmPass.style.border = "1px solid red";
  } else {
    cpassError.innerHTML = "";
    confirmPass.style.border = "1px solid gray";
  }

  // 5. File Upload Validation
  if (!profilePic.value) {
    fileError.innerHTML = "Profile picture is required";
    profilePic.style.border = "1px solid red";
  } else {
    fileError.innerHTML = "";
    profilePic.style.border = "1px solid gray";
  }

  // 6. Feedback Textarea Validation
  if (!feedback.value) {
    feedbackError.innerHTML = "This field is required";
    feedback.style.border = "1px solid red";
  } else {
    feedbackError.innerHTML = "";
    feedback.style.border = "1px solid gray";
  }
});