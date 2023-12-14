const userName = document.getElementById('name');
const Email = document.getElementById('email');
const Password = document.getElementById('password');
const Parents = document.getElementById('parent');
const Address = document.getElementById('address');
const Phone = document.getElementById('number');


const success = document.getElementById('success');
const danger = document.getElementById('danger');
const btn = document.getElementById('btn');
const h4 = document.getElementById('h4');
const Form = document.getElementById('form');

const alertSuccess = document.querySelector('.alert-success');
const alertDanger = document.querySelector('.alert-danger');

Form.addEventListener('submit', myForm)

function myForm(e) {
    e.preventDefault();

   

   
    if(userName.value === "" || Email.value === "" || Password.value === "" || Parents.value === "" || Address.value === "" || Phone.value === ""){
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
            const myDetails = {
                userName: userName.value,
                Email: Email.value,
                Parents: Parents.value,
                Address: Address.value,
                Phone: Phone.value,
            }
            success.innerHTML = "You've succefully created an account!."
            alertDanger.style.display = "none";
            alertSuccess.style.display = "block"
            const userConverter = JSON.stringify(myDetails);
            localStorage.setItem("person", userConverter);
            window.location.href = "index2.html"
        }
    } 
}