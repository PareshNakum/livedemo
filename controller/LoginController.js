var register = require('../model/RegisterModel');

const user_register = async (req, res) => {

    var data = await register.find({ "email": req.body.email });

    if (data.length == 0) {

        var data = await register.create(req.body);
        console.log(data);

        res.status(200).json({
            status: "success",
            data
        })
    }
    else
    {
        res.status(200).json({
            status:"Your email is already register"
        })
    }
}

const user_login = async (req,res) => {

    var data = await register.find({"email":req.body.email});

    if(data.length == 1)
    {
        if(data[0].password==req.body.password)
        {
            res.status(200).json({
                status:"Success"
            })
        }
        else
        {
            res.status(200).json({
                status:"Check Password"
            })
        }
    }
    else if(data.length==0)
    {
        res.status(200).json({
            status:"Check your email."
        })
    }
    else if(data.length != 0)
    {
        res.status(200).json({
            status:"Find multiple accounts",
            data
        })
    }

}

const user_update = async (req,res) => {

    var id = req.params.id;

    await register.findByIdAndUpdate(id,req.body);

    var data = await register.findById(id);

    res.status(200).json({
        status:"Success",
        data
    });

}


const user_delete = async (req,res) => {

    var id = req.params.id;

    await register.findByIdAndDelete(id,req.body);

    var data = await register.findById(id);

    res.status(200).json({
        status:"Success",
        data
    });

}

/* Pagination */

const get_user = async (req,res) => {

    var page_no = req.params.page_no;

    var start = (page_no-1)*3;

    var data = await register.find().skip(start).limit(3);

    res.status(200).json({
        status:"Success",
        data,
        page_no,
        start
    })
}




module.exports = {
    user_register,
    user_login,
    user_update,
    user_delete,
    get_user
}