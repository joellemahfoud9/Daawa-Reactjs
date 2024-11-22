export interface Planner {
  id: number;
  name: string;
  price: string;
  photo: string;
  phone: string;
  previousWorks: PreviousWork[];
  schedule: Schedule;
}

export interface PreviousWork {
  id: number;
  image: string;
  title: string;
}

export interface Schedule {
  1: string;
  2: string;
  //... continue as needed
  30: string;
}
