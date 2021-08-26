var form = document.createElement('form')
form.setAttribute('method', 'post')

var terminal = ['1', '2']
terminal.forEach((Value, i) => {
  var labelValue = document.createElement('label')
  labelValue.innerHTML = Value
  var inputValue = document.createElement('input')
  inputValue.type = 'radio'
  inputValue.name = Value
  inputValue.Value = i
  document.body.appendChild(labelValue)
  document.body.appendChild(inputValue)
})

// Create an input element for amount
var ID = document.createElement('input')
ID.setAttribute('type', 'text')
ID.setAttribute('name', 'amount')
ID.setAttribute('placeholder', 'amount')

// Create a submit button
var s = document.createElement('input')
s.setAttribute('type', 'submit')
s.setAttribute('value', 'Submit')

// Append the email_ID input to the form
form.append(ID)

// Append the password to the form
form.append(PWD)

// Append the button to the form
form.append(s)

document.getElementById('uscash').appendChild(form)

// function onSubmit() {
//   alert('The form was submitted')
// }
