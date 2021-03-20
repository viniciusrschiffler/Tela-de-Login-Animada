const inputLogin = document.querySelector('#login')
const inputPassword = document.querySelector('#password')
const inputSubmit = document.querySelector('#submit')


inputLogin.addEventListener('keyup', handleKeyUp)
inputPassword.addEventListener('keyup', handleKeyUp)


inputSubmit.addEventListener('click', e => {
    e.preventDefault()

    let inputLoginIsFull = handleEmptyInput(inputLogin)
    let inputPasswordIsFull = handleEmptyInput(inputPassword)

    if (inputLoginIsFull === false || inputPasswordIsFull === false) {
        console.log('Preencha os campos');
    }else{
        console.log('Acessor liberado');
    }
})


function handleEmptyInput(input) {
    if (input.value === '') {
        input.style.borderColor = '#e74c3c'

        input.addEventListener('click', e => {
            input.style.borderColor = ''
        })

        return false
    }
}


function handleKeyUp(event) {
    let input = document.querySelector(`#${event.path[0].id}`)

    if (event.target.value !== '') {
        input.style.borderColor = "#2ecc71"
    }else{
        input.style.borderColor = ""
    }
}
