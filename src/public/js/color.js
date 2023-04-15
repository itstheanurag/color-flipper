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

    let para = el.querySelector(".color-value");

    const randomColor = getRandomColor();

    if (!button.classList.contains("locked")) {
      el.style.background = randomColor;
      para.innerHTML = randomColor;
      console.log(hexToRgb(randomColor));
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

  const message = document.getElementById("copy-msg");
  message.style.display = "flex";
  message.innerHTML = "copied";
  setTimeout(function () {
    message.innerHTML = "";
    message.style.display = "none";
  }, 1500);
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

function hexToRgb(hex) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

  // Convert to RGB values
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        red: parseInt(result[1], 16),
        green: parseInt(result[2], 16),
        blue: parseInt(result[3], 16),
      }
    : null;
}
