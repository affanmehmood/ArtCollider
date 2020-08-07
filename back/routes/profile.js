const express = require('express')
const router = express.Router()
const Profile = require('../models/profile')

                                                    /***  Get Single User ***/
router.post('/getSingleUser', async (req,res)=>{
    if(!req.body.username){
        res.send(null)
    } else {
        Profile.findOne({username:req.body.username},async (err,user)=>{
            user['password'] = null
            res.send(user)
        })
    }
})
                                                    /***  Signup logic ***/
router.post('/signup', async (req, res)=>{
    if(!req.body.username || !req.body.password || !req.body.email) {
        res.send({
            username: null,
            status: "false",
            code: -1 // something is missing
        })
    } else{
        try{
            const profile = new Profile(req.body)
            const saved = await profile.save()
            res.json({
                username: req.body.username,
                status: "true",
                code: 1 // sucessfuly signed up
            })
      } catch(err){
            res.json({
                error: Object.keys(err.keyPattern)[0]
            })
        }
    }
})
                                                    /***  Login logic ***/
router.post('/login', async (req, res)=>{
    if(!req.body.email || !req.body.password){
        res.send({
            username: null,
            status: "false",
            code: -2 // something is missing
        })
    } else{
        Profile.findOne({email: req.body.email, password: req.body.password},(err,user)=>{
            if(err || !user){
                res.json({
                    username: null,
                    status: "false",
                    code: -1 // meaning user not found
                })
                return
            }
            else{
                res.json({
                    username: user.username,
                    status: "true",
                    code: 1 // sucessfully logged in
                })
            }
        })
    }
})

                                                    /***  Update User logic ***/
router.put('/updateUser', async (req, res)=>{
    Profile.updateOne(
        {username: req.body.username},
        {
            location: req.body.location,
            jobTitle: req.body.jobTitle,
            bio: req.body.bio,
            privacy: req.body.privacy
        }, (err, user)=>{
                res.send({msg:"Profile Updated"})
        })
})

module.exports = router