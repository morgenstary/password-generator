const char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()".split("");
let password1 = document.getElementById('rectangle-1')
let password2 = document.getElementById('rectangle-2')
let password3 = document.getElementById('rectangle-3')
let password4 = document.getElementById('rectangle-4')
document.getElementById('button').addEventListener('click', genPw)

function genPw() {
    genPw1()
    genPw2()
    genPw3()
    genPw4()
}


function genPw1() {
    password1.textContent = ''
    let loopTime = 16
    for (let i = 0; i < loopTime; i++) {
        let pw = char[Math.floor(Math.random() * 72)]
        password1.textContent += pw
    }
}


function genPw2() {
    password2.textContent = ''
    let loopTime = 16
    for (let i = 0; i < loopTime; i++) {
        let pw = char[Math.floor(Math.random() * 72)]
        password2.textContent += pw
    }
}

function genPw3() {
    password3.textContent = ''
    let loopTime = 16
    for (let i = 0; i < loopTime; i++) {
        let pw = char[Math.floor(Math.random() * 72)]
        password3.textContent += pw
    }
}

function genPw4() {
    password4.textContent = ''
    let loopTime = 16
    for (let i = 0; i < loopTime; i++) {
        let pw = char[Math.floor(Math.random() * 72)]
        password4.textContent += pw
    }
}

