import { Router } from 'express';
const routes = Router();

import ongController from './controllers/ongController';
import incidentController from './controllers/incidentController';
import sessionController from './controllers/sessionController'
import profileController from './controllers/profileController';

const OngController = new ongController();
const IncidentController = new incidentController();
const SessionController = new sessionController();
const ProfileController = new profileController();

routes
  .post('/ongs', OngController.create)
  .get('/ongs', OngController.index)
;

routes.post('/sessions', SessionController.create)
routes.get('/profile', ProfileController.index)

routes
  .post('/incidents', IncidentController.create)
  .get('/incidents', IncidentController.index)
  .delete('/incidents/:id', IncidentController.delete)
;

export default routes;

