import { Router } from 'express';
const routes = Router();

import ongController from './controllers/ongController';
import incidentController from './controllers/incidentController';
import sessionController from './controllers/sessionController'
import profileController from './controllers/profileController';
import { celebrate, Joi, Segments } from 'celebrate';

const OngController = new ongController();
const IncidentController = new incidentController();
const SessionController = new sessionController();
const ProfileController = new profileController();

routes
  .get('/ongs', OngController.index)
  .post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.number().required().min(10).max(13),
      ciry: Joi.string().required(),
      uf: Joi.string().required().length(2),
    })
  }), OngController.create)
;

routes.post('/sessions', celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required(),
  })
}), SessionController.create)

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), ProfileController.index)

routes
  .post('/incidents', IncidentController.create)
  .get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    })
  }), IncidentController.index)
  .delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    })
  }), IncidentController.delete)
;

export default routes;

