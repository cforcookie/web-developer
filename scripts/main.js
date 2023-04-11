'use strict'

function copyText() {
    let copyText = document.getElementById("textToCopy");
    navigator.clipboard.writeText(copyText.innerText);
}

function menuPop() {
    document.getElementById("Menu").style.width = "300px";
    document.getElementById("Menu").style.height = "400px";
    document.getElementById("menuContent").style.opacity = "1";
    document.getElementById("Menu").style.borderRadius = "0 0 50px 0";
    document.getElementById("Menu").style.boxShadow = "10px 10px 20px rgba(0, 0, 0, 0.1)";

}

function menuPopLeave() {
    document.getElementById("Menu").style.width = "50px";
    document.getElementById("Menu").style.height = "50px";
    document.getElementById("menuContent").style.opacity = "0";
    document.getElementById("Menu").style.borderRadius = "0 0 15px 0";
    document.getElementById("Menu").style.boxShadow = "0 0 0";
}

function scrollToElement(id) {
    // Найти все ссылки начинающиеся на #
    const anchors = document.querySelectorAll('a[href^="#"]')

    // Цикл по всем ссылкам
    for(let anchor of anchors) {
        anchor.addEventListener("click", function(e) {
            
        e.preventDefault() // Предотвратить стандартное поведение ссылок

        // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
        const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
        // Плавная прокрутка до элемента с id = href у ссылки
        document.querySelector(goto).scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
    })
}
}