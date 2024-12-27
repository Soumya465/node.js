const fs = require('fs');

fs.writeFile("demo.txt", "Today in our day3", (err) => {
    if (err) {
        console.log("Error: " + err);
        return;
    }
    console.log("File created successfully");
});
//output File created successfully

//--------------------------------Read file----------------------------------------
fs.readFile("demo.txt","utf8",(err,data)=>{
    if(err){
        console.log("Some issues encountered while reacting files"+err);
    retutn;
}
    console.log(data);
});
//output File created successfully
//Today in our day3
//-------------------------------------Delete file-----------------------------------
// fs.unlinkSync("sample.txt");

// Asynchronously delete the file 'demo.txt'
// fs.unlink("demo.txt", (err) => {
//     if (err) {
//         console.log("Error occurred: " + err);
//         return;
//     }
//     console.log("File deleted");
// });