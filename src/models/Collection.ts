import { Business } from "./Business";

export interface Collection {
  id: string;
  name: string;
  image?: string; 
  collectionBusinesses: { business: Business };
}
