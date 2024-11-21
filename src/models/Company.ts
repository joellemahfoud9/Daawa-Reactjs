export interface Company {
  id: number;
  name: string;
  imageUrl: string;
  rating: number;
  location: string;
  description: string;
  price?: number;
  dishes?: Dish[];
  charOptions?: CharOption[];
}

export interface Dish {
  name: string;
  price: number;
}

export interface CharOption {
  type: string;
  price: number;
}
