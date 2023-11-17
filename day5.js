// Create resume in JSON format

//  var resume = [{
//      "firstName" : "jaya",
//      "lastName" : "surya",
//      "age" : "22",
//      "education" : "UG graduated",
//      "degree" : "Bachelor of computer application",
//      "address" : "207 perumal kovil st, ponnamapet, salem-3 , 636003",
//      "experience" : "fresher",
//      "languageKnown" : "tamil,english"
//  }]
//console.log(resume);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1]  for in loop ;-

// var resume = [{
//     "firstName" : "jaya",
//     "lastName" : "surya",
//     "age" : "22",
//     "education" : "UG graduated",
//     "degree" : "Bachelor of computer application",
//     "address" : "207 perumal kovil st, ponnamapet, salem-3 , 636003",
//     "experience" : "fresher",
//     "languageKnown" : "tamil,english"
// }]


// for(key in resume){
//     console.log(key,resume[key]);
// }

 // Output ;-

 //  {firstName: 'jaya', lastName: 'surya', age: '22', education: 'UG graduated', degree: 'Bachelor of computer application', …}
//   address: "207 perumal kovil st, ponnamapet, salem-3 , 636003"
//   age: "22"
//  degree: "Bachelor of computer application"
//  education: "UG graduated"
//  experience: "fresher"
//  firstName: "jaya"
//  languageKnown: "tamil,english"
//  lastName: "surya"

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2] for loop ;-

// var resume = [{
//     "firstName" : "jaya",
//     "lastName" : "surya",
//     "age" : "22",
//     "education" : "UG graduated",
//     "degree" : "Bachelor of computer application",
//     "address" : "207 perumal kovil st, ponnamapet, salem-3 , 636003",
//     "experience" : "fresher",
//     "languageKnown" : "tamil,english"
// }]
// 
//  for(let i=0; i<resume.length; i++){
//      console.log(resume[i]);
//  }
// 
//  Output:-
// 
//  {firstName: 'jaya', lastName: 'surya', age: '22', education: 'UG graduated', degree: 'Bachelor of computer application', …}
// address: "207 perumal kovil st, ponnamapet, salem-3 , 636003"
// age : "22"
// degree: "Bachelor of computer application"
// education : "UG graduated"
// experience : "fresher"
// firstName : "jaya"
// languageKnown : "tamil,english"
// lastName : "surya"

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3] //for of loop :-

// var resume = [{
//      "firstName" : "jaya",
//       "lastName" : "surya",
//       "age" : "22",
//       "education" : "UG graduated",
//       "degree" : "Bachelor of computer application",
//       "address" : "207 perumal kovil st, ponnamapet, salem-3 , 636003",
//       "experience" : "fresher",
//       "languageKnown" : "tamil,english"
//   }]

//  for(out of resume){
//      console.log([out]);
//  }

// address : "207 perumal kovil st, ponnamapet, salem-3 , 636003"
// age: "22"
// degree : "Bachelor of computer application"
// education :  "UG graduated"
// experience : "fresher"
// firstName : "jaya"
// languageKnown : "tamil,english"
// lastName : "surya"

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4] forEach :-

// var resume = [{
//     "firstName" : "jaya",
//      "lastName" : "surya",
//      "age" : "22",
//      "education" : "UG graduated",
//      "degree" : "Bachelor of computer application",
//      "address" : "207 perumal kovil st, ponnamapet, salem-3 , 636003",
//      "experience" : "fresher",
//      "languageKnown" : "tamil,english"
//  }]
// 
//   resume.forEach(res => {
//   console.log(res)
//   });

//  Output:-
// 
//  {firstName: 'jaya', lastName: 'surya', age: '22', education: 'UG graduated', degree: 'Bachelor of computer application', …}
// address: "207 perumal kovil st, ponnamapet, salem-3 , 636003"
// age : "22"
// degree: "Bachelor of computer application"
// education : "UG graduated"
// experience : "fresher"
// firstName : "jaya"
// languageKnown : "tamil,english"
// lastName : "surya"

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------