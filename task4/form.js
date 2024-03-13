// user is only register when the email input by the user is match with emails array 
let emails = ['dhruv@gmail.com', 'DHRUV@gmail.com'];
// after creating user the name and password save in these array 
let names = [];
let passwords = [];
let email = "";
let name = "";
let password = "";
// Add click event listener to the button
document.getElementById("createuser").addEventListener("click", createuser);
// Function to append name and password to the array
function createuser() {
  let identify = 0;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  for (let i = 0; i < emails.length; i++) {
    // check is user enter a valid registered email
    if (email == emails[i]) {
      break;
    }
    // in case of invalid regisrered email
    else if (i == emails.length - 1 && (name !== null && name.trim() !== "" || password !== null && password.trim() !== "")) {
      alert("please enter registered email");
      identify = 1;
    }

  }
  // Append the element to the array
  if (name !== null && name.trim() !== "" && password !== null && password.trim() !== "" && identify == 0) {
    names.push(name);
    passwords.push(password);
    
    alert("user created successfully")
    // Log the updated array
    
    console.log("Array after appending:", names);
    console.log("Array after appending:", passwords);
  }
}
function login() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  // user exist or nor in database(array)
  for (let i = 0; i < emails.length; i++) {
    if (name == names[i] && password == passwords[i]) {
      alert("login successfully");
      // Store username in localStorage
      localStorage.setItem('username', name);
      localStorage.setItem('useremail', email);
      // Redirect to another page
      window.location.href = 'securepage.html';
      break;
    }
  }
}
