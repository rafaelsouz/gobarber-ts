import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentesController from '../controllers/AppointmentController';

const appointmentsRouter = Router();
const appointmentesController = new AppointmentesController();

appointmentsRouter.use(ensureAuthenticated);

// appointmentsRouter.get('/', async (req, res) => {
//   const appointments = await appointmentsRepository.find();

//  return res.json(appointments);
// });

appointmentsRouter.post('/', appointmentesController.create);

export default appointmentsRouter;
