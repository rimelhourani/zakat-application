const ProfilModel = require("../models/profil.models");
const ValidateProfile = require("../validation/profil")

const AddProfile = async (req ,res)=>{
    const {errors, isValid} = ValidateProfile(req.body)
    try {
        if(!isValid){
          res.status(404).json(errors)
        }else{
            ProfileModel.findOne({user: req.user.id})
        .then(async (profil)=>{
            if(!profil){
                req.body.user = req.user.id
                await ProfilModel.create(req.body)
                res.status(200).json({message: "success"})
            }else{
               await  ProfilModel.findOneAndUpdate(
                    {_id: profil._id},
                    req.body,
                    {new: true}
                ).then(result=>{
                    res.status(200).json(result)
                })
            }
        })
        }
    } catch (error) {
         res.status(404).json(error.message)
    }
}
const FindAllProfiles = async (req ,res)=>{
    try {
       const data =  await ProfilModel.find().populate('user', ["name", "email", "role"])
       res.status(200).json(data)

    } catch (error) {
        res.status(404).json(error.message)
    }
}
const FindSingleProfile = async (req ,res)=>{
    try {
        const data =  await ProfilModel.findOne({user: req.user.id}).populate('user', ["name", "email", "role"])
        res.status(200).json(data)
 
     } catch (error) {
         res.status(404).json(error.message)
     }
}

const DeleteProfile = async (req ,res)=>{
    try {
        const data =  await ProfilModel.findOneAndRemove*
        ({_id: req.params.id})
        res.status(200).json({message: "deleted"})
 
     } catch (error) {
         res.status(404).json(error.message)
     }
}
module.exports = {
  Register,
  Login,

};


