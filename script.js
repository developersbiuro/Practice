// // var input = [
// //     {userName : 'ali', userEmail: 'ali@gmail.com',   dob : '15-8-2002' },
// //     {userName : 'ahmad', userEmail: 'ahmad@gmail.com',   dob : '12-10-2004' },
// //     {userName : 'akbar', userEmail: 'akbar@gmail.com',   dob : '25-5-1998' }  
// // ]
// // console.log(input);
// // var Dob = new Date(input.dob).getFullYear();
// // var now  = new Date;
// // var calc = now - Dob
// // console.log(Dob);
// // console.log(calc);
// // console.log(now);



// var userName = document.getElementById("nam").value;
// var userMail = document.getElementById("mail").value;
// var userCncd = document.getElementById("cncd").value;
// var userBio = document.getElementById("Bio").value;
// var userState = document.getElementById("stat").value;
// var userCnic = document.getElementById("cn").value;

// function LoginPage() {
//     if (userName.includes(" ")) {
        
//     }
//     else{
//         alert("Enter both first and second name")
//     }
//     if (userMail.endswith("@gmail.com")) {
        
//     }
//     else{
//         alert("enter valid Gmail")
//     }
//     if (userCncd == 92) {
        
//     }
//     else{
//         alert("enter valid code")
//     }
//     if (userBio.minLength("30")) {
        
//     }
//     else{
//         alert("enter minimum 30 chracter")
//     }
//     if (userState == Punjab || userState == Sindh || userState == Blochistan || userState == Kpk) {
        
//     }
//     else{
//         alert("enter correct State")
//     }
//     if (userCnic.minLength("13")) {
        
//     }
//     else{
//         alert("enter Valid CNIC")
//     }
// }





        // function validateForm() {
        //     var name = document.getElementById("name").value;
        //     var email = document.getElementById("email").value;
        //     var countryCode = document.getElementById("countryCode").value;
        //     var bio = document.getElementById("bio").value;
        //     var state = document.getElementById("state").value;
        //     var cnic = document.getElementById("cnic").value;

        //     var errors = [];

        //     // Validating Name
        //     if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        //         errors.push("Name should contain first and last name with alphabets only.");
        //     }

        //     // Validating Email
        //     if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        //         errors.push("Email should be a valid Gmail address.");
        //     }

        //     // Validating Country Code
        //     if (countryCode !== "+92") {
        //         errors.push("Country code should be +92.");
        //     }

        //     // Validating Bio
        //     if (bio.length < 30) {
        //         errors.push("Bio should be at least 30 characters long.");
        //     }

        //     // Validating State
        //     var validStates = ["Punjab", "Sindh", "Balochistan", "KPK"];
        //     if (!validStates.includes(state)) {
        //         errors.push("Please select a valid state from the provided options.");
        //     }

        //     // Validating CNIC Number
        //     if (cnic.length !== 13 || !cnic.match(/^\d+$/)) {
        //         errors.push("CNIC number should be 13 digits long.");
        //     }

        //     if (errors.length > 0) {
        //         alert(errors.join("\n"));
        //         return false;
        //     }

        //     // Create an object with the validated values
        //     var user = {
        //         name: name,
        //         email: email,
        //         countryCode: countryCode,
        //         bio: bio,
        //         state: state,
        //         cnic: cnic
        //     };

        //     console.log(user); // You can access the validated values as an object

        //     // Optional: Submit the form to a server or perform other actions
        //     return true;
        // }
 
        function validateForm() {
            var name = document.getElementById("nam").value;
            var email = document.getElementById("mail").value;
            var countryCode = document.getElementById("cncd").value;
            var bio = document.getElementById("Bio").value;
            var state = document.getElementById("state").value;
            var cnic = document.getElementById("cn").value;

            var errors = [];

            // Validating Name
            if (!isValidName(name)) {
                errors.push("Name should contain first and last name with alphabets only.");
            }

            // Validating Email
            if (!isValidEmail(email)) {
                errors.push("Email should be a valid Gmail address.");
            }

            // Validating Country Code
            if (countryCode !== "92") {
                errors.push("Country code should be 92.");
            }

            // Validating Bio
            if (bio.length < 30) {
                errors.push("Bio should be at least 30 characters long.");
            }

            // Validating State
            var validStates = ["Punjab", "Sindh", "Balochistan", "KPK"];
            if (!validStates.includes(state)) {
                errors.push("Please select a valid state from the provided options.");
            }

            // Validating CNIC Number
            if (!isValidCNIC(cnic)) {
                errors.push("CNIC number should be 13 digits long.");
            }

            if (errors.length > 0) {
                alert(errors.join("\n"));
                return false;
            }

            // Create an object with the validated values
            var user = {
                name: name,
                email: email,
                countryCode: countryCode,
                bio: bio,
                state: state,
                cnic: cnic
            };

            console.log(user); 
            
            
            console.log(user);
            // You can access the validated values as an object

            // Optional: Submit the form to a server or perform other actions
            return true;
        }

        function isValidName(name) {
            // Split the name into first and last name
            var names = name.split(" ");

            // Check if the name has two parts
            if (names.length !== 2) {
                return false;
            }

            // Check if each part contains alphabets only
            var regex = /^[a-zA-Z]+$/;
            return regex.test(names[0]) && regex.test(names[1]);
        }

        function isValidEmail(email) {
            // Check if the email ends with "@gmail"
            return email.endsWith("@gmail.com");
        }

        function isValidCNIC(cnic) {
            // Check if the CNIC number is 13 digits long and contains only digits
            return cnic.length === 13 && !isNaN(cnic);
        }




        
