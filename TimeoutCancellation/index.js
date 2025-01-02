console.log("hello world");
// Setting a timeout
const timeoutId = setTimeout(() => {
  console.log("This will not be logged if we cancel the timeout");
}, 5000);

// Canceling the timeout
clearTimeout(timeoutId);
