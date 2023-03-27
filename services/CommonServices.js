class CommonServices {

    constructor() { }

    generateImageName(oldName) {
        return new Promise(function (resolve, reject) {
            console.log("executed :: generateImageName", oldName);
            let oldNameArr = oldName.split(".");
            console.log("oldNameArr", oldNameArr);
            const fileExtension = oldNameArr.splice(-1).toString();
            console.log("fileExtension", fileExtension);
            const currentDate = new Date();
            let imageNewName = currentDate.getTime() + Math.round(Math.random(11111, 99999) * 10000) + "." + fileExtension;
            console.log("imageNewName", imageNewName);
            resolve(imageNewName);
        });
    }

    uploadImage(fileInfo) {
        return new Promise(function (resolve, reject) {
            const uploadPath = __dirname + '/../public/product_images/' + fileInfo.name;
            fileInfo.mv(uploadPath, function (error) {
                if(error){
                    reject(error);
                } else {
                    resolve(true);
                }
            });
        });
    }

}
module.exports = new CommonServices();