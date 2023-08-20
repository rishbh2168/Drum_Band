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
    case "w1":
      var tom11 = new Audio("tom-1.mp3");
      tom11.play();
      break;

    case "a1":
      var tom22 = new Audio("tom-2.mp3");
      tom22.play();
      break;

    case "s1":
      var tom33 = new Audio('tom-3.mp3');
      tom33.play();
      break;

    case "d1":
      var tom44 = new Audio('tom-4.mp3');
      tom44.play();
      break;

    case "j1":
      var snare1 = new Audio('snare.mp3');
      snare1.play();
      break;

    case "k1":
      var crash1 = new Audio('crash.mp3');
      crash1.play();
      break;

    case "l1":
      var kick1 = new Audio('kick-bass.mp3');
      kick1.play();
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
