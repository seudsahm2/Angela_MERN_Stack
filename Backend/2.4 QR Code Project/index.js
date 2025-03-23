import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

inquirer
    .prompt([
        {
            message:"Type your URL",
            name:"URL"
        }
    ])
    .then((answers)=>{
        const url = answers.URL;
        var qr_image = qr.image(url);
        qr_image.pipe(fs.createWriteStream("qr_img2.png"));

        fs.writeFile("new_url.txt",url,(err)=>{
            if(err) throw err;
            console.log("th file has been saved");
        })

    })
