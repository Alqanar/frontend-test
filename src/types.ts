export interface IItem {
  categoryId: string;
  categoryName: string;
  categoryType: string;
  description: string;
  discount: number | null;
  id: string;
  isLimited: boolean;
  isNew: boolean;
  name: string;
  price: number;
}
