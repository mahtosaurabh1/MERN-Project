let express=require('express');
const allplanControler = require('../Controllers/allplanControlers');
const { registerControler, loginControler } = require('../Controllers/authControler');
const { addreviewControler, getallReviewControler, deleteReviewControler } = require('../Controllers/reviewControlers');

let router=express.Router();

router.post('/register',registerControler);
router.post('/login',loginControler);
router.get('/allplans',allplanControler);
router.post('/add-review',addreviewControler);
router.get('/get-review',getallReviewControler);
router.delete('/delete-review/:id',deleteReviewControler);

module.exports=router
