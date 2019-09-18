const fs = require('fs');

//Defines copy targets
const sourceFile = '.env-example'; 
const createFiles = ['.env', '.env.test'];

//Create files 
createFiles.forEach(function(createFile) {
    try {
        if(!fs.existsSync(createFile)) {
            fs.createReadStream(sourceFile).pipe(fs.createWriteStream(createFile));
            console.log("Created file " + createFile + " from " + sourceFile + "."); 
        } else {
            console.error("File " + createFile + " already exists."); 
        }
    } catch(err) {
        console.error(err)
    }
}); 

//Done
console.log("Setup completed. Additional log information above."); 