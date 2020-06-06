import Appoitment from '@modules/appointments/infra/typeorm/entities/Appointment';

export default interface IAppointmentsRepository {
  findByDate(date: Date): Promise<Appoitment | undefined>;
}
