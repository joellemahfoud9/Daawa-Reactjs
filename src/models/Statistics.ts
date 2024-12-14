export interface Statistics {
  count: Count;
}

interface Count {
  users: number;
  businesses: number;
  categories: number;
  collections: number;
  dishes: number;
  hours: number;
}
