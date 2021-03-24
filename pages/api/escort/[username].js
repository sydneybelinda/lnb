
//import { File, Escort } from "../../../models";

import db from "../../../models"

export default async (req, res) => {

  
  const {
    query: { username }
  } = req;


  var escort = []

  const e = await db.escorts.findOne({
    where: {
      enabled: "True",
      username: username
    }

  })

  const files = await db.files.findAll({
    where: {
      user: username,
      type: "Thumb"
    }

  })

 escort.push(e);
 escort.push({files: files})

      if (!escort) {
escort = [];
    }



  return res.status(200).send(escort);
};





