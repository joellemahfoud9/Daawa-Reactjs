export const services = [
  {
    title: "Wedding Planner",
    imageUrl: "src/assets/Services/undefined.webp",
  },
  {
    title: "Master of Ceremonies",
    imageUrl: "src/assets/Services/BrookRosePhotography-Reception102.jpg",
  },
  {
    title: "Destination Wedding",
    imageUrl: "src/assets/Services/ModernMonogram.jpg",
  },
  {
    title: "Master of Ceremonies",
    imageUrl: "src/assets/Services/BrookRosePhotography-Reception102.jpg",
  },
  {
    title: "Wedding Planner",
    imageUrl: "src/assets/Services/undefined.webp",
  },
];
export const cartData = [
  {
    id: 1,
    name: "Invitation Card",
    color: "White",
    price: 39,
    quantity: 2,
    image: "src/assets/Services/ModernMonogram.jpg",
  },
  {
    id: 2,
    name: "Flawers",
    price: 39,
    quantity: 1,
    image: "src/assets/Banner/Wedding-Traditions-Bouquet-5.jpg",
  },
];

export const packages = [
  {
    id: 1,
    title: "Package One Name",
    description:
      "Write about your package here! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    imageUrl:
      "src/assets/Packages/20Wedding+photo+ideas+of+bride+and+groomjpg.jpg",
  },
  {
    id: 2,
    title: "Package Two Name",
    description:
      "Write about your package here! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    imageUrl: "src/assets/Packages/638e38e354ac0f001950f832.webp",
  },
  {
    id: 3,
    title: "Package Three Name",
    description:
      "Write about your package here! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    imageUrl: "src/assets/Packages/7357cef84848a3baf9369e9c49e643b0.jpg",
  },
];

export const products = [
  {
    id: 1,
    name: "Blossom & Bloom",
    image: "src/assets/Banner/Wedding-Traditions-Bouquet-5.jpg",
    rating: 4,
    price: 50.0,
  },
  {
    id: 2,
    name: "Floral Fantasy",
    image:
      "src/assets/Banner/20200514033505_file_5ebd65299a07c_5ebd659deb0b1.avif",
    rating: 5,
    price: 35.0,
  },
  {
    id: 3,
    name: "Petals & Posies",
    image:
      "src/assets/Packages/20Wedding+photo+ideas+of+bride+and+groomjpg.jpg",
    rating: 4,
    price: 65.0,
  },
];

// src/constant/index.js
export const planners = [
  {
    id: 1,
    name: "Jane Doe",
    price: "$2,500",
    photo: "/src/assets/Planners/2H7A3325-SLouttit-1-1.jpg",
    phone: "(123) 456-7890",
    previousWorks: [
      {
        id: 1,
        image: "/src/assets/Packages/638e38e354ac0f001950f832.webp",
        title: "Elegant Wedding Setup",
      },
      {
        id: 2,
        image: "/src/assets/Packages/7357cef84848a3baf9369e9c49e643b0.jpg",
        title: "Beachside Ceremony",
      },
      {
        id: 3,
        image: "/src/assets/Services/undefined.webp",
        title: "Garden Reception",
      },
    ],
    schedule: {
      1: "10 AM - 6 PM",
      2: "Closed",
      //... continue as needed
      30: "10 AM - 6 PM",
    },
  },
  {
    id: 2,
    name: "Alex Smith",
    price: "$3,000",
    photo: "/src/assets/Planners/images.jpg",
    phone: "(987) 654-3210",
    previousWorks: [
      {
        id: 4,
        image: "/src/assets/Testimonial/1_R61828.jpg",
        title: "Rustic Barn Wedding",
      },
      {
        id: 5,
        image: "/src/assets/Packages/7357cef84848a3baf9369e9c49e643b0.jpg",
        title: "Mountain Elopement",
      },
      {
        id: 6,
        image:
          "/src/assets/Services/photographer/1d4a6ebd857e68c63a285caef915bef4.jpg",
        title: "City Hall Ceremony",
      },
    ],
    schedule: {
      1: "Closed",
      2: "10 AM - 5 PM",
      //... continue as needed
      30: "Closed",
    },
  },
  {
    id: 3,
    name: "Sophia Lee",
    price: "$2,800",
    photo: "/src/assets/Planners/KvdB-Vierkant-1024x883.jpg",
    phone: "(555) 123-4567",
    previousWorks: [
      {
        id: 7,
        image: "/src/assets/Services/undefined.webp",
        title: "Luxury Indoor Wedding",
      },
      {
        id: 8,
        image: "/src/assets/Testimonial/1_R61828.jpg",
        title: "Minimalist Garden Party",
      },
      {
        id: 9,
        image: "/src/assets/Packages/7357cef84848a3baf9369e9c49e643b0.jpg",
        title: "Sunset Beach Wedding",
      },
    ],
    schedule: {
      1: "9 AM - 6 PM",
      2: "9 AM - 6 PM",
      //... continue as needed
      30: "Closed",
    },
  },
];

