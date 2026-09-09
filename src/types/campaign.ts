import type { BaseEntity } from './base';
import type { Chapter } from './chapter';
import type { Quest } from './quest';
import type { Player } from './player';
import type { Location, Item, Clue } from './content';

export interface Campaign extends BaseEntity {
  status: 'brouillon' | 'disponible' | 'active';
  playerIds: string[];
  chapterIds: string[];
}

export interface CampaignExport {
  campaign: Campaign;
  chapters: Chapter[];
  quests: Quest[];
  players: Player[];
  locations: Location[];
  items: Item[];
  clues: Clue[];
}
