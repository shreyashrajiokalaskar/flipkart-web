export interface IUserData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface IProduct {
  images: string[];
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: {
    slug: string;
  };
  thumbnail: string;
  __v: number;
}

export interface IProductsResponse {
  data: IProduct;
  status: number;
}

export interface ICategory {
  id: string,
  createdAt: string,
  updatedAt: string,
  deletedAt: string,
  slug: string,
  name: string
}

export interface ICategoriesResponse {
  data:{categories: ICategory[]},
  status:number;
}