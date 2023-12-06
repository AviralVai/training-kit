// Select increment and decrement buttons
const incrementCount = document.getElementById("increment-count");
const decrementCount = document.getElementById("decrement-count");

// Select total count
const totalCount = document.getElementById("total-count");

// Variable to track count
var cnt = 0;

// Display initial count value
totalCount.innerHTML = cnt;

// Function to increment count
const handleIncrement = () => {
  cnt++;
  totalCount.innerHTML = cnt;
};

// Function to decrement count
const handleDecrement = () => {
  cnt--;
  totalCount.innerHTML = cnt;
};

// Add click event to buttons
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);