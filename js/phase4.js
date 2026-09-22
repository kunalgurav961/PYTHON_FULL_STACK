"use strict"
// let h1 = document.getElementById("h1");
// console.log(h1.innerText)

// let boxes = document.getElementsByClassName('box')
// console.log(boxes[1])


// let divs = document.getElementsByTagName('div')
// console.log(divs)


let btn = document.getElementById("btn");
let username = document.getElementById("username")
let password = document.getElementById("password")
// console.log(btn)

btn.addEventListener('click', () => {
    console.log(`username -> ${username.value}`)
    console.log(`password -> ${password.value}`)
})

// btn.addEventListener('mouseenter', () => {
//     console.log("mouse Entered!")
// })