export const servicesData = [
  {
    serviceName: "Photography",
    companies: [
      {
        id: 1,
        name: "Sunshine Studios",
        imageUrl:
          "/src/assets/Services/photographer/1d4a6ebd857e68c63a285caef915bef4.jpg",
        rating: 4,
        price: 50.0,
        location: "Los Angeles, CA",
        description:
          "Specializes in wedding and event photography with a creative touch.",
      },
      {
        id: 2,
        name: "Moment Capture",
        imageUrl:
          "/src/assets/Services/photographer/questions-to-asj-wedding-photographer-recirc-getty-images--61ea34e9e287426d9ca41ae4615e964a.jpg",
        rating: 5,
        price: 50.0,
        location: "San Francisco, CA",
        description:
          "Capturing the most precious moments for your special day.",
      },
      {
        id: 3,
        name: "Wedding Shots",
        imageUrl:
          "/src/assets/Services/photographer/istockphoto-1335303339-612x612.jpg",
        rating: 3,
        price: 50.0,
        location: "New York, NY",
        description:
          "Offering traditional and modern photography for weddings and events.",
      },
    ],
  },

  {
    serviceName: "Catering",
    companies: [
      {
        id: 4,
        name: "Tasty Treats",
        imageUrl:
          "/src/assets/Services/catering/a-lavish-wedding-buffet-spread-featuring-an-array-OHIUJEtmT5qLaQCx7jgERg-2IBg5PRtSXmwqreVFya8kw.webp",
        rating: 4,
        location: "Miami, FL",
        description:
          "Premium catering services with a focus on fresh, local ingredients.",
        dishes: [
          { name: "Grilled Salmon", price: 20 },
          { name: "Steak", price: 25 },
          { name: "Vegan Platter", price: 15 },
        ],
      },
      {
        id: 5,
        name: "Delicious Bites",
        imageUrl:
          "/src/assets/Services/catering/wedding-catering-charlotte-1.jpg",
        rating: 4,
        location: "Chicago, IL",
        description:
          "Specializing in exquisite catering for events of all sizes.",
        dishes: [
          { name: "Chicken Wings", price: 18 },
          { name: "Vegetarian Tacos", price: 14 },
          { name: "Pasta Primavera", price: 16 },
        ],
      },
      // More companies...
    ],
  },

  {
    serviceName: "Venous",
    companies: [
      {
        id: 10,
        name: "Elegant Events",
        imageUrl:
          "/src/assets/Services/venus/Country-wedding-minimalist-ideas_1200x628.png",
        rating: 5,
        location: "Dallas, TX",
        description:
          "Offering charter services for weddings, parties, and corporate events.",
        charOptions: [
          { type: "Small Charter", price: 100 },
          { type: "Large Charter", price: 200 },
        ],
      },
      {
        id: 11,
        name: "Charter Express",
        imageUrl:
          "/src/assets/Services/venus/0a70010c-b47a-4482-a620-00fa9326e519.jpg",
        rating: 4,
        location: "Orlando, FL",
        description: "Providing luxury charter services for every occasion.",
        charOptions: [
          { type: "Medium Charter", price: 150 },
          { type: "Luxury Charter", price: 300 },
        ],
      },
      // More companies...
    ],
  },
];

