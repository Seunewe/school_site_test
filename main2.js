const userName = document.getElementById('name');
const Password = document.getElementById('password');
const success = document.getElementById('success');
const danger = document.getElementById('danger');
const btn = document.getElementById('btn');
const h5 = document.getElementById('h5');
const Form = document.getElementById('form');

const alertSuccess = document.querySelector('.alert-success');
const alertDanger = document.querySelector('.alert-danger');

Form.addEventListener('submit', myForm)

function myForm(e) {
    e.preventDefault();

    const myDetails = {
        userName: userName.value,
    }

   
    if(userName.value === "" || Password.value === ""){
     danger.innerHTML = "Field can not be empty";
     alertDanger.style.display = "block";
     alertSuccess.style.display = "none";
    } 
    else {
        if (Password.value.length < 6 || isNaN(Password.value)) {
            danger.innerHTML = "Password must be at least 6 digits"
            alertDanger.style.display = "block";
            alertSuccess.style.display = "none"
        } 
        else {
            const myUser = JSON.parse(localStorage.getItem("person"));
            

            if (userName.value !== myUser.userName) {
                danger.innerHTML = "Invalid Credentials"
                alertDanger.style.display = "block";
                alertSuccess.style.display = "none"
            }
            else {
                success.innerHTML = "Congratulations! You have successfully logged in"
                alertDanger.style.display = "none";
                alertSuccess.style.display = "block"
                window.location.href = "index4.html"
            }
        }
    }
}

