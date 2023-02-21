var popup = document.querySelector(".login__popup")
var popupBackground = document.querySelector(".login__popup-background")


function openPopup(){
    popup.classList.toggle("login__popup-open")
    popupBackground.classList.toggle("login__popup-background-open")
}