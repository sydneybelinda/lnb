
import db from "../../../models"

export default async (req, res) => {

  try {

    var escorts = [];

     escorts = await db.escorts.findAndCountAll({
      where: {
        enabled: "True",
      },
      order: [['position', 'DESC']],
  
    })

    if(!escorts){
      escorts = [];
    }



    return res.status(200).send(escorts);
  } catch (err) {
    return res.status(500).send(err);
  }

};
