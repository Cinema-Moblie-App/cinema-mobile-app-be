import db from '../database/dbConnect.js';
import { promisify } from 'util';

const query = promisify(db.query).bind(db);

const ticketRepository = {
   

}

export default ticketRepository