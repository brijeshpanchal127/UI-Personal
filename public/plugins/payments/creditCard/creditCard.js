var form = document.createElement('form')
// form.setAttribute('method', 'post')

// const para = document.createElement("p");
// para.innerHTML = 'terminal';
// form.appendChild(para);
var div = document.createElement('div')

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
  inputValue.Value = i
  div.appendChild(labelValue)
  div.appendChild(inputValue)
})

// var lable = document.createElement('label')
// lable.innerHTML = 'amount'
// lable.append(ID)
// Create an input element for amount
var ID = document.createElement('input')
ID.setAttribute('type', 'text')
ID.setAttribute('name', 'amount')
ID.setAttribute('placeholder', 'amount')

var label = document.createElement('label')
label.innerHTML = 'Terminal'
form.append(label)
// Create a submit button
var s = document.createElement('input')
s.setAttribute('type', 'submit')
s.setAttribute('value', 'Submit')
s.setAttribute('class', 'submit_btn')
s.style.backgroundColor = '#72bb53'
s.style.color = '#ffffff'
s.style.width = '90%'
s.style.height='150%'
s.onclick = function () {
  // Note this is a function
//   window.location.reload(false)
  alert('credit submit' + document.getElementsByName('name').value)
}

// Append the email_ID input to the form
div.append(ID)
form.append(div)

// Append the button to the form
form.append(s)
if (document.getElementById('creditcardOption')) {
  document.getElementById('creditcardOption').append(form)
}

// function onSubmit() {
//   alert('The form was submitted')
// }
