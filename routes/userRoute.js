const express=require("express")
const router=express.Router()
const {getAllUserData,getAllUserDataById,displayUserForm,addUserData}=require("../controller/userController")
const userData = require("../data/initialData")
const dataEntrylogger=require("../middlewares/dataEntryLogger")
router.get('/',getAllUserData)

router.get('/:id([0-9]{1,2})',getAllUserDataById)

router.param('id',(request,response,next,id)=>{
    request.user=userData[id-1]
    next()
})

router.get('/new',displayUserForm)

router.post('/submit',dataEntrylogger,addUserData)

module.exports=router