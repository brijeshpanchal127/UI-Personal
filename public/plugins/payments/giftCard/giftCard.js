var form = document.createElement('form')
// form.setAttribute('method', 'post')

// const para = document.createElement("p");
// para.innerHTML = 'terminal';
// form.appendChild(para);
var div = document.createElement('div')

var radiodiv = document.createElement('div')
var label = document.createElement('label')
label.innerHTML = 'TERMINAL'
label.className = 'teminal_label'
radiodiv.append(label)
var terminal = ['1', '2']
terminal.forEach((Value, i) => {
  var labelValue = document.createElement('label')
  labelValue.innerHTML = Value
  var inputValue = document.createElement('input')
  inputValue.onclick = function () {
    if (inputValue.name == 1) {
      console.log('Choice: ', inputValue.name)
      document.getElementById('1').checked = true
      document.getElementById('2').checked = false
    } else if (inputValue.name == 2) {
      console.log('Choice: ', inputValue.name)
      document.getElementById('2').checked = true
      document.getElementById('1').checked = false
    }
  }
  inputValue.type = 'radio'
  inputValue.name = Value
  inputValue.id = Value
  inputValue.className = 'radio_btn'
  inputValue.Value = Value
  radiodiv.appendChild(labelValue)
  radiodiv.appendChild(inputValue)
})

// var lable = document.createElement('label')
// lable.innerHTML = 'amount'
// lable.append(ID)
// Create an input element for amount
var inputdiv = document.createElement('div')
inputdiv.className = 'amount_div'
var labelAmount = document.createElement('label')
labelAmount.innerHTML = 'AMOUNT'
labelAmount.className = 'amount_label'

var ID = document.createElement('input')
ID.setAttribute('type', 'text')
ID.setAttribute('name', 'amount')
ID.setAttribute('id', 'amount_input')
inputdiv.append(labelAmount)
inputdiv.append(ID)

// Create a submit button
var s = document.createElement('input')
s.setAttribute('type', 'submit')
s.setAttribute('value', 'SUBMIT')
s.setAttribute('class', 'submit_btn')
s.setAttribute('id', 'button_submit')
// s.style.backgroundColor = '#72bb53'
// s.style.color = '#ffffff'
// s.style.width = '90%'
// s.style.height='150%'
s.onclick = function () {
  var selectedValue = 0
  if (document.getElementById('1').checked) {
    selectedValue = 1
  }
  if (document.getElementById('2').checked) {
    selectedValue = 2
  }

  alert(
    'giftCard submit' +
      '  Amount :' +
      document.getElementById('amount_input').value +
      '  Terminal :' +
      selectedValue,
  )
}
form.append(radiodiv)
form.append(inputdiv)
form.append(div)

// Append the button to the form
form.append(s)
if (document.getElementById('giftcard')) {
  document.getElementById('giftcard').append(form)
}

// function onSubmit() {
//   alert('The form was submitted')
// }

// s.setAttribute('value', 'Submit')

// // Append the email_ID input to the form
// form.append(ID)

// // Append the password to the form
// form.append(PWD)

// // Append the button to the form
// form.append(s)

// document.getElementById('giftcard').appendChild(form)

// // function onSubmit() {
// //   alert('The form was submitted')
// // }
