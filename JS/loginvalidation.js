function validateLogin(event) {
    event.preventDefault(); 

    var username = document.getElementById("mail").value;
    var password = document.getElementById("passwords").value; 

    if (username === "admin" && password === "12345") {
        
        redirectToMainPage();
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

function redirectToMainPage() {
    window.location.href = "home.html";
}

  





    
// function validateLogin(event) {
//     event.preventDefault(); 

//     let username = document.getElementById("username");
//     let password = document.getElementById("password");
  
//     let bug = document.getElementById("bug");
//     let bug1 = document.getElementById("bug1");
  
//     // Username validation
//     if (username.value === "admin") {
//         // Valid username
//         bug.innerHTML = "Username is Valid";
//         bug.style.color = "green";
//     } else {
//         // Invalid username
//         bug.innerHTML = "Invalid Username.";
//         bug.style.color = "red";
//         return false;
//     }
  
//     // Password validation
//     if (password.value === "12345") {
//         bug1.innerHTML = "Password is Valid";
//         bug1.style.color = "green";
//     } else {
//         bug1.innerHTML = "Invalid Password.";
//         bug1.style.color = "red";
//         return false;
//     }
  

//     toMainPage();
//     return true;
// }

// function toMainPage() {
//     window.location.href = "index.html";
// }
