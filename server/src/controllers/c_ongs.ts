import { Request, Response } from "express";
import crypto from "crypto";
import knex from "../database/connection";

class ongController {
  async create(req: Request, res: Response) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString("hex");

    await knex("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.status(201).json({ id });
  }

  async index(req: Request, res: Response) {
    const ongs = await knex("ongs").select("*");
    return res.json({ ongs });
  }
}

export default ongController;
