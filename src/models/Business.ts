
  export interface Business {
    id: string
    name: string
    email: string
    phone: string
    address: string
    description: string
    image: string
    categoryId: string
    category: Category
    hours: Hour[]
  }
  
  export interface Category {
    id: string
    name: string
  }
  
  export interface Hour {
    id: string
    day: string
    start: string
    end: string
    businessId: string
  }
  