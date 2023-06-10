const textToPractice = document.querySelector(".sample-text p");
const keyboardKey = document.querySelectorAll(".key");
keyboardKey[55].innerHTML = " ";
// const testParagraph = (textToPractice.innerHTML = paragraphs[0]);
let pressedPara = [];
let count = 0;

function getRandomParagraph() {
  let randomIndex = Math.floor(Math.random() * paragraphs.length);

  textToPractice.innerHTML = "";

  paragraphs[randomIndex].split("").forEach((char) => {
    let spanTag = `<span>${char}</span>`;
    textToPractice.innerHTML += spanTag;
  });

  textToPractice.querySelectorAll("span")[0].classList.add("active");
}
getRandomParagraph();

document.addEventListener("keypress", function (event) {
  const characters = textToPractice.querySelectorAll("span");
  console.log("characters", characters);

  let pressedLetter = event.key;

  if (event.key >= "a" && event.key <= "z") {
    pressedLetter = event.key.toUpperCase();
  }
  for (let i = 0; i < keyboardKey.length; i++) {
    if (keyboardKey[i].innerHTML == pressedLetter) {
      count++;
      keyboardKey[i].classList.add("active");
      if (count == 1) {
        pressedPara.push(event.key);
      }
      setTimeout(() => {
        keyboardKey[i].classList.remove("active");
      }, 300);

      if (characters[pressedPara.length - 1].innerText == " ") {
        characters[pressedPara.length - 1].innerText = "-";
      }

      if (characters[pressedPara.length - 1].innerText == event.key) {
        console.log("matched");
        console.log(characters[pressedPara.length - 1]);

        characters[pressedPara.length - 1].classList.add("matched");
      } else {
        characters[pressedPara.length - 1].classList.add("wrong");
        console.log("wrong");
      }
      /*  if (testParagraph[pressedPara.length - 1] == keyboardKey[i].innerHTML) {
        console.log(
          "textToPracticetextToPracticetextToPracticetextToPractice",
          textToPractice,
          testParagraph[pressedPara.length - 1]
        );

        // console.log("textToPractice", testParagraph[pressedPara.length - 1]);
      } */
    }
  }
  count = 0;
  console.log("pressedPara", pressedPara);
});
