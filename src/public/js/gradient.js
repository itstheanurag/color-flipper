const gradient = document.getElementById("gradient");
const colorsDiv = document.getElementById("colors");

function generateGradient(color1, color2, direction, type) {
  
  let gradientType = "";

  switch (type) {
    case "linear":
      gradientType = `linear-gradient(${direction}deg, ${color1}, ${color2})`;
      break;
    case "radial":
      gradientType = `radial-gradient(${color1}, ${color2})`;
      break;
    case "repeating-linear":
      gradientType = `repeating-linear-gradient(${direction}deg, ${color1}, ${color2})`;
      break;
    case "repeating-radial":
      gradientType = `repeating-radial-gradient(${color1}, ${color2})`;
      break;
    case "diagonal":
      gradientType = `linear-gradient(${direction}deg, ${color1}, ${color2}, ${color1}, ${color2})`;
      break;
    case "diamond":
      gradientType = `radial-gradient(ellipse at center, ${color1} 0%, ${color1} 47%, ${color2} 53%, ${color2} 100%)`;
      break;
    case "conic":
      gradientType = `conic-gradient(from ${direction}deg, ${color1}, ${color2})`;
      break;
    case "angular":
      gradientType = `linear-gradient(${direction}deg, ${color1} 0%, ${color2} 49%, ${color1} 51%, ${color2} 100%)`;
      break;
    case "striped":
      gradientType = `repeating-linear-gradient(${direction}deg, ${color1} 0, ${color1} 10px, ${color2} 10px, ${color2} 20px)`;
      break;
    case "radial-stripe":
      gradientType = `repeating-radial-gradient(circle, ${color1}, ${color1} 10px, ${color2} 10px, ${color2} 20px)`;
      break;
    default:
      gradientType = `linear-gradient(${direction}deg, ${color1}, ${color2})`;
      break;
  }

  return gradientType;
}

function directionToDegree(direction) {
  switch (direction.toLowerCase()) {
    case "top":
      return 270;
    case "topright":
      return 315;
    case "right":
      return 0;
    case "bottomright":
      return 45;
    case "bottom":
      return 90;
    case "bottomleft":
      return 135;
    case "left":
      return 180;
    case "topleft":
      return 225;
    default:
      throw new Error("Invalid direction input");
  }
}

console.log(generateGradient());
