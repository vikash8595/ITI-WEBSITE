// Function to update the visitor count
function updateVisitorCount() {
  var count = localStorage.getItem("visitorCount");

  // Check if the visitor count is stored in local storage
  if (count) {
    count = parseInt(count);
    count++; // Increment the count
  } 
   else {
    count = 1+1; // Set the initial count to 1
  }

  // Update the visitor count in local storage
  localStorage.setItem("visitorCount", count);

  // Update the visitor count in the HTML
  document.getElementById("visitorCount").textContent = count;
}

// Call the function to update the visitor count
updateVisitorCount();