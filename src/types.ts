export interface IItem {
  categoryId: string;
  categoryName: string;
  categoryType: CategoryType;
  description: string;
  discount: number | null;
  id: string;
  isLimited: boolean;
  isNew: boolean;
  name: string;
  price: number;
}

export type CategoryType = 'barley' | 'canola' | 'corn' | 'oats' | 'soybeans' | 'wheat';