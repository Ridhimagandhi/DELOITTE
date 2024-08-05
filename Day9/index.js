const jsConvert = require('js-convert-case');
const uid=require('uuid');

let myarr=[{uname:"ridhi" , email: "Ridhi@gmail.com", cartID:""},
    {uname:"anu" , email: "ANU@gmail.com", cartID:""}
]

myarr.forEach(user => {
    user.cartID = uid.v4().toUpperCase(); // Generate and assign UUID
    user.uname = jsConvert.toHeaderCase(user.uname); // Convert to header case
    user.email = user.email.toLowerCase(); // email to  lower case
});


myarr.forEach(user => {
    console.log(`User Id = ${user.uname}, Email = ${user.email}, cartID = ${user.cartID}`);
});