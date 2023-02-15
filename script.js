
document.getElementById('btn-submit').addEventListener('click', function(){

    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passField = document.getElementById('user-password');
    const password = passField.value;
    console.log(email, password)

    if(email === 'child@gmail.com' && password === 'secret'){
        // console.log('first')
        window.location.href = 'bank.html';
    }
    else{
        alert("Give valid data");
    }
    //form auto load off
    document.querySelector('#my-form').addEventListener('submit', function(event){
        event.preventDefault();
    })
})