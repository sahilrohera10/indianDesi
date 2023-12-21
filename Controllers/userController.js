const userModel = require("../Models/userModel");

module.exports = {
    signUp,
    login
};

async function signUp(req, res) {
  const body = req.body;
  try {
    const alreadyExist = await userModel.findOne({ email: body.email });
    if (alreadyExist) {
      res.status(300).json("Already Registered");
    }
    const data = await userModel.create({
      name: body.name,
      email: body.email,
      password: body.password,
    });
    console.log(data);
    res.status(200).json({ data: data });
  } catch (error) {
    console.log(error);
  }
}

async function login(req,res){
 const body = req.body;
    try {
      const user = await userModel.findOne({email: body.email});
      if(!user){
        return res.status(404).json("user does not exist");
      }
      if (body.Password != user.Password) {
        return res.status(401).json("Wrong Email and Password");
      }
      return res.status(200).json({user});
    } catch (error) {
        console.log(error);
    }

}

