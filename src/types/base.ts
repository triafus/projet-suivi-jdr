export type EntityStatus = 'brouillon' | 'disponible' | 'active' | 'inactive' | 'actif' | 'terminé' | 'terminée' | 'abandonnée' | 'vivant' | 'mort';

export interface BaseEntity {
  id: string;
  name: string;
  description: string;
  comment?: string; // Visible uniquement par le MJ
}
