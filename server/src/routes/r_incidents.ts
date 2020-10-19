import Router from "express";
import { celebrate, Joi, Segments } from "celebrate";

import incidentController from "../controllers/c_incidents";
const IncidentController = new incidentController();

const incidentsRouters = Router();

incidentsRouters
  // Create Incidents
  .post("/incidents", IncidentController.create)
  // List all Incidents
  .get(
    "/incidents",
    celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
      }),
    }),
    IncidentController.index
  )
  // Destroy Incidents
  .delete(
    "/incidents/:id",
    celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
      }),
    }),
    IncidentController.delete
  );

export default incidentsRouters;
