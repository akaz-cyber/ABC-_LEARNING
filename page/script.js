function sendMessage(){
    let number = document.getElementById('number').value;
    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;
    document.location.href = "https://wa.me/62895347086501?text=Hello%0Aname%20:%20" + name +
    "%0Aphone%20number%20:%20" + number + "%0Amessage%20:%20" + message, 'target', '_blank';
}