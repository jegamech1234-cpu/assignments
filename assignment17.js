// Example user object
const user = {
  isLoggedIn: true,
  role: "admin",
};

// Check if the user is logged in
if (user.isLoggedIn) {
  console.log(" User is logged in.");

  // Check the user's role
  if (user.role === "admin") {
    console.log(" Welcome Admin! You have full access.");
  } else if (user.role === "user") {
    console.log(" Welcome User! You have limited access.");
  } else {
    console.log(" role detected!");
  }
} else {
  console.log("Please log in to continue.");
}


