import { withIronSession } from "next-iron-session";
import db from '../../../models'
import bcrypt from "bcryptjs";

const { Op } = require("sequelize");

var user = []

async function handler(req, res) {



    try {
        let errors = {};
    
         if (req.method === "POST") {
            const data = req.body.data;

            console.log(data)
    
           user = await db.users.findOne({
            where: {
              [Op.or]: [
                { username: data.username },
                { email: data.username }
              ]
            }
          })
            // if (!user) {
            //   let error = {};
            //   errors.email = "No Account Found";
            //   // const error = new Error(errors.email)
            //   error.response = "No Account Found";
            //   res.status(400).json(error);
            //   //  throw error
            // }
            if (user) {
            const pass = await bcrypt.compare(data.password, user.password)
              if (pass) {
                // const id  = user.id
                // return res.status(200).json({ token: id })
    
                // const payload = {
                //   id: user.id,
                //   username: user.username,
                //   email: user.email
                // };
    
                // let token = jwt.sign(payload, PRIVATEKEY);
                const response = ({user: user});
            
    
              } else {
                const response = "Username or Password is incorrect";
                res.status(400).json({ response: response });
            
              }
            }
          } else {
            const response = "Username or Password is incorrect";
            res.status(400).json({ response: response });
          }
    
    
      } catch (error) {
        const { response } = error;
        return response
          ? res.status(response.status).json({ response: response.statusText })
          : res.status(400).json({ response: error.message });
      }



  // get user from database then:
  req.session.set("user", {
    id: user.id,
    username: user.name,
  });
  await req.session.save();
  res.send("Logged in");








}

export default withIronSession(handler, {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: "lnb",
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});