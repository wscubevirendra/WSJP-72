const fs = require('fs');



// fs.readFile("index.txt", "utf-8", (err, data) => {
//     if (err) {
//         fs.writeFile("index.txt", "Hellow", (err) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 console.log("File create")
//             }
//         })
//     } else {
//         console.log(data, "yeha par")
//     }
// })

try {
    fs.unlink("index.txt", (err) => {
        if (err) {
            console.log("File not availabe")
        }else{
            console.log("Delete successfully")
        }
    })
    
} catch (error) {
    console.log(error)
    
}