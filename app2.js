// Increasing and Decreasing counter
let count = 0
const value = document.getElementById('value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classlist
    if(styles.contains('decrease')) {
      count--
    } else if (styles.contains('increase')) {
      count++
    } else {
      count = 0
    }
    if (count > 0) {
      value.style.color = 'green'
    }
     if (counts < 0) {
            value.style.color = 'red'
        }
        if (counts === 0) {
            value.style.color = '#222'
        }
    value.textContent = count
  })
})