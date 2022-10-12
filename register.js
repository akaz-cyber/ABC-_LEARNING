const register = a =>{
    let email = document.getElementById('email').value,
    username = document.getElementById('username').value,
    contact = document.getElementById('contact').value,
    Qualification = document.getElementById('Qualification').value,
    address = document.getElementById('address').value;

   let formData = JSON.parse(localStorage.getItem('formData')) || [];
   
   let exist = formData.length && 
   JSON.parse(localStorage.getItem('formData')).some(data => 
       data.fname.toLowerCase() == fname.toLowerCase() && 
       data.lname.toLowerCase() == lname.toLowerCase()
   );

   
   
   if(!exist){
    formData.push({ email,username, contact,Qualification,address });
    localStorage.setItem('formData', JSON.stringify(formData));
    document.querySelector('form').reset();
    document.getElementById('email').focus();
    alert("Account Created.\n\nPlease Sign In using the link below.");
}
else{
    alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
}
a.preventDefault();
window.open("thank.html");

}