export const Businesses = [

      {
        id: "6739e17999bf1bea063adbbd",
        name: "name",
        email: "email@example.com",
        phone: "+123456789",
        address: "City - Street - Details",
        description: "description of the business",
        image: "image01.jpg",
        categoryId: "6739df2299bf1bea063adbb5",
        category: { id: "6739df2299bf1bea063adbb5", name: "name" },
        hours: [
          {
            id: "673a5be3f482cf5c3c6759e1",
            day: "MON",
            start: "08:00am",
            end: "05:00pm",
            businessId: "6739e17999bf1bea063adbbd",
          },
          {
            id: "673a5be9f482cf5c3c6759e2",
            day: "TUE",
            start: "08:00am",
            end: "05:00pm",
            businessId: "6739e17999bf1bea063adbbd",
          },
        ],
      },
      {
        id: "673f4fd8de61356c53e7ee95",
        name: "name02",
        email: "email02@example.com",
        phone: "+12345678902",
        address: "City - Street - Details",
        description: "description of the business",
        image: "b4dc8de488110daed397b29f9d1d6bf5",
        categoryId: "6739df2299bf1bea063adbb5",
        category: { id: "6739df2299bf1bea063adbb5", name: "name" },
        hours: [],
      },
      {
        id: "673f5028d7a14e75277bf586",
        name: "name03",
        email: "email03@example.com",
        phone: "+12345678903",
        address: "City - Street - Details",
        description: "description of the business",
        image: "uploads\\b399663153fa0734557f0481a66e2969",
        categoryId: "6739df2299bf1bea063adbb5",
        category: { id: "6739df2299bf1bea063adbb5", name: "name" },
        hours: [],
      },
      {
        id: "673f506afddbbf43f14cac85",
        name: "name04",
        email: "email04@example.com",
        phone: "+12345678904",
        address: "City - Street - Details",
        description: "description of the business",
        image: "uploads\\1b538e5e864394a0d457767792153c83",
        categoryId: "6739df2299bf1bea063adbb5",
        category: { id: "6739df2299bf1bea063adbb5", name: "name" },
        hours: [],
      },
      {
        id: "673f50a332bd7f972e3ed7bf",
        name: "name05",
        email: "email05@example.com",
        phone: "+12345678905",
        address: "City - Street - Details",
        description: "description of the business",
        image: "uploads\\30cfe6b13ea85c0ba792171408666133",
        categoryId: "6739df2299bf1bea063adbb5",
        category: { id: "6739df2299bf1bea063adbb5", name: "name" },
        hours: [],
      },
      {
        id: "673f53575fb631bb9ba36ec7",
        name: "name06",
        email: "email06@example.com",
        phone: "+12345678906",
        address: "City - Street - Details",
        description: "description of the business",
        image: "uploads\\1732203350398.png",
        categoryId: "6739df2299bf1bea063adbb5",
        category: { id: "6739df2299bf1bea063adbb5", name: "name" },
        hours: [],
      },
      {
        id: "673fb1f873b64dc992bcba7a",
        name: "name10",
        email: "email10@example.com",
        phone: "+12345678910",
        address: "City - Street - Details",
        description: "description of the business",
        image: "https://i.ibb.co/rHVyYrS/undefined.jpg",
        categoryId: "6739df2299bf1bea063adbb5",
        category: { id: "6739df2299bf1bea063adbb5", name: "name" },
        hours: [],
      },
      {
        id: "673fb20e73b64dc992bcba7c",
        name: "name07",
        email: "email07@example.com",
        phone: "+12345678907",
        address: "City - Street - Details",
        description: "description of the business",
        image: "https://i.ibb.co/1mzvL38/undefined.jpg",
        categoryId: "6739df2299bf1bea063adbb5",
        category: { id: "6739df2299bf1bea063adbb5", name: "name" },
        hours: [],
      },
      {
        id: "673fb2832fd557658b9fa68b",
        name: "name08",
        email: "email08@example.com",
        phone: "+12345678908",
        address: "City - Street - Details",
        description: "description of the business",
        image: "https://i.ibb.co/1mzvL38/undefined.jpg",
        categoryId: "6739df2299bf1bea063adbb5",
        category: { id: "6739df2299bf1bea063adbb5", name: "name" },
        hours: [],
      },
      {
        id: "673fb2b62fd557658b9fa68d",
        name: "name09",
        email: "email09@example.com",
        phone: "+12345678909",
        address: "City - Street - Details",
        description: "description of the business",
        image: "https://i.ibb.co/FhJS9YV/1732227756066.jpg",
        categoryId: "6739df2299bf1bea063adbb5",
        category: { id: "6739df2299bf1bea063adbb5", name: "name" },
        hours: [],
      },
];
