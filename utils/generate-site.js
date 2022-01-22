const fs =require('fs');
const writeFile = fileContent =>{
    return new Promise((resolve, reject)=>{
        fs.writeFile('./dist/indexfile.html', fileContent , err => {
            if(err){
                reject(err);
                return;
            }
            resolve ({
                ok:true,
                message:'file created'
            });
        });
    });
};
module.exports = writeFile;