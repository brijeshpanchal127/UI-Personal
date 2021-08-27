var form = document.createElement('form')
form.setAttribute('method', 'post')

// const p5 = document.createElement("p");
// p5.innerHTML = 'terminal';
// form.appendChild(p5);

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

var lable = document.createElement('label')
lable.innerHTML = 'Terminal'
form.append(lable)

// Create an input element for amount
var ID = document.createElement('input')
ID.setAttribute('type', 'text')
ID.setAttribute('name', 'amount')
ID.setAttribute('placeholder', 'amount')

// Create a submit button
var s = document.createElement('input')
s.setAttribute('type', 'submit')
s.setAttribute('value', 'Submit')
s.style.backgroundColor = '#72bb53'
s.style.color = '#ffffff'
s.style.width = '100%'
s.onclick = function () {
  // Note this is a function
  console.log('cash submit')
}

// Append the email_ID input to the form
div.append(ID)
form.append(div)

// Append the button to the form
form.append(s)

if (document.getElementById('cash')) {
  document.getElementById('cash').appendChild(form)
}

// function onSubmit() {
//   alert('The form was submitted')
// }
