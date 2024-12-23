document.addEventListener('submit', (event)=>{
    event.preventDefault()
})

const loginform = document.querySelector(".loginform")
const handleLogin = ()=>{
    formHandler(loginform)
}

const registerform = document.querySelector(".registerform")
const handleRegister = ()=>{
    formHandler(registerform)
}

const log_tabform = document.querySelector(".loginform")
const reg_tabform = document.querySelector(".registerform")

// log_tabform.addEventListener('click', ()=>loginform.attribute()

const formHandler = (formtohandle)=>{
    const form = new FormData(formtohandle)
    let formJSON = {}
    form.forEach((v,k)=>{
        formJSON[k] = v
    })
    console.log(formJSON)
}