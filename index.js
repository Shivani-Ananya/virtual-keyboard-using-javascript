var numberOfDrumButtons = document.querySelectorAll(".Note").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".Note")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function (event) {
  switch (event.key.toLowerCase()) {
    case "a":
      makeSound("DO");
      buttonAnimation("DO");
      break;
    case "s":
      makeSound("RE");
      buttonAnimation("RE");
      break;
    case "d":
      makeSound("MI");
      buttonAnimation("MI");
      break;
    case "f":
      makeSound("FA");
      buttonAnimation("FA");
      break;
    case "h":
      makeSound("SOL");
      buttonAnimation("SOL");
      break;
    case "j":
      makeSound("LA");
      buttonAnimation("LA");
      break;
    case "k":
      makeSound("TI");
      buttonAnimation("TI");
      break;
    case "l":
      makeSound("DO(high)");
      buttonAnimation("DO(high)");
      break;
    default:
      console.log("Unmapped key: " + event.key);
  }
});

function makeSound(key) {
  switch (key) {
    case "DO":
      new Audio("sounds/1do.mp3").play();
      break;
    case "RE":
      new Audio("sounds/2re.mp3").play();
      break;
    case "MI":
      new Audio("sounds/3mi.mp3").play();
      break;
    case "FA":
      new Audio("sounds/4fa.mp3").play();
      break;
    case "SOL":
      new Audio("sounds/5sol.mp3").play();
      break;
    case "LA":
      new Audio("sounds/6la.mp3").play();
      break;
    case "TI":
      new Audio("sounds/7di.mp3").play();
      break;
    case "DO(high)":
      new Audio("sounds/8do.mp3").play();
      break;
    default:
      console.log("Invalid sound key: " + key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
