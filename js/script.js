let inpname = document.querySelector('.input_name')

let inpsurn = document.querySelector('.input_surn')

let inpbirth = document.querySelector('.date_birthday')

let btn = document.querySelector('.button_push')

let showhtml = document.querySelector('.showhtml')

let info = [

]

btn.addEventListener('click', () => {
   info.push({ name: inpname.value, surname: inpsurn.value, birthday: inpbirth.value, })
   render()
})

const render = () => {
   const people = info.map((item) => {
      html = `<li>${item.name}${item.surname}${item.birthday}</li>`
      return html
   })
   showhtml.innerHTML = people.join('')
}