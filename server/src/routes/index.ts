import { Router } from "express";
const routesRouters = Router();

import OngsRouters from "./r_ongs";
import IncidentsRouters from "./r_incidents";
import SessionsRouters from "./r_sessions";
import ProfileRouters from "./r_profile";

routesRouters
  .use("/", OngsRouters)
  .use("/", IncidentsRouters)
  .use("/", SessionsRouters)
  .use("/", ProfileRouters)
;

export default routesRouters;
