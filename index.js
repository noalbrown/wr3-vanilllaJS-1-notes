// DOM
// console.log('hello world')
// console.log(document)

// Accessing DOM Elements
const section = document.getElementById('awesome-section')
// console.log('section', section)

const li = document.getElementsByTagName('li')
// console.log('li', li)

const querySelectOne = document.querySelector('#submit-btn')
// console.log(querySelectOne)

const queryAll = document.querySelectorAll('.awesome-thing')
// console.log(queryAll)

// Node Properties
// innerText, innerHTML, className, classList, style, value
const awesome = document.getElementById('my-list')
// console.log(awesome.innerText)
// console.log(awesome.innerHTML)
// const box = document.querySelector('.div-one')
// console.log(box.className)
const title = document.getElementById('title')
title.style = "color:red"

const input = document.getElementById('my-input')
// console.log(input.value)

// Events and Event Handlers
// let body = document.querySelector('body')
// body.onclick = alert('you clicked!')

function sayHello() {
  alert('you clicked me!')
}
// Stop alert
// with html (event)
// function sayHello(event){
//   event.stopPropagation()
//   alert('you clicked me!')
// }


