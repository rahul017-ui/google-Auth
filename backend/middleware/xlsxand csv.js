const path = require('path')

const multer = require('multer')


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload xlsx and csv/')
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }

});
var upload=multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (
            file.mimetype == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'||
            file.mimetype == "text/csv" 
          
        ) {
            callback(null, true)
        } else {
        
            callback('only allowed excel and csv format', false)
        
        }
    },
    limits: {
        fileSize: 40000000
    }
});
module.exports = upload;













