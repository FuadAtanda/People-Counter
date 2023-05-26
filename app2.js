let counts = 0

const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn) {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')) {
            counts--
        } else if (styles.contains('increase')) {
            counts++
        } else {
            counts = 0
        }
        if (counts > 0) {
            value.style.color = 'green'
        }
        if (counts < 0) {
            value.style.color = 'red'
        }
        if (counts === 0) {
            value.style.color = '#222'
        }
        value.textContent = counts
    })
})