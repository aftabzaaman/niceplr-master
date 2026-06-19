import * as migration_20260619_104419_init from './20260619_104419_init';

export const migrations = [
  {
    up: migration_20260619_104419_init.up,
    down: migration_20260619_104419_init.down,
    name: '20260619_104419_init'
  },
];
