import type { BaseEntity } from './base';

export interface Chapter extends BaseEntity {
  status: 'inactif' | 'actif' | 'terminé';
  activationPassword?: string;
  requiredItemIds?: string[];
  resolutionPassword?: string;
  rewardItemIds?: string[];
  rewardClueIds?: string[];
  questIds: string[];
}
