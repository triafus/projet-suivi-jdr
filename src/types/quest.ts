import type { BaseEntity } from './base';

export interface Quest extends BaseEntity {
  status: 'inactive' | 'active' | 'terminée' | 'abandonnée';
  locationId: string;
  activationPassword?: string;
  resolutionPassword?: string;
  rewardItemIds?: string[];
  rewardClueIds?: string[];
}
