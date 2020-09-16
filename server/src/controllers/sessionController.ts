import {Request, Response} from 'express';
import knex from '../database/connection';

class sessionController {

  async create(req: Request, res: Response) {
    const {id} = req.body

    const ong = await knex('ongs')
      .where('id', id)
      .select('name')
      .first()
    ;

    if(!ong){
      return res.status(400).json({
        error: 'No such ONG found with this ID'
      });      
    }
    return res.json(ong)

  };

};

export default sessionController;