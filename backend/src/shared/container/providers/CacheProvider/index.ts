import { container } from 'tsyringe';

import ICacheProvider from './models/ICacheProvider';

import RedisCacheProvider from './implementations/RedisCacheProvider';

const providers = {
  redis: RedisCacheProvider,
};

// Criando uma instancia para disparar o constructor da classe
container.registerSingleton<ICacheProvider>('CacheProvider', providers.redis);
