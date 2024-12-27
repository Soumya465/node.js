//console.log("hello");
 const fs=require('fs');
fs.writeFileSync("sample.txt","Hello Node");
console.log("File created Succesfully");
//output File created Succesfully
//ASYNCHRONOUS 
// const fs=require('fs');
// fs.writeFile("sample.txt","Hello Node",(err)=>{
//     if(err){
//         console.log("something went wrong");
//         return;
//     }
//     else{
//         console.log("File created successfully");

//     }

// });
// console.log("Bye Bye");
//output Bye Bye
//File created successfully
