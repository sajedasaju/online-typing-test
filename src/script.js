const keys = document.getElementsByClassName("key");
const textToPractice = document.getElementById("text-to-practice");
const totalNumberOfChars = textToPractice.textContent.length;
// First, get the time elapsed and the number of characters typed
let startTime = new Date(); // Record the start time

function getTypingResult() {
  console.log("done");
  let endTime = new Date(); // Record the end time
  let timeElapsed = (endTime - startTime) / 1000; // Calculate the time elapsed in seconds

  // Calculate the WPM
  let wpm = totalNumberOfChars / 5 / (timeElapsed / 60); // The average word length is assumed to be 5 characters

  // Display the result
  console.log("WPM: " + wpm.toFixed(2)); // The toFixed() method is used to round the result to 2 decimal places
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Shift") {
    return;
  }

  for (let i = 0; i < keys.length; i++) {
    if (keys[i].textContent.toLowerCase() === e.key.toLowerCase()) {
      keys[i].style.background = "#ccc";
      setTimeout(() => {
        keys[i].style.background = "white";
      }, 500);
      break;
    }
  }

  let node = textToPractice.childNodes[textToPractice.childNodes.length - 1];
  if (node.nodeType === Node.TEXT_NODE && node.textContent.length > 0) {
    let span = document.createElement("span");
    span.innerText =
      node.textContent.charAt(0) === " " ? "-" : node.textContent.charAt(0);

    if (e.key === node.textContent.charAt(0)) {
      span.style.color = "green";
    } else {
      span.style.color = "red";
    }

    node.textContent = node.textContent.substring(1);
    textToPractice.insertBefore(span, node);

    if (node.textContent.length === 1) {
      getTypingResult();
    }
  } else {
    getTypingResult();
  }
});
