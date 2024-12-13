export interface Business {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  description: string;
  image: string;
  categoryId: string;
  category: Category;
  hours: Hour[];
  dishes: Dish[];
  attributes: Attribute[];
}

export interface Category {
  id: string;
  name: string;
  businesses: Business[];
}

export interface Hour {
  id: string;
  day: string;
  start: string;
  end: string;
  businessId: string;
}

export interface Dish {
  id: string;
  name: string;
  description: string;
  type: string; // MAIN, SIDE, DESSERT, APPETIZER
  price: 23.5;
  image: string;
}

export interface Attribute {}
