import { getRepository, Repository } from 'typeorm';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';

import UserToken from '../entities/UserToken';

class UserTokensRepository implements IUserTokensRepository {
  private ormRepostory: Repository<UserToken>;

  constructor() {
    this.ormRepostory = getRepository(UserToken);
  }

  public async findByToken(token: string): Promise<UserToken | undefined> {
    const userToken = await this.ormRepostory.findOne({ where: { token } });

    return userToken;
  }

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = this.ormRepostory.create({ user_id });

    await this.ormRepostory.save(userToken);

    return userToken;
  }
}

export default UserTokensRepository;
