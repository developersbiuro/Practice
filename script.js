var input = [
    {userName : 'ali', userEmail: 'ali@gmail.com',   dob : '15-8-2002' },
    {userName : 'ahmad', userEmail: 'ahmad@gmail.com',   dob : '12-10-2004' },
    {userName : 'akbar', userEmail: 'akbar@gmail.com',   dob : '25-5-1998' }  
]

var dob = new Date(input.dob);
var now  = new Date;
var calc = now - dob
console.log(calc);
console.log(now);