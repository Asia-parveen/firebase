





import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp9sS2U58SMR4Ibe1nLNmIEjKPEePOoXY",
  authDomain: "auth-form-2fa9a.firebaseapp.com",
  projectId: "auth-form-2fa9a",
  storageBucket: "auth-form-2fa9a.firebasestorage.app",
  messagingSenderId: "741353725254",
  appId: "1:741353725254:web:8926b345cf5a5fca471947",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Elements for sign-up
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signInButton = document.getElementById("signIn")

// Sign-up event listener
submit.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission
  createUserAccount();
});
signInButton.addEventListener("click", (event) => {
    event.preventDefault();
    signInUser();

});

// Function to create a user account
function createUserAccount() {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      alert("User signed up successfully");
      window.location.href = "signin.html"; // Redirect after sign up
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
}
function signInUser() {
    signInWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
      .then((userCredential) => {
        alert("User signed in successfully");
        window.location.href = "dashBoard.html"; // Redirect to dashboard
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

// Monitor authentication state (optional)
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
  } else {
    // User is signed out
  }
});




// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
// import {
//   getAuth,
//   onAuthStateChanged,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAp9sS2U58SMR4Ibe1nLNmIEjKPEePOoXY",
//   authDomain: "auth-form-2fa9a.firebaseapp.com",
//   projectId: "auth-form-2fa9a",
//   storageBucket: "auth-form-2fa9a.firebasestorage.app",
//   messagingSenderId: "741353725254",
//   appId: "1:741353725254:web:8926b345cf5a5fca471947",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // Sign-up elements
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const submit = document.getElementById("submit");

// // Sign-in elements
// const email1 = document.getElementById("email1");
// const password1 = document.getElementById("password1");
// const submit1 = document.getElementById("submit1");

// // Sign-up event listener
// submit.addEventListener("click", (event) => {
//   event.preventDefault();
//   createUserAccount();
// });

// // Sign-in event listener
// submit1.addEventListener("click", (event) => {
//   event.preventDefault();
//   signIn();
// });

// // Authentication state observer
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     window.location.href = "dashboard.html";
//   }
// });

// // Sign-up function
// function createUserAccount() {
//   createUserWithEmailAndPassword(auth, email.value, password.value)
//     .then(() => {
//       alert("User signed up successfully");
//       window.location.href = "signin.html";
//     })
//     .catch((error) => {
//       alert(error.message);
//     });
// }

// // Sign-in function
// function signIn() {
//   signInWithEmailAndPassword(auth, email1.value,  password1.value)
//     .then(() => {
//       alert("User signed in successfully");
//       window.location.href = "dashboard.html";
//     })
//     .catch((error) => {
//       alert(error.message);
//     });
// }


// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
// import {
//   getAuth,
//   onAuthStateChanged,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAp9sS2U58SMR4Ibe1nLNmIEjKPEePOoXY",
//   authDomain: "auth-form-2fa9a.firebaseapp.com",
//   projectId: "auth-form-2fa9a",
//   storageBucket: "auth-form-2fa9a.firebasestorage.app",
//   messagingSenderId: "741353725254",
//   appId: "1:741353725254:web:8926b345cf5a5fca471947",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // Elements for sign-up
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const submit = document.getElementById("submit");

// // Elements for sign-in
// const email1 = document.getElementById("email1"); // Use different IDs for sign-in
// const password1 = document.getElementById("password1");
// const submit1 = document.getElementById("submit1");

// // Sign-up event listener
// submit.addEventListener("click", createUserAccount);

// // Sign-in event listener
// submit1.addEventListener("click", signIn);

// // Monitor authentication state
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid;
//   } else {
//     // User is signed out
//   }
// });

// // Function to create a user account
// function createUserAccount() {
//   createUserWithEmailAndPassword(auth, email.value, password.value)
//     .then((userCredential) => {
//       // User signed up
//       alert("User signed up successfully");
//       // Redirect to sign-in page after successful sign-up
//       window.location.href = "signIn.html";
//     })
//     .catch((error) => {
//       const errorMessage = error.message;
//       alert(errorMessage);
//     });
// }

// // Function to sign in an existing user
// function signIn() {
//   signInWithEmailAndPassword(auth, email1.value, password1.value)
//     .then((userCredential) => {
//       alert("User signed in successfully");
//       const user = userCredential.user;
//       // Redirect to the homepage or another page after sign-in
//       window.location.href = "home.html";
//     })
//     .catch((error) => {
//       const errorMessage = error.message;
//       alert(errorMessage);
//     });
// }



// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
// import {
//   getAuth,
//   onAuthStateChanged,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyAp9sS2U58SMR4Ibe1nLNmIEjKPEePOoXY",
//   authDomain: "auth-form-2fa9a.firebaseapp.com",
//   projectId: "auth-form-2fa9a",
//   storageBucket: "auth-form-2fa9a.firebasestorage.app",
//   messagingSenderId: "741353725254",
//   appId: "1:741353725254:web:8926b345cf5a5fca471947",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const submit = document.getElementById("submit");

// const email1 = document.getElementById("email");
// const password1 = document.getElementById("password");
// const submit1 = document.getElementById("submit");

// submit.addEventListener("click", creatUserAccount);
// submit1.addEventListener("click", signIn);

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     //   alert(user)

//     const uid = user.uid;
//   } else {
//     //   alert(errorMessage)
//   }
// });
// function creatUserAccount() {
//   // console.log(email.value);
//   // console.log(password.value)
//   createUserWithEmailAndPassword(auth, email.value, password.value)
//     .then((userCredential) => {
//       // Signed up
//       const user = userCredential.user;
//       alert("user signed up");
//       // ...
//     })
//     .catch((error) => {
//       // const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage);
//       // ..
//     });
//   window.location.href = "signIn.html";
// }

// function signIn() {
//   const auth = getAuth();
//   signInWithEmailAndPassword(auth, email1.value, password1.value)
//     .then((userCredential) => {
//       alert("user signed in");
//       // Signed in
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//     //   const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorMessage);
//     });
// }
