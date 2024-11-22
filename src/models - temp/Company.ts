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

/* TYPE GUARDS */

// Dishes
export function hasDishes(
  company: Company
): company is Company & { dishes: Dish[] } {
  return (company as Company).dishes !== undefined;
}
// CharOptions
export function hasCharOptions(
  company: Company
): company is Company & { charOptions: CharOption[] } {
  return (company as Company).charOptions !== undefined;
}
// Price
export function hasPrice(
  company: Company
): company is Company & { price: number } {
  return (company as Company).price !== undefined;
}
