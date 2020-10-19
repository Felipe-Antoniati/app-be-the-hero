import Router from "express";
import { celebrate, Joi, Segments } from "celebrate";

import ongController from "../controllers/c_ongs";
const OngController = new ongController();

const ongRouters = Router();

ongRouters
  // Create Ongs
  .post(
    "/ongs",
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(13),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
      }),
    }),
    OngController.create
  )
  // List All Ongs
  .get("/ongs", OngController.index);

export default ongRouters;