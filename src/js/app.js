import * as flsFunctions from "./modules/webpChecker.js";
flsFunctions.isWebp()
/* код выше не удалять */




document.addEventListener('DOMContentLoaded', () => {
    let buttons = document.querySelectorAll(".our-customer__slider-button");
    let items = document.querySelector(".our-customer__slider-items");
    let item = document.querySelectorAll(".our-customer__slider-item");

    function height(i) {
        items.style.height = `${item[i].clientHeight}px`;
    };
    height(0)

    buttons.forEach((elem, i) => {
        buttons[i].addEventListener('click', (event) => {
            items.style.transform = `translate(-${i * 100}vw)`;
            buttons.forEach((elem, j) => {
                buttons[j].classList.remove("our-customer__slider-button_active");
            })
            buttons[i].classList.add("our-customer__slider-button_active");
            height(i)
        })
    })

});
