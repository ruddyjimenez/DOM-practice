let intro = document.getElementById('intro')

let list = document.createElement('li')
list.textContent = 'added List'
let newList = document.querySelector('#list')
newList.append(list)

let paragraph = document.createElement('p')
document.body.append(paragraph)
paragraph.textContent = 'This is a paragraph'
paragraph.style.background = 'burlywood'
paragraph.style.fontSize = '30px'
paragraph.style.textAlign = 'center'
