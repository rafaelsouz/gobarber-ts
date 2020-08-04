import { container } from 'tsyringe';

import IStorageProvider from './models/IStorageProvider';

import DiskStorageProvider from './implementations/DiskStorageProvider';

const providers = {
  disk: DiskStorageProvider,
};

// Criando uma instancia para disparar o constructor da classe
container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers.disk,
);
