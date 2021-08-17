document.getElementById('submit-btn').addEventListener('click', function(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if(email == "bank@romekh.com" && password == "mypassword"){
        window.location.href = 'accound.html'
    }
})