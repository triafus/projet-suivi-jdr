import type { BaseEntity } from './base';

export interface Player extends BaseEntity {
  status: 'vivant' | 'mort';
  inventoryItemIds: string[];
  inventoryClueIds: string[];
  currentLocationId?: string; // S'il a besoin de savoir où il est actuellement
}
