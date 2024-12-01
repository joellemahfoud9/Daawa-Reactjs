import { Business } from "./Business";

export interface Collection {
  id: string;
  name: string;
  collectionBusinesses: { business: Business };
}
