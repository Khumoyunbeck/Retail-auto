const SuperAdmin = require("../models/superAdmin")


exports.CreateAdmin = async(req, res)=>{
    try {
        const auth = new SuperAdmin({...req.body})
        await auth.save()
        res.status(201).json(
            {
                message: "success created",
                data: auth
            }
        )
    } catch (err) {
        res.status(500).json(
            {
                message: "error"
            }
        )
    }
}

exports.login = async(req, res)=>{
    const {email, password} = req.body
    SuperAdmin.findOne({email: email, password: password}, (err, user)=>{
        if(err)
           throw err
        else{
            res.status(200).json(user)
        }
    })
}


exports.GetByIdAdmin = async(req, res)=>{
    try {
        const auth = await SuperAdmin.findById({_id: req.params.id})
        res.status(200).json(
            {
                message: "success",
                data: auth
            }
        )
    } catch (err) {
        res.status(404).json(
            {
                message: "editor not found"
            }
        )
    }
}


exports.GetAdmin = async(req, res)=>{
    try {
        const auth = await SuperAdmin.find({roles: "admin"}).sort({date: -1})
        res.status(200).json(
            {
                message: "success",
                data: auth
            }
        )
    } catch (err) {
        res.status(404).json(
            {
                message: "auth not found"
            }
        )
    }
}


exports.EditAdmin = async(req, res)=>{
    try {
        const auth = await SuperAdmin.findByIdAndUpdate(req.params.id, {
            ...req.body
        })
        res.status(200).json(
            {
                message: "success",
                data: auth
            }
        )
    } catch (err) {
        res.status(404).json(
            {
                message: "auth not found"
            }
        )
    }
}




exports.DeleteAdmin = async(req, res)=>{
    try {
        const auth = await SuperAdmin.findByIdAndDelete({_id: req.params.id}).sort({date: -1})
        res.status(200).json(
            {
                message: "success",
                data: auth
            }
        )
    } catch (err) {
        res.status(404).json(
            {
                message: "auth not found"
            }
        )
    }
}