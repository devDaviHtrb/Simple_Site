'use strict';

const switcher = document.querySelector(".btn")
switcher.addEventListener("click", ()=>{
    document.body.classList.toggle('dark-theme')
    var className = document.body.className
    this.textContent = (className=="light-theme") ? "Dark" : "Light" 
    console.log("current class name is:" + className) 
})