// const movableItems = document.querySelectorAll(".draggable");

// let draggingElement = null;

// movableItems.forEach((draggable) => {
//   draggable.addEventListener("dragstart", (event) => {
//     draggingElement = event.target;
//     event.dataTransfer.effectAllowed = "move";
//   });

//   draggable.addEventListener("dragover", (event) => {
//     event.preventDefault();
//   });

//   draggable.addEventListener("drop", (event) => {
//     event.preventDefault();
//     const targetElement = event.target;
//     if (draggingElement !== targetElement) {
//       const parent = draggingElement.parentNode;
//       const sibling =
//         targetElement.nextSibling === draggingElement
//           ? targetElement
//           : targetElement.nextSibling;
//       parent.insertBefore(draggingElement, sibling);
//     }
//   });
// });

const parent = document.getElementById("parent");

new Sortable(parent, {
  animation: 150,
  handle: ".draggable",
  draggable: ".draggable",
  ghostClass: "ghost",
  chosenClass: "chosen",
  onEnd: function (event) {
    console.log("Element moved from", event.oldIndex, "to", event.newIndex);
  },
});

