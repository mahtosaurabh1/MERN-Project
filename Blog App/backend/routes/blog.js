const multer=require('multer')
const express=require('express');
const {userRegister,userLogin}=require('../controllers/authControler');
const { getAllBlog, getSingleBlog, addNewBlog } = require('../controllers/blogControler');
const { getAllCategory, addNewCategory } = require('../controllers/categoryControler');
let router=express.Router();

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'/public/file')
    },
    filename:function(req,file,cb){
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const uplod=multer({storage:storage})

router.post('/user/register',userRegister)
router.post('/user/login',userLogin)

router.get('/get/allblogs',getAllBlog)
router.get('/get/singleblog/:id',getSingleBlog)
router.post('/add/addnewblog', uplod.single("thumbnail"), addNewBlog)

router.get('/get/getallcategory',getAllCategory);
router.post('/add/addnewcategory',addNewCategory);


module.exports=router
