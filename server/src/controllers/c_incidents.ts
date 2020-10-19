import { Request, Response } from "express";
import knex from "../database/connection";

export default class incidentController {
  async create(req: Request, res: Response) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await knex("incidents").insert({
      title,
      description,
      value,
      ong_id,
    });

    return res.json({ id });
  }

  async index(req: Request, res: Response) {
    const { page } = req.query;
    const [count] = await knex("incidents").count();

    const incidents = await knex("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .limit(5)
      .offset((<any>page - 1) * 5)
      .select(
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
      );

    res.header("X-Total-Count", <any>count["count(*)"]);

    return res.json({ incidents });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incident = await knex("incidents")
      .where("id", id)
      .select("ong_id")
      .first();
    if (incident.ong_id !== ong_id) {
      return res.status(401).json({
        error: "Operation Unauthorized! Try again.",
      });
    }

    await knex("incidents").where("id", id).delete();

    return res.status(204).send();
  }
}
