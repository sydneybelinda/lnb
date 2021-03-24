import db from "../../../models";

export default async (req, res) => {
  const {
    query: { serviceid },
  } = req;

  const s = await db.services.findAll({});

  if (!s) {
    escort = [];
  }

  return res.status(200).send(s);
};
