
var form = document.createElement('form')
form.setAttribute('method', 'post')

const p4 = document.createElement("p");
p4.innerHTML = 'terminal';
form.appendChild(p4);


var terminal = ['1', '2']
terminal.forEach((Value, i) => {
  var labelValue = document.createElement('label')
  labelValue.innerHTML = Value
  var inputValue = document.createElement('input')
  inputValue.type = 'radio'
  inputValue.name = Value
  inputValue.Value = i
 form.appendChild(labelValue)
form.appendChild(inputValue)
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
s.onclick = function() { // Note this is a function
  alert("giftCard submit");
};

// Append the email_ID input to the form
form.append(ID)

// Append the button to the form
form.append(s)

document.getElementById('giftcard').appendChild(form)

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
