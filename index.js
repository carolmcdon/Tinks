document.addEventListener('DOMContentLoaded', (event) => {
    console.log("The DOM has loaded")
})

let btnYes = document.querySelector('#yes')
let btnYesInRed = document.querySelector('#yesInRed')

btnYes.addEventListener('click', (event) => {
    return alert("You are absolutely right.") 
})

btnYesInRed.addEventListener('click', (event) => {
    return alert("You are absolutely right. In red.") 
})

let img = document.querySelector('img')

img.addEventListener('click', (event) => {
    return img.src = '/Users/carolinemcdonald/Development/code/phase-1/Project-Phase-1/IMG_9104.jpg'
})