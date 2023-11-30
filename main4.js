const name = document.getElementById("name")
const names = document.getElementById("names")
const namess = document.getElementById("namess")
const namesss = document.getElementById("namesss")
const mails = document.getElementById("mails")
const navLinks = document.getElementById("navLinks")
const phone = document.getElementById("phone")
const address = document.getElementById("address")
const parents = document.getElementById("parents")

const phones = document.getElementById("phones")
const mailss = document.getElementById("mailss")
const addresss = document.getElementById("addresss")
const parentss = document.getElementById("parentss")

const myName = JSON.parse(localStorage.getItem("person"))
name.innerHTML = myName.userName
names.innerHTML = myName.userName
namess.innerHTML = myName.userName
namesss.innerHTML = myName.userName
mails.innerHTML = myName.Email
phone.innerHTML = myName.Phone
address.innerHTML = myName.Address
parents.innerHTML = myName.Parents

mailss.innerHTML = myName.Email
phones.innerHTML = myName.Phone
addresss.innerHTML = myName.Address
parentss.innerHTML = myName.Parents


// Navbar for small screens
function showMenu() {
  navLinks.style.right = "0";
  }
  
  function hideMenu() {
    navLinks.style.right = "-200px";
  }

 

