var form = document.createElement('form')

var div = document.createElement('div')

var radiodiv = document.createElement('div')
var label = document.createElement('label')
label.innerHTML = 'TERMINAL'
label.className = 'teminal_label'
radiodiv.append(label)
var terminal = ['1', '2']
terminal.forEach((Value, i) => {
  var inputValue = document.createElement('input')
  var labelValue = document.createElement('label')
  labelValue.innerHTML = Value
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
  radiodiv.appendChild(inputValue)
  radiodiv.appendChild(labelValue)
})

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

s.onclick = function () {
  var selectedValue = 0
  if (document.getElementById('1').checked) {
    selectedValue = 1
  }
  if (document.getElementById('2').checked) {
    selectedValue = 2
  }

  alert(
    'cash submit' +
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

if (document.getElementById('cash')) {
  document.getElementById('cash').appendChild(form)
}
