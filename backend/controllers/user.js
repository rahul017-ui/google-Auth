const document =require('../models/xlsx and csv');


const uploadfile = async (req, res) => {
    try {

        let file = await new document({
        })
        if (req.file) {
            file.document= req.file.path
        }
        console.log(file);
        file.save();
        res.json("file uploaded")

    } catch (error) {
        res.json({ message: error });
    }

}
module.exports={
    uploadfile

}