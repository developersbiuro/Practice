// var input = [
//     {userName : 'ali', userEmail: 'ali@gmail.com',   dob : '15-8-2002' },
//     {userName : 'ahmad', userEmail: 'ahmad@gmail.com',   dob : '12-10-2004' },
//     {userName : 'akbar', userEmail: 'akbar@gmail.com',   dob : '25-5-1998' }  
// ]
// console.log(input);
// var Dob = new Date(input.dob).getFullYear();
// var now  = new Date;
// var calc = now - Dob
// console.log(Dob);
// console.log(calc);
// console.log(now);



var userName = document.getElementById("nam").value;
var userMail = document.getElementById("mail").value;
var userCncd = document.getElementById("cncd").value;
var userBio = document.getElementById("Bio").value;
var userState = document.getElementById("stat").value;
var userCnic = document.getElementById("cn").value;

function LoginPage() {
    if (userName.includes(" ")) {
        
    }
    else{
        alert("Enter both first and second name")
    }
    if (userMail.endswith("@gmail.com")) {
        
    }
    else{
        alert("enter valid Gmail")
    }
    if (userCncd == 92) {
        
    }
    else{
        alert("enter valid code")
    }
    if (userBio.minLength("30")) {
        
    }
    else{
        alert("enter minimum 30 chracter")
    }
    if (userState == Punjab || userState == Sindh || userState == Blochistan || userState == Kpk) {
        
    }
    else{
        alert("enter correct State")
    }
    if (userCnic.minLength("13")) {
        
    }
    else{
        alert("enter Valid CNIC")
    }
}