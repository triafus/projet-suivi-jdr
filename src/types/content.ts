import type { BaseEntity } from './base';

export interface Location extends BaseEntity {
  // name, description, comment inherited
}

export interface Item extends BaseEntity {
  // name, description, comment inherited
}

export interface Clue extends BaseEntity {
  text: string;
}
