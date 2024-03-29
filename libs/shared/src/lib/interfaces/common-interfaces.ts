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
  category: string;
  thumbnail: string;
  __v: number;
}

export interface IProductsResponse {
  data: IProduct;
  status: number;
}
