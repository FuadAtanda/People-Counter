let saveEl = document.getElementById('save-el')
let countEl = document.getElementById('count-el')
const incrementBtn = document.getElementById('increment-btn')
const saveBtn = document.getElementById('save-btn')

console.log(saveEl)

let count = 0

incrementBtn.addEventListener('click', increment)
saveBtn.addEventListener('click', save)

function increment () {
  count += 1
  countEl.textContent = count
  console.log(count)
}

function save () {
  let countStr = count + " - "
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0
}
