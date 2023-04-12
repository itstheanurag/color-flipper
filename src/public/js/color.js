const mainDiv = document.querySelector(".main-color-div");
const draggables = document.getElementsByClassName("color-div");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const loadDataOnKeyDown = (mainDiv, draggables) => {
  let arrayOfColorDivs = Array.from(draggables);
  for (let el of arrayOfColorDivs) {
    let button = el.querySelector(".btn-lock");
    if (!button.hasEventListener) {
      button.hasEventListener = true;
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        console.log("button clicked");

        if (button.classList.contains("locked")) {
          button.classList.remove("locked");
          button.innerHTML = "Lock";
          console.log("class list lock removed");
        } else if (!button.classList.contains("locked")) {
          button.classList.add("locked");
          button.innerHTML = "Unlock";
          console.log("class list lock added");
        }
      });
    }

    let para = el.querySelector(".color-value");

    const randomColor = getRandomColor();

    if (!button.classList.contains("locked")) {
      el.style.background = randomColor;
      para.innerHTML = randomColor;
    }
  }
};

document.onload = loadDataOnKeyDown(mainDiv, draggables);
function handleCopyButtonClick(button) {
  let text = button.textContent;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((err) => {
      console.error("Error copying text to clipboard:", err);
    });
}

const draggingItem = Array.from(draggables);

for (let item of draggingItem) {
  const button = item.querySelector(".color-value");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    handleCopyButtonClick(button);
  });
}

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  event.stopImmediatePropagation();
  event.stopPropagation();
  if (event.code === "Space") {
    loadDataOnKeyDown(mainDiv, draggables);
  }
});
