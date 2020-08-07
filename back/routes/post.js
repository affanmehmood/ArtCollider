const express = require('express')
const router = express.Router()
const Post = require('../models/post')

const multer = require('multer')

let gfs

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/')
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
})
const fileFilter = (req, file, cb)=>{
    if(file.mimetype==='image/jpeg' || file.mimetype==='image/png'){
        cb(null, true)
    } else {
        cb(new Error("nonImage"), false)
    }
}
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits:{
    fieldSize: 1024 * 1024 * 5
}})

router.post('/post', upload.single('image'), (req, res)=>{
    res.send(req.file)
})

module.exports = router