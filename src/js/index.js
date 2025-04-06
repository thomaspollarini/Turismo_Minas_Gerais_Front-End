/*function selectContent(placeId){
    const selected = document.querySelector("div.place.selected");
    if (selected) {
        selected.classList.remove('selected');
    }

    const content = document.querySelector("div#" + placeId);
    if (content) {
        content.classList.add('selected');
    }
}

function selectButton(buttonId) {
    
    const button = document.querySelector("button#" + buttonId);
    if (button) {
        button.classList.add('selected');
    }

    
}*/

const buttons = document.querySelectorAll(".button");
const places = document.querySelectorAll(".place");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const buttonSelected = document.querySelector("button.selected");
        if (buttonSelected) {
            buttonSelected.classList.remove('selected');
        }

        button.classList.add('selected');
        
        const placeSelected = document.querySelector(".place.selected");
        if (placeSelected) {
            placeSelected.classList.remove('selected');
        }
        places[index].classList.add('selected');
    });
});