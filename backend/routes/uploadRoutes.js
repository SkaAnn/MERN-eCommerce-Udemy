import path from 'path'
import express from 'express'
import multer from 'multer'
const router = express.Router()

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, 'uploads/')
    }, 

    filename(req, file, cb){
     cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)   
    }
})

function checkFileType(file, cb){
    const filetypes = /jpg|jpeg|png/
    // obe true or false, ci to patri do filetypes
    const extname = filetypes.test(path.extname(file.originalname.toLowerCase()))
    const mimetype = filetypes.test(file.mimetype)

    if (extname && mimetype){
        return cb(null, true)
    }else{
        cb('Images only!')
    }
}

const upload = multer({
    storage, 
    // kontrola typu suborov - chceme uploadovat len .jpg, .png
    fileFilter: function(req, file, cb){
        checkFileType(file, cb)
    }
})

// connect to /api/upload
router.post('/', upload.single('image'), (req, res) =>{ // mozme i multiple
    res.send(`\\${req.file.path}`)
} )  

export default router