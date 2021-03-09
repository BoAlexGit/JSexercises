// class -> .CLASS_NAME
// id -> #ID
// tag -> TAG_NAME

var div = document.querySelector('#playground')
var p = document.querySelectorAll('.text')
var h1 = document.querySelector('h1')
var input = document.querySelector('input')
div.innerHTML = '<h2 style="color: red;">From javascript</h2>'
h1.textContent = 'Changed from JS'
console.log(input.value)
console.log(div.innerHTML)
console.log(p)
console.log(h1.textContent)