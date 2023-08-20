var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom10 = new Audio("tom-1.mp3");
      tom10.play();
      break;

    case "a":
      var tom20 = new Audio("tom-2.mp3");
      tom20.play();
      break;

    case "s":
      var tom30 = new Audio('tom-3.mp3');
      tom30.play();
      break;

    case "d":
      var tom40 = new Audio('tom-4.mp3');
      tom40.play();
      break;

    case "j":
      var snare0 = new Audio('snare.mp3');
      snare0.play();
      break;

    case "k":
      var crash0 = new Audio('crash.mp3');
      crash0.play();
      break;

    case "l":
      var kick0 = new Audio('kick-bass.mp3');
      kick0.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
