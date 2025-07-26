interface Raiting {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Raiting;
}

export interface FiliterData {
  sort: Sort;
  searchText: string;
}

export enum Sort {
  PRICE_LOW = 'PRICE_LOW',
  PRICE_HIGH = 'PRICE_HIGH',
  NAME_ASC = 'NAME_ASC',
  NAME_DESC = 'NAME_DESC',
}
