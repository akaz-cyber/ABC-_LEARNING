// register js
const register = a =>{
    let email = document.getElementById('email').value,
    username = document.getElementById('username').value,
    contact = document.getElementById('contact').value,
    Qualification = document.getElementById('Qualification').value,
    address = document.getElementById('address').value;

   let formData = JSON.parse(localStorage.getItem('formData')) || [];
//  validate
   let exist = formData.length && 
   JSON.parse(localStorage.getItem('formData')).some(data => 
       data.email.toLowerCase() == email.toLowerCase()    
   );
   
   if(!exist){
    formData.unshift({ email,username, contact,Qualification,address });
    localStorage.setItem('formData', JSON.stringify(formData));
    document.querySelector('form').reset();
    document.getElementById('email').focus();
    alert("Account Created.");
    window.open("thank.html");
}
else{
    alert("Ooopppssss... Duplicate found!!");
     document.location.href("register.html")
}
a.preventDefault();


}
