
export type TProductCategories = 
  'Software Development' |
  'Daily Business' |
  'Daily Business' |
  'Graphic Editors' |
  'Graphic Editors' |
  'Text Editors' |
  'Management Tools'

  export interface IProduct {
    productName: string;
    tags: string[];
    category: TProductCategories;
    manufacturerUrl: string;
    description: string[];
    option1: string | null;
    option2: string | null;
  }