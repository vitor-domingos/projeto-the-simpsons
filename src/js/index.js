const buttons = document.querySelectorAll('.button');

const characters = document.querySelectorAll('.character'); 

buttons.forEach((button, index) =>{
button.addEventListener("click", () => {

deselectbutton();
deselectcharacter();

button.classList.add("selected");
   
characters[index].classList.add("selected")
});
});


function deselectbutton() {
    const buttonselected = document.querySelector('.button.selected');
    buttonselected.classList.remove("selected");
}
      
function deselectcharacter() {
    const characterselected = document.querySelector('.character.selected');
    characterselected.classList.remove("selected");
}
