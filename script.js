// Fixed password
const fixedPassword = "123456";

// Login Function
function loginUser() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (password === fixedPassword) {
    localStorage.setItem("currentUser", username);
    window.location.href = "register.html";
  } else {
    alert("Incorrect password.");
  }
  return false;
}

// Register Booking
function registerBooking() {
  const name = document.getElementById("studentName").value;
  const dob = document.getElementById("dob").value;
  const time = document.getElementById("timing").value;
  const book = document.getElementById("book").value;

  const bookingInfo = {
    name,
    dob,
    time,
    book,
    user: localStorage.getItem("currentUser") || "unknown"
  };

  localStorage.setItem("bookingData", JSON.stringify(bookingInfo));
  window.location.href = "submitted.html";
  return false;
}
