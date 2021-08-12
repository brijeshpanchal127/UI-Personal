
 function onSubmit() {
    let myForm = document.getElementById('creditCardData');
    let formData = new FormData(myForm);
    console.log(formData)
    alert("The form was submitted");
  }
  