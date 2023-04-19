const colorMap = {
  white: [255, 255, 255],
  black: [0, 0, 0],
  red: [255, 0, 0],
  green: [0, 255, 0],
  blue: [0, 0, 255],
  yellow: [255, 255, 0],
  cyan: [0, 255, 255],
  magenta: [255, 0, 255],
};

const colorPalletDiv = document.querySelector(".scrollable-container");

window.onload = handleOnLoadFunctionality();

function handleOnLoadFunctionality() {
  const choosenCategory = chooseRandomCategory();
  const shades = generateShades(colorMap[choosenCategory]);
  console.log(shades);
  for (let element of shades) {
    // console.log(element);
    const colorPalletShadesDiv = document.createElement("div");
    colorPalletShadesDiv.classList.add("generated-color-divs");
    colorPalletShadesDiv.innerHTML = element;
    colorPalletShadesDiv.style.background = element;
    colorPalletDiv.appendChild(colorPalletShadesDiv);
  }
}

function chooseRandomCategory() {
  const categories = Object.keys(colorMap);
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
}

